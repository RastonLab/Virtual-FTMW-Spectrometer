import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SvgInstrumentWindowComponent from './InstrumentWindowComponent';
import '../../style/InstrumentWindow.css';
import { getMWBand } from '../../functions/getMWBand';
import { setsMWBand } from '../../redux/experimentalSetupSlice';
import { setSBandState } from './animations/instrumentWindowAnimations';
import Spinner from '../Spinner';
import { Dialog } from '@mui/material';
import CloseButton from '../CloseButton';
import AcquireSpectrumPlotly from "../AcquireSpectrumPlotly/AcquireSpectrumPlotly";

/**
 * A component that contains the instrument window
 */
const InstrumentWindow = () => {
  const dispatch = useDispatch();
  const { molecule, frequencyMin, frequencyMax, stepSize, numCyclesPerStep, mwBand, acquisitionType } = useSelector((store) => store.experimentalSetup);
  const { error, errorText } = useSelector((store) => store.error);
  const { fetching, prefetch, postfetch } = useSelector((store) => store.progress);

  const [toggled, setToggled] = useState(false);

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

  /**
   * Handler invoked when clicking the PC
   */
  const handlePartClick = () => {
    setToggled(true);
  };

  // Handler for closing the dialog
  const handleClick = () => {
    setToggled(false);
  };

  return (
    <div id='instrument-window'>
      <SvgInstrumentWindowComponent
        id='instrument'
        molecule={molecule} 
        range={`${frequencyMin} - ${frequencyMax}`} 
        frequency={stepSize} 
        cyclePerStep={numCyclesPerStep} 
        mwBand={mwBand}
        pressure={'1.3 x 10⁻⁶ Torr'}
        onDisplayCLick={handlePartClick} />

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

        {/* MUI Dialog popup that opens for the spectrum */}
        <Dialog
          onClose={handleClick}
          open={toggled}
          fullScreen={true}
        >
          <CloseButton id="customized-dialog-title" onClose={handleClick}>
            <div className="popup-tooltip popup-spectra">
              <h1>Spectra Display</h1>
              <AcquireSpectrumPlotly />
            </div>
          </CloseButton>
        </Dialog>
      </div>
    </div>
  );
}

export default InstrumentWindow;