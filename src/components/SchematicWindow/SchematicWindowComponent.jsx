import * as React from "react";
import "../../style/SchematicWindow.css"; // Make sure this CSS file exists

const SvgSchematicWindowComponent = ({ onComponentClick, ...props }) => {
  // Use the original SVG file directly as an image source
  const schematicImageUrl = process.env.PUBLIC_URL + "/assets/svg/components/schematic/schematic-window-component.svg";
  
  // Function to handle window resizing and calculate responsive coordinates
  const calculatePosition = () => {
    // Default coordinates assuming a standard viewport width
    return {
      mwSynthesizer: {
        top: '487px',
        left: '1474px',
      },
      powerDivider: {
        top: '500px',
        left: '1328px',
      },
      radioFrequencyReference: {
        top: '680px',
        left: '1474px',
      },
      singleSidebandMixer: {
        top: '696px', 
        left: '1326px',
      },
      powerAmplifier: {
        top: '685px',
        left: '1137px',
      },
      switchAttenuator: {
        top: '575px',
        left: '1137px',
      }
    };
  };

  const positions = calculatePosition();

  return (
    <div className="schematic-container" style={{ position: 'relative' }}>
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
      
      {/* Clickable area for component #1 (MW Synthesizer with sine wave) */}
      <div
        style={{
          position: 'absolute',
          top: positions.mwSynthesizer.top,
          left: positions.mwSynthesizer.left,
          width: '96px',
          height: '98px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10
        }}
        onClick={() => onComponentClick('microwave-synthesizer')}
        title="Microwave Synthesizer"
      />

      {/* Clickable area for component #2 (Power Divider) */}
      <div
        style={{
          position: 'absolute',
          top: positions.powerDivider.top,
          left: positions.powerDivider.left,
          width: '70px',
          height: '70px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Temporarily add border for debugging
          border: '1px solid blue'
        }}
        onClick={() => onComponentClick('power-divider')}
        title="Power Divider"
      />

      {/* Clickable area for component #3 (Radio Frequency Reference) */}
      <div
        style={{
          position: 'absolute',
          top: positions.radioFrequencyReference.top,
          left: positions.radioFrequencyReference.left,
          width: '95px',
          height: '100px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Debugging border to make it visible during development
          border: '1px solid green'
        }}
        onClick={() => onComponentClick('radio-frequency-reference')}
        title="Radio Frequency Reference"
      />

      {/* Clickable area for component #4 (Single Sideband Mixer) - circular shape */}
      <div
        style={{
          position: 'absolute',
          top: positions.singleSidebandMixer.top,
          left: positions.singleSidebandMixer.left,
          width: '73px',
          height: '72px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          borderRadius: '50%', // Makes it a circle
          // Debugging border to make it visible during development
          border: '2px solid purple'
        }}
        onClick={() => onComponentClick('single-sideband-mixer')}
        title="Single Sideband Mixer"
      />

      {/* Clickable area for component #5 (Power Amplifier) - triangular shape pointing right */}
      <div
        style={{
          position: 'absolute',
          top: positions.powerAmplifier.top,
          left: positions.powerAmplifier.left,
          width: '70px',
          height: '90px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Custom shape for triangle using clip-path - pointing right
          clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
          // Debugging border to make it visible during development
          border: '2px solid orange'
        }}
        onClick={() => onComponentClick('power-amplifier')}
        title="Power Amplifier"
      />

      {/* Clickable area for component #6 (Switch Attenuator) */}
      <div
        style={{
          position: 'absolute',
          top: positions.switchAttenuator.top,
          left: positions.switchAttenuator.left,
          width: '70px',
          height: '70px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Debugging border to make it visible during development
          border: '2px solid red'
        }}
        onClick={() => onComponentClick('switch-attenuator')}
        title="MW Switch"
      />
    </div>
  );
};

export default SvgSchematicWindowComponent;
