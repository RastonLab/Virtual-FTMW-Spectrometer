import React, { useEffect } from 'react';
import Molecule from './inputs/MoleculeField.js';
import Spinner from '../Spinner';
import BackgroundPlotly from '../BackgroundPlotly';
import { SamplePlotly } from '../SamplePlotly';
import { useDispatch, useSelector } from 'react-redux';
import "../../style/routes/ExperimentalSetup.css";
import FrequencyRange from './inputs/FrequencyRange.js';
import StepSizeOptions from './inputs/StepSizeOptions';
import NumCyclesInput from './inputs/NumCyclesInput';
import MicrowavePulseInput from './inputs/MicrowavePulseInput';
import { setFrequencyRange, setFrequencyMin, setFrequencyMax, } from '../../redux/experimentalSetupSlice.js';
import MicrowaveBand from './inputs/MicrowaveBand.js';

/**
 * A component that contains all the experimental setup components
 */
/* eslint-disable react-hooks/exhaustive-deps */
const ExperimentalSetup = () => {
  const dispatch = useDispatch();
  const { fetching, prefetch } = useSelector((store) => store.progress);
  const { error, errorText } = useSelector((store) => store.error);
  const { devMode } = useSelector((store) => store.devMode);
  const { mwBand, frequencyRange } = useSelector((store) => store.experimentalSetup);

  /**
   * Calls the helper method to get frequency range value depending on the mw band
   */
  useEffect(() => {
    const range = minMaxFrequencyRange();
    dispatch(setFrequencyRange(range));
  }, [mwBand, dispatch]);

  /**
   * Sets the min and max frequency values depending on the frequency range
   */
  useEffect(() => {
    dispatch(setFrequencyMin(frequencyRange.min));
    dispatch(setFrequencyMax(frequencyRange.max));
  },[frequencyRange, dispatch]);

  /**
   * Returns the min and max frequency range depending on the microwave band
   */
  const minMaxFrequencyRange = () => {
    if (mwBand === 'S') {
      return { min: 2000, max: 4000 };
    }
    if (mwBand === 'C') {
      return { min: 4000, max: 8000 };
    }
    if (mwBand === 'X') {
      return { min: 8000, max: 12000 };
    }
    if (mwBand === 'Ku') {
      return { min: 12000, max: 18000 };
    }
    if (mwBand === 'K') {
      return { min: 18000, max: 26000.5 };
    }
    if (mwBand === 'Ka') {
      return { min: 26000.5, max: 40000 };
    }
  }

  return (
    <div id='experimental-setup'>
      <div id="form">
        <div className="exp-col">
          <div className="parameter">
            <Molecule/>
          </div>

          <div className="parameter">
            <MicrowaveBand/>
          </div>

          <div className="parameter">
            <FrequencyRange min={frequencyRange.min} max={frequencyRange.max}/>
          </div>

          <div className="parameter">
            <StepSizeOptions/>
          </div>

          <div className="parameter">
            <NumCyclesInput min={1} max={100}/>
          </div>

          <div className="parameter">
            <MicrowavePulseInput min={0} max={10}/>
          </div>
        </div>
      </div>

      {/* error message, spinner, and graphs */}
      <div id="graph-and-error" className="exp-col">
      {prefetch && <Spinner variant="indeterminate" size={200}/>}
        {error && devMode && (
          <div id="error">
            <p style={{ fontSize: 30 }}>{errorText}</p>
          </div>
        )}
        {!fetching && !error && devMode && <BackgroundPlotly/>}
        {!fetching && !error && devMode && <SamplePlotly/>}
      </div>
    </div>
  );
}

export default ExperimentalSetup;