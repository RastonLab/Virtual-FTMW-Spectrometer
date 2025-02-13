import React from 'react';
import { useSelector } from 'react-redux';
import SvgInstrumentWindowComponent from './InstrumentWindowComponent';
import '../../style/InstrumentWindow.css';


/**
 * A component that contains the instrument window
 */
const InstrumentWindow = () => {
  const { molecule, frequencyMin, frequencyMax, stepSize, numCyclesPerStep, microwavePulseWidth } = useSelector((store) => store.experimentalSetup);

  return (
    <div id='instrument-window'>
      <SvgInstrumentWindowComponent 
        molecule={molecule} 
        range={`${frequencyMin} - ${frequencyMax}`} 
        frequency={stepSize} 
        cyclePerStep={`${numCyclesPerStep} / ${stepSize}`} 
        microwavePulseWidth={microwavePulseWidth} />
    </div>
  );
}

export default InstrumentWindow;