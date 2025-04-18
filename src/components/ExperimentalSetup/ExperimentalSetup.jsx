import React, { useEffect } from 'react';
import Molecule from './inputs/MoleculeField.js';
import Spinner from '../Spinner';
import { useDispatch, useSelector } from 'react-redux';
import "../../style/routes/ExperimentalSetup.css";
import FrequencyRange from './inputs/FrequencyRange.js';
import MicrowaveBand from './inputs/MicrowaveBand.js';
import SliderComponent from '../SliderComponent.jsx';
import SwitchComponent from '../SwitchComponent.jsx';
import TextFieldComponent from '../TextFieldComponent.jsx';
import * as experimentalSetupReducer from '../../redux/experimentalSetupSlice.js';

/**
 * A component that contains all the experimental setup components
 */
/* eslint-disable react-hooks/exhaustive-deps */
const ExperimentalSetup = () => {
  const dispatch = useDispatch();
  const { prefetch } = useSelector((store) => store.progress);
  const { error, errorText } = useSelector((store) => store.error);
  const { mwBand, frequencyRange, microwavePulseWidth, numCyclesPerStep, stepSize, repetitionRate, molecularPulseWidth, acquisitionType, vres, frequencyMin, frequencyMax } = useSelector((store) => store.experimentalSetup);
  /**
   * Calls the helper method to get frequency range value depending on the mw band
   */
  useEffect(() => {
    const range = minMaxFrequencyRange();
    dispatch(experimentalSetupReducer.setFrequencyRange(range));
  }, [mwBand, dispatch]);

  /**
   * Sets the min and max frequency values depending on the frequency range
   */
  useEffect(() => {
    if (frequencyMin < frequencyRange.min || frequencyMax > frequencyRange.max) {
      dispatch(experimentalSetupReducer.setFrequencyMin(frequencyRange.min));
      dispatch(experimentalSetupReducer.setFrequencyMax(acquisitionType === 'range' ? frequencyRange.max : frequencyRange.min));
      dispatch(experimentalSetupReducer.setVres(frequencyRange.min));
      dispatch(experimentalSetupReducer.setCurrenFrequency(frequencyRange.min));
    }
  }, [frequencyRange, dispatch]);

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
            <SwitchComponent
              leftOptionData={"single"}
              rightOptionData={"range"}
              value={acquisitionType}
              setValueAction={experimentalSetupReducer.setAcquisitionType}
              fieldLabel="Acquisition Type:"
              leftOptionLabel={"Single Frequency"}
              rightOptionLabel={"Frequency Range"}
            />
          </div>

          <div className="parameter">
              <MicrowaveBand/>
          </div>

          {
            acquisitionType === 'range' ?
            <>
              <div className="parameter">
                <FrequencyRange min={frequencyRange.min} max={frequencyRange.max}/>
              </div>

              <div className="parameter">
                <SliderComponent
                  min={0.1}
                  max={10}
                  value={stepSize}
                  setValueAction={experimentalSetupReducer.setStepSize}
                  label="Step Size (MHz):"
                  disabled={false}
                  stepSize={0.1}
                />
              </div>
            </>
            :
            <div className="parameter">
              <TextFieldComponent
                min={frequencyRange.min}
                max={frequencyRange.max}
                step={0.1}
                store={vres}
                label="Frequency:"
                unit="MHz"
                reducer={experimentalSetupReducer.setVres}
              />
            </div>
          }

          <div className="parameter">
            <SliderComponent
              min={0}
              max={100}
              value={numCyclesPerStep}
              setValueAction={experimentalSetupReducer.setNumCyclesPerStep}
              label="Number of Cycles per Step:"
              disabled={false}
            />
          </div>

          <div className="parameter">
            <SliderComponent
              min={0}
              max={10}
              value={repetitionRate}
              setValueAction={experimentalSetupReducer.setRepetitionRate}
              label="Repetition Rate (Hz):"
              disabled={true}
            />
          </div>

          <div className="parameter">
            <SliderComponent
              min={0}
              max={1000}
              value={molecularPulseWidth}
              setValueAction={experimentalSetupReducer.setMolecularPulseWidth}
              label="Molecular Pulse Width (μs):"
              disabled={true}
            />
          </div>

          <div className="parameter">
            <SliderComponent
              min={0}
              max={10}
              value={microwavePulseWidth}
              setValueAction={experimentalSetupReducer.setMicrowavePulseWidth}
              label="Microwave Pulse Width (μs):"
              disabled={true}
            />
          </div>
        </div>
      </div>

      <div id="graph-and-error" className="exp-col">
        {prefetch ? (
          <Spinner variant="indeterminate" size={200} />
        ) : (
          error && (
            <div id="error">
              <p style={{ fontSize: 30 }}>{errorText}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ExperimentalSetup;