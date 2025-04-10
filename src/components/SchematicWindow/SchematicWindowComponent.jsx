import * as React from "react";
import { useEffect, useRef } from "react";
import "../../style/SchematicWindow.css"; // Make sure this CSS file exists

const SvgSchematicWindowComponent = ({ onComponentClick, ...props }) => {
  // Use the SVG file directly as an image source from public folder
  const schematicImageUrl = process.env.PUBLIC_URL + "/assets/svg/components/schematic/schematic-window-component.svg";
  
  // Reference to the container
  const containerRef = useRef(null);
  
  // Use relative positions (percentages) instead of fixed pixel positions
  const relativePositions = {
    mwSynthesizer: {
      top: '56.5%',
      left: '77.3%',
      width: '5.1%',
      height: '11.3%'
    },
    powerDivider: {
      top: '58%',
      left: '69.6%',
      width: '3.8%',
      height: '8%'
    },
    radioFrequencyReference: {
      top: '79.5%',
      left: '77.3%',
      width: '5.1%',
      height: '10.9%'
    },
    singleSidebandMixer: {
      top: '81%', 
      left: '69.7%',
      width: '3.7%',
      height: '8%'
    },
    powerAmplifier: {
      top: '80.5%',
      left: '59%',
      width: '4.4%',
      height: '10%'
    },
    switchAttenuator: {
      top: '81.7%',
      left: '50.8%',
      width: '3.8%',
      height: '7.5%'
    },
    circulator: {
      top: '59%',
      left: '40.7%',
      width: '4.4%',
      height: '9.5%'
    },
    wireHookAntenna1: {
      top: '63.5%',
      left: '33%',
      width: '7.8%',
      height: '1.2%'
    },
    wireHookAntenna2: {
      top: '63.5%',
      left: '33%',
      width: '0.5%',
      height: '3%'
    },
    solenoidValve1: {
      top: '61.3%',
      left: '8.5%',
      width: '3.8%',
      height: '6%'
    },
    solenoidValve2: {
      top: '59%',
      left: '12.2%',
      width: '1.5%',
      height: '10.5%'
    },
    fabryPerotCavity: {
      top: '30%',
      left: '13.7%',
      width: '19.3%',
      height: '68.5%'
    },
    nozzleDriver: {
      top: '6%',
      left: '40.5%',
      width: '8.8%',
      height: '20%'
    },
    mwSwitch: {
      top: '38.6%',
      left: '51.2%',
      width: '3.8%',
      height: '7.7%'
    },
    lowNoiseAmplifier: {
      top: '37.6%',
      left: '59.4%',
      width: '3.8%',
      height: '10.4%'
    },
    imageRejectionMixer: {
      top: '38.1%',
      left: '69.7%',
      width: '3.7%',
      height: '8.3%'
    },
    rfAmplifier: {
      top: '38.1%',
      left: '78.5%',
      width: '4%',
      height: '9.5%'
    },
    oscilloscope: {
      top: '10.8%',
      left: '80%',
      width: '8.9%',
      height: '20%'
    },
    frequencyReference: {
      top: '63.5%',
      left: '87%',
      width: '8.9%',
      height: '20%'
    },
    pulseGenerator: {
      top: '6%',
      left: '54.3%',
      width: '22%',
      height: '25%'
    } 
  };

  // Function to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      // Empty function just to handle resize events
      // No need to calculate dimensions since we're using percentages
    };

    // Call once on mount
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="schematic-container" style={{ position: 'relative' }} ref={containerRef}>
      {/* Use the SVG as a regular image with non-draggable class */}
      <img 
        className="non-draggable-image"
        src={schematicImageUrl} 
        alt="Schematic Diagram" 
        style={{ width: '100%', height: 'auto' }}
        draggable="false"
        onDragStart={(e) => e.preventDefault()}
    {...props}
      />
      
      {/* Map through all positions and create clickable areas */}
      {Object.entries(relativePositions).map(([key, position]) => {
        // Extract component ID from the key
        let componentId;
        if (key.includes('wireHookAntenna')) {
          componentId = 'wire-hook-antenna';
        } else if (key.includes('solenoidValve')) {
          componentId = 'solenoid-valve';
        } else if (key === 'mwSynthesizer') {
          componentId = 'microwave-synthesizer';
        } else if (key === 'powerDivider') {
          componentId = 'power-divider';
        } else if (key === 'radioFrequencyReference') {
          componentId = 'radio-frequency-reference';
        } else if (key === 'singleSidebandMixer') {
          componentId = 'single-sideband-mixer';
        } else if (key === 'powerAmplifier') {
          componentId = 'power-amplifier';
        } else if (key === 'switchAttenuator') {
          componentId = 'switch-attenuator';
        } else if (key === 'circulator') {
          componentId = 'circulator';
        } else if (key === 'fabryPerotCavity') {
          componentId = 'fabry-perot-cavity';
        } else if (key === 'nozzleDriver') {
          componentId = 'nozzle-driver';
        } else if (key === 'mwSwitch') {
          componentId = 'mw-switch';
        } else if (key === 'lowNoiseAmplifier') {
          componentId = 'low-noise-amplifier';
        } else if (key === 'imageRejectionMixer') {
          componentId = 'image-rejection-mixer';
        } else if (key === 'rfAmplifier') {
          componentId = 'rf-amplifier';
        } else if (key === 'oscilloscope') {
          componentId = 'oscilloscope';
        } else if (key === 'frequencyReference') {
          componentId = 'frequency-reference';
        } else if (key === 'pulseGenerator') {
          componentId = 'pulse-generator';
        }
        
        // Only render if we have a valid component ID
        if (!componentId || (key.includes('wireHookAntenna') && key !== 'wireHookAntenna1' && key !== 'wireHookAntenna2') || 
            (key.includes('solenoidValve') && key !== 'solenoidValve1' && key !== 'solenoidValve2')) {
          return null;
        }
        
        // Set special styling for certain components
        let additionalStyle = {};
        if (key === 'singleSidebandMixer' || key === 'circulator' || key === 'imageRejectionMixer') {
          additionalStyle.borderRadius = '50%'; // Makes it a circle
        } else if (key === 'powerAmplifier') {
          additionalStyle.clipPath = 'polygon(0% 50%, 100% 0%, 100% 100%)'; // Triangle pointing right
        } else if (key === 'lowNoiseAmplifier' || key === 'rfAmplifier') {
          additionalStyle.clipPath = 'polygon(0% 0%, 0% 100%, 100% 50%)'; // Triangle pointing right
        }
        
        return (
          <div
            key={key}
          style={{
              position: 'absolute',
              top: position.top,
              left: position.left,
              width: position.width,
              height: position.height,
              cursor: 'pointer',
              background: 'transparent',
              zIndex: 10,
              ...additionalStyle
            }}
            onClick={() => onComponentClick(componentId)}
            title={key.replace(/([A-Z])/g, ' $1').trim()}
          />
        );
      })}
    </div>
  );
};

export default SvgSchematicWindowComponent;
