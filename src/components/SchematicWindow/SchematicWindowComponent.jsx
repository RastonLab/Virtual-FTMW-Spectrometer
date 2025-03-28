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
        top: '700px',
        left: '969px',
      },
      circulator: {
        top: '504px',
        left: '777px',
      },
      wireHookAntenna1: {
        top: '545px',
        left: '629px',
      },
      wireHookAntenna2: {
        top: '545px',
        left: '629px',
      },
      solenoidValve1: {
        top: '527px',
        left: '162px',
      },
      solenoidValve2: {
        top: '508px',
        left: '232px',
      },
      nozzleDriver: {
        top: '50px',
        left: '768px',
      },
      mwSwitch: {
        top: '330px',
        left: '975px',
      },
      lowNoiseAmplifier: {
        top: '330px',
        left: '1130px',
      },
      imageRejectionMixer: {
        top: '330px',
        left: '1325px',
      },
      rfAmplifier: {
        top: '330px',
        left: '1493px',
      },
      oscilloscope: {
        top: '90px',
        left: '1523px',
      },
      frequencyReference: {
        top: '548px',
        left: '1655px',
      },
      pulseGenerator: {
        top: '50px',
        left: '1030px',
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

      {/* Clickable area for component #7 (Circulator) - circular shape */}
      <div
        style={{
          position: 'absolute',
          top: positions.circulator.top,
          left: positions.circulator.left,
          width: '85px',
          height: '85px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          borderRadius: '50%', // Makes it a circle
          // Debugging border to make it visible during development
          border: '2px solid green'
        }}
        onClick={() => onComponentClick('circulator')}
        title="Circulator"
      />

      {/* First clickable area for component #8 (Wire Hook Antenna) - horizontal shape */}
      <div
        style={{
          position: 'absolute',
          top: positions.wireHookAntenna1.top,
          left: positions.wireHookAntenna1.left,
          width: '148px',
          height: '13px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Debugging border to make it visible during development
          border: '2px solid blue'
        }}
        onClick={() => onComponentClick('wire-hook-antenna')}
        title="Wire Hook Antenna"
      />

      {/* Second clickable area for component #8 (Wire Hook Antenna) - horizontal shape */}
      <div
        style={{
          position: 'absolute',
          top: positions.wireHookAntenna2.top,
          left: positions.wireHookAntenna2.left,
          width: '10px',
          height: '27px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Debugging border to make it visible during development
          border: '2px solid cyan'
        }}
        onClick={() => onComponentClick('wire-hook-antenna')}
        title="Wire Hook Antenna"
      />

      {/* First clickable area for component #10 (Solenoid valve/nozzle) */}
      <div
        style={{
          position: 'absolute',
          top: positions.solenoidValve1.top,
          left: positions.solenoidValve1.left,
          width: '70px',
          height: '50px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Debugging border to make it visible during development
          border: '2px solid purple'
        }}
        onClick={() => onComponentClick('solenoid-valve')}
        title="Solenoid Valve (Nozzle)"
      />

      {/* Second clickable area for component #10 (Solenoid valve/nozzle) */}
      <div
        style={{
          position: 'absolute',
          top: positions.solenoidValve2.top,
          left: positions.solenoidValve2.left,
          width: '28px',
          height: '89px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Debugging border to make it visible during development
          border: '2px solid magenta'
        }}
        onClick={() => onComponentClick('solenoid-valve')}
        title="Solenoid Valve (Nozzle)"
      />

      {/* Clickable area for component #11 (Nozzle Driver) - square shape */}
      <div
        style={{
          position: 'absolute',
          top: positions.nozzleDriver.top,
          left: positions.nozzleDriver.left,
          width: '170px',
          height: '175px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Debugging border to make it visible during development
          border: '2px solid darkgreen'
        }}
        onClick={() => onComponentClick('nozzle-driver')}
        title="Nozzle Driver"
      />

      {/* Clickable area for component #12 (MW Switch) - square shape */}
      <div
        style={{
          position: 'absolute',
          top: positions.mwSwitch.top,
          left: positions.mwSwitch.left,
          width: '70px',
          height: '70px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Debugging border to make it visible during development
          border: '2px solid blue'
        }}
        onClick={() => onComponentClick('mw-switch')}
        title="MW Switch"
      />

      {/* Clickable area for component #13 (Low-noise amplifier) - triangular shape pointing right */}
      <div
        style={{
          position: 'absolute',
          top: positions.lowNoiseAmplifier.top,
          left: positions.lowNoiseAmplifier.left,
          width: '85px',
          height: '70px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Custom shape for triangle using clip-path - pointing right
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 50%)',
          // Debugging border to make it visible during development
          border: '2px solid purple'
        }}
        onClick={() => onComponentClick('low-noise-amplifier')}
        title="Low-noise Amplifier"
      />

      {/* Clickable area for component #14 (Image rejection mixer) - circular shape */}
      <div
        style={{
          position: 'absolute',
          top: positions.imageRejectionMixer.top,
          left: positions.imageRejectionMixer.left,
          width: '73px',
          height: '72px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          borderRadius: '50%', // Makes it a circle
          // Debugging border to make it visible during development
          border: '2px solid purple'
        }}
        onClick={() => onComponentClick('image-rejection-mixer')}
        title="Image Rejection Mixer"
      />

      {/* Clickable area for component #15 (RF amplifier) - triangular shape pointing right */}
      <div
        style={{
          position: 'absolute',
          top: positions.rfAmplifier.top,
          left: positions.rfAmplifier.left,
          width: '85px',
          height: '73px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Custom shape for triangle using clip-path - pointing right
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 50%)',
          // Debugging border to make it visible during development
          border: '2px solid purple'
        }}
        onClick={() => onComponentClick('rf-amplifier')}
        title="RF Amplifier"
      />

      {/* Clickable area for component #16 (Oscilloscope) - square shape */}
      <div
        style={{
          position: 'absolute',
          top: positions.oscilloscope.top,
          left: positions.oscilloscope.left,
          width: '170px',
          height: '175px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Debugging border to make it visible during development
          border: '2px solid darkgreen'
        }}
        onClick={() => onComponentClick('oscilloscope')}
        title="Oscilloscope"
      />

      {/* Clickable area for component #17 (Frequency reference) - square shape */}
      <div
        style={{
          position: 'absolute',
          top: positions.frequencyReference.top,
          left: positions.frequencyReference.left,
          width: '170px',
          height: '175px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Debugging border to make it visible during development
          border: '2px solid darkgreen'
        }}
        onClick={() => onComponentClick('frequency-reference')}
        title="Frequency Reference"
      />

      {/* Clickable area for component #18 (Pulse generator) - large rectangular shape */}
      <div
        style={{
          position: 'absolute',
          top: positions.pulseGenerator.top,
          left: positions.pulseGenerator.left,
          width: '425px',
          height: '220px',
          cursor: 'pointer',
          background: 'transparent',
          zIndex: 10,
          // Debugging border to make it visible during development
          border: '2px solid darkblue'
        }}
        onClick={() => onComponentClick('pulse-generator')}
        title="Pulse Generator"
      />
    </div>
  );
};

export default SvgSchematicWindowComponent;
