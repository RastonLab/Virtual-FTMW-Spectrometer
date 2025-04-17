import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SvgInstrumentWindowComponent from './InstrumentWindowComponent';
import InstrumentClickable from './InstrumentClickable';
import '../../style/InstrumentWindow.css';
import { getMWBand } from '../../functions/getMWBand';
import { setCurrenFrequency, setsMWBand } from '../../redux/experimentalSetupSlice';
import { animateToBand, setSBandState, setSpectrumReady } from './animations/instrumentWindowAnimations';
import Spinner from '../Spinner';
import { Dialog } from '@mui/material';
import CloseButton from '../CloseButton';
import AcquireSpectrumPlotly from "../AcquireSpectrumPlotly/AcquireSpectrumPlotly";
import InfoDialog from '../InfoDialog';
import instrumentClickables from './config/instrumentClickables';

/**
 * A component that contains the instrument window
 */
const InstrumentWindow = () => {
  const dispatch = useDispatch();
  const { molecule, frequencyMin, frequencyMax, stepSize, numCyclesPerStep, mwBand, currentFrequency, acquisitionType } = useSelector((store) => store.experimentalSetup);
  const { error, errorText } = useSelector((store) => store.error);
  const { fetching, prefetch, postfetch } = useSelector((store) => store.progress);
  const { data } = useSelector((store) => store.acquireSpectrum);

  const delay =  ((((frequencyMax - frequencyMin) / stepSize) + 1) * numCyclesPerStep * 1000) + 1200; // 1000 is to convert to milliseconds, 1200 for the extra 1.2 seconds delay on anaimation

  const [toggled, setToggled] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: '',
    content: '',
    image: '',
    customComponent: null
  });

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

  // Generic handler for instrument clickables
  const handleInstrumentClick = (clickable) => {
    setDialogContent({
      title: clickable.name,
      content: clickable.description,
      image: process.env.PUBLIC_URL + clickable.svg,
      customComponent: null
    });
    setDialogOpen(true);
  };

  // Handler for closing the component dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

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
        onDisplayCLick={handlePartClick} />

      {/* Render all clickable components from configuration */}
      {instrumentClickables.map((clickable) => (
        <div 
          key={clickable.id}
          className="instrument-clickable-container" 
          style={{ 
            position: 'absolute',
            top: clickable.position.top + 'px', 
            left: clickable.position.left + 'px',
            width: clickable.position.width + 'px', 
            height: clickable.position.height + 'px',
            zIndex: 10
          }}
        >
          <InstrumentClickable 
            id={clickable.id}
            borderColor={clickable.borderColor}
            onClick={() => handleInstrumentClick(clickable)}
            shape={clickable.shape || 'rectangle'}
            orientation={clickable.orientation || 'top-right'}
          />
        </div>
      ))}

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

        {/* Info Dialog for instrument components */}
        <InfoDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          title={dialogContent.title}
          content={dialogContent.content}
          image={dialogContent.image}
          customComponent={dialogContent.customComponent}
        />
      </div>
    </div>
  );
}

export default InstrumentWindow;