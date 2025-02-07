import React from 'react';
import { useSelector } from 'react-redux';
import SvgInstrumentWindow from './SvgInstrumentWindow';

/**
 * A component that contains the instrument window
 */
const InstrumentWindow = () => {
  const { molecule, frequencyMin, frequencyMax, stepSize, numCyclesPerStep } = useSelector((store) => store.experimentalSetup);

  return (
    <div id='instrument-window'>
      <SvgInstrumentWindow molecule={molecule} range={`${frequencyMin} - ${frequencyMax}`} frequency={stepSize} cyclePerStep={`${numCyclesPerStep} / ${stepSize}`} />
    </div>
  );
}

export default InstrumentWindow;