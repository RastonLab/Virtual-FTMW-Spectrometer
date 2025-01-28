import React from 'react';
import Molecule from './MoleculeField.js';
import Spinner from '../Spinner';
import BackgroundPlotly from '../BackgroundPlotly';
import { SamplePlotly } from '../SamplePlotly';
import { useSelector } from 'react-redux';
import "../../style/routes/ExperimentalSetup.css";
import FrequencyRange from './FrequencyRange.js';
import StepSizeOptions from './StepSizeOptions';
import NumCyclesInput from './NumCyclesInput';
import MicrowavePulseInput from './MicrowavePulseInput';

/**
 * A component that contains all the experimental setup components
 */
const ExperimentalSetup = () => {
  const { fetching, prefetch } = useSelector((store) => store.progress);
  const { error, errorText } = useSelector((store) => store.error);
  const { devMode } = useSelector((store) => store.devMode);

  return (
    <div id='experimental-setup'>
      <div id="form">
        <div className="exp-col">
          <div className="parameter">
            <Molecule/>
          </div>

          <div className="parameter">
            <StepSizeOptions/>
          </div>

          <div className="parameter">
            <FrequencyRange min={2} max={40}/>
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