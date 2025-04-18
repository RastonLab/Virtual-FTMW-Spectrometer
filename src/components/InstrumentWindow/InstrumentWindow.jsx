import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SvgInstrumentWindowComponent from './InstrumentWindowComponent';
import '../../style/InstrumentWindow.css';
import { getMWBand } from '../../functions/getMWBand';
import { setCurrenFrequency, setsMWBand } from '../../redux/experimentalSetupSlice';
import { animateToBand, setSBandState, setSpectrumReady } from './animations/instrumentWindowAnimations';
import Spinner from '../Spinner';
import { Dialog } from '@mui/material';
import CloseButton from '../CloseButton';
import AcquireSpectrumPlotly from "../AcquireSpectrumPlotly/AcquireSpectrumPlotly";
import { useNavigate } from "react-router-dom";

/**
 * A component that contains the instrument window
 */
const InstrumentWindow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { molecule, frequencyMin, frequencyMax, stepSize, numCyclesPerStep, mwBand, currentFrequency, acquisitionType } = useSelector((store) => store.experimentalSetup);
  const { error, errorText } = useSelector((store) => store.error);
  const { fetching, prefetch, postfetch } = useSelector((store) => store.progress);
  const { data } = useSelector((store) => store.acquireSpectrum);

  const delay =  ((((frequencyMax - frequencyMin) / stepSize) + 1) * numCyclesPerStep * 1000) + 1200; // 1000 is to convert to milliseconds, 1200 for the extra 1.2 seconds delay on anaimation

  const [toggled, setToggled] = useState(false);

  /**
   * Sets the begining state of the instrument window
   */
  useEffect(() => {
    if (document.getElementById("instrument-window") !== null) {
      setSBandState();
    }
  }, []);

  useEffect(() => {
    if (data) {
      setSpectrumReady();
    }
  }, [data]);

  /**
   * Animates the instrument window
   */
  useEffect(() => {
    if (document.getElementById("instrument-window") !== null && postfetch && acquisitionType === "range") {
      animateToBand(mwBand, frequencyMin, frequencyMax, stepSize, numCyclesPerStep);
    }
  }, [postfetch, mwBand, frequencyMin, frequencyMax, stepSize, numCyclesPerStep, acquisitionType]);

  /**
   * Sets the frequency value depending on the frequency range
   */
  useEffect(() => {
    dispatch(setCurrenFrequency(frequencyMin));
  }, [frequencyMin, dispatch]);

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

  /**
   * Handler invoked when clicking a svg componenent to navigate to a different page
   */
  const handlePartClickNavigate = (url) => {
    navigate(url, -1);
  }

  return (
    <div id='instrument-window'>
      <SvgInstrumentWindowComponent
        id='instrument'
        molecule={molecule} 
        range={`${frequencyMin} - ${frequencyMax}`} 
        frequency={currentFrequency} 
        cyclePerStep={numCyclesPerStep} 
        mwBand={mwBand}
        pressure={'1.3 x 10⁻⁶ Torr'}
        onDisplayCLick={handlePartClick}
        onNavigateClick={handlePartClickNavigate} />

      <div id="instrument-spinner">
        <h1>Scan Progress</h1>
        {prefetch && <Spinner variant="indeterminate" size={100} />}
        {postfetch && (
          <>
            <h2>Processing Sample...</h2>
            <Spinner
              variant="determinate"
              size={100}
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