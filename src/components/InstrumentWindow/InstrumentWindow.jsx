import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SvgInstrumentWindowComponent from './InstrumentWindowComponent';
import '../../style/InstrumentWindow.css';
import { getMWBand } from '../../functions/getMWBand';
import { setsMWBand } from '../../redux/experimentalSetupSlice';

/**
 * A component that contains the instrument window
 */
const InstrumentWindow = () => {
  const dispatch = useDispatch();
  const { molecule, frequencyMin, frequencyMax, stepSize, numCyclesPerStep, microwavePulseWidth, mwBand } = useSelector((store) => store.experimentalSetup);

  /**
   * Calls the helper method to get mw band value depending on the frequency range on mount
   */
  useEffect(() => {
    const band = getMWBand(frequencyMin, frequencyMax);
    if (band) {
      dispatch(setsMWBand(band));
    }
  });

  return (
    <div id='instrument-window'>
      <SvgInstrumentWindowComponent 
        molecule={molecule} 
        range={`${frequencyMin} - ${frequencyMax}`} 
        frequency={stepSize} 
        cyclePerStep={`${numCyclesPerStep} / ${stepSize}`} 
        microwavePulseWidth={microwavePulseWidth}
        mwBand={mwBand} />
    </div>
  );
}

export default InstrumentWindow;