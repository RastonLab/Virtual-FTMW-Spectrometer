import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SvgInstrumentWindowComponent from './InstrumentWindowComponent';
import '../../style/InstrumentWindow.css';
import { getMWBand } from '../../functions/getMWBand';
import { setsMWBand } from '../../redux/experimentalSetupSlice';
import { setSBandState } from './animations/instrumentWindowAnimations';
import Spinner from '../Spinner';

/**
 * A component that contains the instrument window
 */
const InstrumentWindow = () => {
  const dispatch = useDispatch();
  const { molecule, frequencyMin, frequencyMax, stepSize, numCyclesPerStep, microwavePulseWidth, mwBand, acquisitionType } = useSelector((store) => store.experimentalSetup);
  const { error, errorText } = useSelector((store) => store.error);
  const { fetching, prefetch, postfetch } = useSelector((store) => store.progress);

  const delay =  (((frequencyMax - frequencyMin) / stepSize) + 1) * numCyclesPerStep * 1000; // 1000 is to convert to milliseconds

  useEffect(() => {
    if (document.getElementById("instrument-window") !== null) {
      setSBandState();
    }
  }, []);

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
        id='instrument'
        molecule={molecule} 
        range={`${frequencyMin} - ${frequencyMax}`} 
        frequency={stepSize} 
        cyclePerStep={numCyclesPerStep} 
        microwavePulseWidth={microwavePulseWidth}
        mwBand={mwBand}
        pressure={'1.3 x 10⁻⁶ Torr'} />

      <div id="instrument-spinner">
        <h1>Scan Progress</h1>
        {prefetch && <Spinner variant="indeterminate" size={100} />}
        {postfetch && (
          <>
            <h2>Processing Sample...</h2>
            <Spinner
              variant="determinate"
              size={100}
              acquisitionType={acquisitionType}
              frequencyMin={frequencyMin}
              frequencyMax={frequencyMax} 
              stepSize={stepSize}
              numCyclesPerStep={numCyclesPerStep}
              delay={delay}
            />
          </>
        )}
        {!fetching && error && (
          <div id="instrument-error" style={{ display: "grid" }}>
            <p>{errorText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default InstrumentWindow;