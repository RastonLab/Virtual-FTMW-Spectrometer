import React, { useEffect, useState, useRef } from 'react';
import '../style/FabryPerotAnimation.css';

const FabryPerotAnimation = () => {
  const [animationStage, setAnimationStage] = useState(0); // 0: empty, 1: arrows moving, 2: arrows in final positions but still rotating
  const [arrowCount, setArrowCount] = useState(0);
  const [waveOpacity, setWaveOpacity] = useState(0); // Start with invisible waves
  const [timestamp, setTimestamp] = useState(0); // For smooth animation updates
  const [arrowRotations, setArrowRotations] = useState([]); // Store individual arrow rotation data
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const MAX_ARROWS = 20; // Restored to 20 arrows
  
  // References to the SVG files
  const redWavesImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Red-Waves.svg";
  const blueArrowImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/blue-arrow.svg";
  
  // Main animation timeline
  useEffect(() => {
    // Start with arrows being released from nozzle
    setAnimationStage(1);
    startTimeRef.current = Date.now();
    
    // Initialize arrow rotation data - all arrows rotate counter-clockwise (same direction)
    // But with slower rotation speed
    setArrowRotations(Array(MAX_ARROWS).fill(0).map(() => ({
      speed: 0.3 + Math.random() * 0.3, // Lower rotation speed (0.3-0.6 rotations per second)
      offset: Math.random() * 360, // Random starting angle
      direction: -1 // All counter-clockwise (-1 = counter-clockwise)
    })));
    
    // After 25 seconds, all arrows reach their final positions simultaneously
    const positionTimer = setTimeout(() => {
      setAnimationStage(2);
      
      // Immediately show red waves at full opacity when arrows are in position
      setWaveOpacity(1); // Full opacity immediately
    }, 25000);
    
    // Reset animation after 40 seconds
    const resetTimer = setTimeout(() => {
      setAnimationStage(0);
      setArrowCount(0);
      setWaveOpacity(0);
      
      // Restart animation after brief pause
      setTimeout(() => {
        setAnimationStage(1);
        startTimeRef.current = Date.now();
      }, 1000);
    }, 40000);
    
    return () => {
      clearTimeout(positionTimer);
      clearTimeout(resetTimer);
    };
  }, []);

  // Handle arrow release - gradually release arrows one by one
  useEffect(() => {
    let arrowInterval;
    
    if (animationStage === 1) {
      // Release arrows from nozzle gradually, one by one, with consistent interval
      arrowInterval = setInterval(() => {
        setArrowCount(prevCount => {
          // Maximum arrows
          if (prevCount >= MAX_ARROWS) {
            clearInterval(arrowInterval);
            return MAX_ARROWS;
          }
          return prevCount + 1;
        });
      }, 1000); // 1 second between arrows for better spacing
    } else if (animationStage === 0) {
      setArrowCount(0);
    }
    
    return () => {
      if (arrowInterval) clearInterval(arrowInterval);
    };
  }, [animationStage]);
  
  // Animation frame for super smooth movement
  useEffect(() => {
    if (animationStage === 1 || animationStage === 2) {
      const animate = (time) => {
        setTimestamp(time);
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [animationStage]);
  
  // Create triangle formation for arrows - based on the reference image
  // The triangle fills most of the cavity between mirrors
  const generateTrianglePositions = () => {
    const positions = [];
    
    // Calculate triangle positions to match the image shown
    // Triangle base (widest part) near the right mirror
    const leftStart = 20; // % from left
    const rightEnd = 80; // % from left
    
    // Vertical range
    const topEnd = 20; // % from top
    const bottomEnd = 80; // % from top
    
    // Number of rows in the triangle
    const numRows = 5;
    
    // For each row, calculate positions
    for (let row = 0; row < numRows; row++) {
      // Calculate how many arrows in this row - more arrows in rows to the right
      const arrowsInRow = 2 + Math.floor((row/numRows) * 3);
      
      // Calculate width of this row - triangle gets wider as we go right
      const rowLeftPos = leftStart + (rightEnd - leftStart) * (row / (numRows - 1));
      const rowWidth = (rightEnd - rowLeftPos) * 0.9; // 90% of distance to rightEnd
      
      // Vertical spacing between arrows in this row
      const rowHeight = (bottomEnd - topEnd) * 0.9; // 90% of vertical space
      const verticalGap = rowHeight / (arrowsInRow + 1);
      
      // Add arrows for this row
      for (let i = 0; i < arrowsInRow; i++) {
        // Calculate vertical position
        const verticalPos = topEnd + (i + 1) * verticalGap;
        
        // Create arrow at this position - with different angles to match the image
        const angle = (row % 2 === 0) 
          ? (i % 2 === 0 ? 45 : -30)  // Alternating directions in even rows
          : (i % 2 === 0 ? -45 : 30); // Alternating directions in odd rows
        
        positions.push({
          left: `${rowLeftPos}%`,
          top: `${verticalPos}%`,
          baseAngle: angle  // This is the base angle for the arrow, rotation will be added
        });
      }
    }
    
    // Add some additional arrows to reach 20 total
    // Fill in gaps to create a denser triangle
    const additionalPositions = [
      { left: '65%', top: '30%', baseAngle: -15 },
      { left: '70%', top: '60%', baseAngle: 15 },
      { left: '50%', top: '70%', baseAngle: -30 },
      { left: '40%', top: '40%', baseAngle: 45 },
      { left: '60%', top: '50%', baseAngle: -45 },
    ];
    
    return [...positions, ...additionalPositions].slice(0, MAX_ARROWS);
  };

  // Final positions for arrows in triangle formation
  const finalArrowPositions = generateTrianglePositions();

  // Generate arrow positions based on animation stage and current time
  const generateArrowPositions = () => {
    if (animationStage === 0 || arrowRotations.length === 0) {
      return []; // No arrows yet or rotations not initialized
    }
    
    // Get current time for ultra-smooth animation
    const currentTime = Date.now();
    const globalElapsedTime = currentTime - startTimeRef.current;
    
    // For stage 2, all arrows are in final position but continuing their original rotation
    if (animationStage === 2) {
      return Array.from({ length: arrowCount }).map((_, index) => {
        const targetPosition = finalArrowPositions[index % finalArrowPositions.length];
        const rotationData = arrowRotations[index] || arrowRotations[0];
        
        // Calculate rotation - maintain consistent spinning with individual properties
        const elapsedSeconds = globalElapsedTime / 1000;
        const baseAngle = targetPosition.baseAngle || 0;
        
        // Calculate rotation angle preserving the original pattern - continuous with stage 1
        const rotationAngle = (rotationData.offset + elapsedSeconds * rotationData.speed * 360 * rotationData.direction) % 360;
        
        return {
          left: targetPosition.left,
          top: targetPosition.top,
          angle: baseAngle + rotationAngle, // Combine base angle with continuous rotation
          id: `arrow-positioned-${index}`,
          active: true,
          inMotion: true, // Keep as "in motion" to maintain animation properties
          arrived: true
        };
      });
    }
    
    // Global timeline progress (0 to 1) - all arrows will follow this for final positioning
    const globalTimelineProgress = Math.min(1, globalElapsedTime / 25000); // 25 seconds total
    
    // Stage 1 - arrows moving from nozzle toward their destinations
    return Array.from({ length: arrowCount }).map((_, index) => {
      // Each arrow has a target position
      const targetPosition = finalArrowPositions[index % finalArrowPositions.length];
      const rotationData = arrowRotations[index] || arrowRotations[0];
      
      // Nozzle position (starting point) - ensure it's at the antenna/orange square
      const nozzleLeft = 5; // percentage (left edge where orange square is)
      const nozzleTop = 50; // percentage (vertical center)
      
      // Each arrow starts its journey at different times
      const arrowCreationTime = index * 1000; // 1 second between arrows
      const arrowElapsedTime = Math.max(0, globalElapsedTime - arrowCreationTime);
      
      // For newly created arrows that haven't started moving yet
      if (arrowElapsedTime <= 0) {
        return {
          left: `${nozzleLeft}%`,
          top: `${nozzleTop}%`,
          angle: 0,
          id: `arrow-waiting-${index}`,
          active: false,
          inMotion: false,
          arrived: false
        };
      }
      
      // Individual arrow progress based on creation time, but constrained by global timeline
      // This ensures all arrows arrive at their destinations at the same time (25 second mark)
      const individualProgress = Math.min(globalTimelineProgress, arrowElapsedTime / (25000 - arrowCreationTime));
      
      // Smooth easing function for natural movement - very gentle curve to reduce "jerky" movements
      const easedProgress = easeInOutCubic(individualProgress);
      
      // Calculate position - linear interpolation from nozzle to final position
      const currentLeft = nozzleLeft + (parseFloat(targetPosition.left) - nozzleLeft) * easedProgress;
      const currentTop = nozzleTop + (parseFloat(targetPosition.top) - nozzleTop) * easedProgress;
      
      // Calculate rotation - using individual rotation data for consistency but slower speed
      const elapsedSeconds = arrowElapsedTime / 1000;
      const baseAngle = targetPosition.baseAngle || 0;
      const baseAngleProgress = easedProgress * baseAngle; // Gradually approach base angle
      const rotationAngle = (rotationData.offset + elapsedSeconds * rotationData.speed * 360 * rotationData.direction) % 360;
      
      // Determine if global timeline has reached end
      const timelineCompleted = globalTimelineProgress >= 1;
      
      return {
        left: `${currentLeft}%`,
        top: `${currentTop}%`,
        angle: baseAngleProgress + rotationAngle,
        id: `arrow-moving-${index}`,
        active: true,
        inMotion: true, // Always in motion for consistent animation
        arrived: timelineCompleted
      };
    });
  };
  
  // Smoother easing function for consistent speed feeling with less abrupt changes
  const easeInOutCubic = (x) => {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  };

  // Get visible arrows based on current animation state and timestamp
  const visibleArrows = generateArrowPositions(timestamp);

  return (
    <div className="animation-container">
      {/* Curved mirrors using SVGs - wider and more curved */}
      <svg className="left-mirror-svg" width="30" height="100%" viewBox="0 0 30 400">
        <path d="M30,0 Q-35,200 30,400" stroke="black" strokeWidth="20" fill="none" />
      </svg>
      
      <svg className="right-mirror-svg" width="30" height="100%" viewBox="0 0 30 400">
        <path d="M0,0 Q65,200 0,400" stroke="black" strokeWidth="20" fill="none" />
      </svg>
      
      {/* Antenna/nozzle on left mirror */}
      <div className="antenna"></div>
      
      {/* Grey marker on right mirror */}
      <div className="marker"></div>
      
      {/* Red waves - instantly visible when stage changes */}
      <img 
        src={redWavesImage} 
        alt="Microwave" 
        className="wave-image"
        style={{ 
          opacity: waveOpacity,
          transition: 'none', // No transition, instant change
        }} 
      />
      
      {/* Render arrows */}
      {visibleArrows.map((arrow) => {
        return (
          <img 
            key={arrow.id}
            src={blueArrowImage} 
            alt="Arrow" 
            className="arrow-image arrow-in-motion" // Always use in-motion class for continuous rotation
            style={{ 
              left: arrow.left, 
              top: arrow.top, 
              transform: `rotate(${arrow.angle}deg)`,
              opacity: arrow.active ? 1 : 0,
              willChange: 'transform', // Optimize performance for rotation
              transition: 'none', // No transition for continuous behavior
            }} 
          />
        );
      })}
    </div>
  );
};

export default FabryPerotAnimation; 