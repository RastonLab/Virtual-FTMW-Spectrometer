import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SvgInstrumentWindowComponent from './InstrumentWindowComponent';
//import InstrumentClickable from './InstrumentClickable';
import '../../style/InstrumentWindow.css';
import '../../style/InfoDialog.css';
import { getMWBand } from './functions/getMWBand';
import { setCurrentFrequency, setsMWBand } from '../../redux/experimentalSetupSlice';
import { animateToBand, setSBandState, setSpectrumReady} from './animations/instrumentWindowAnimations';
import Spinner from '../Spinner';
import { Dialog } from '@mui/material';
import CloseButton from '../CloseButton';
import AcquireSpectrumPlotly from "../AcquireSpectrumPlotly/AcquireSpectrumPlotly";
//import instrumentClickables from './config/instrumentClickables';
import { useNavigate } from "react-router-dom";

// import dictionary
import { instrumentTips } from "../../dictionaries/instrumentTips";
// constants
import { BAD_ID } from "../../dictionaries/constants";

/**
 * A component that contains the instrument window
 */
const InstrumentWindow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { molecule, frequencyMin, frequencyMax, stepSize, numCyclesPerStep, mwBand, currentFrequency, acquisitionType, currentCycle } = useSelector((store) => store.experimentalSetup);
  const { error, errorText } = useSelector((store) => store.error);
  const { msg, msgText } = useSelector((store) => store.message);
  const { fetching, prefetch, postfetch } = useSelector((store) => store.progress);
  const { data } = useSelector((store) => store.acquireSpectrum);

  const delay =  ((((frequencyMax - frequencyMin) / stepSize) + 1) * numCyclesPerStep * 1000) + 1200; // 1000 is to convert to milliseconds, 1200 for the extra 1.2 seconds delay on anaimation

  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState();
  const [displayToggle, setDisplayToggle] = useState(false);

  /**
   * Sets the beginning state of the instrument window
   */
  useEffect(() => {
    if (document.getElementById("instrument-window") !== null) {
      setSBandState();
    }

    // Add CSS to handle zoom properly
    /*const style = document.createElement('style');
    style.innerHTML = `
      @media (min-resolution: 1dppx) {
        .instrument-clickable-container {
          transform: scale(1);
        }
      }
      @media (min-resolution: 1.25dppx) {
        .instrument-clickable-container {
          transform: scale(0.8);
        }
      }
      @media (min-resolution: 1.5dppx) {
        .instrument-clickable-container {
          transform: scale(0.67);
        }
      }
      @media (min-resolution: 2dppx) {
        .instrument-clickable-container {
          transform: scale(0.5);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };*/
  }, []);

  useEffect(() => {
    if (data && !postfetch) {
      setSpectrumReady();
    }
  }, [data, postfetch]);

  /**
   * Animates the instrument window
   */
  useEffect(() => {
    if (document.getElementById("instrument-window") !== null && postfetch && acquisitionType === "range") {
      animateToBand(mwBand, currentFrequency, frequencyMax, stepSize, numCyclesPerStep, frequencyMin);
    }
  // eslint-disable-next-line
  }, [postfetch, mwBand, frequencyMin, frequencyMax, stepSize, numCyclesPerStep, acquisitionType]);

  /**
   * Sets the frequency value depending on the frequency range
   */
  useEffect(() => {
    dispatch(setCurrentFrequency(frequencyMin));
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
  const handlePartClick = (event) => {
    setDisplayToggle(!displayToggle);
  };

  /**
   * Handler invoked when clicking a svg componenent to navigate to a different page
   */
  const handlePartClickNavigate = (url) => {
    navigate(url, -1);
  }

  // handler for dialog popups of clickable instruments
  const handleInstrClick = (event) => {
    if (!BAD_ID.includes(event.target.parentElement.id)) {
      console.log("event = " + event);
      console.log("event id = " + event.target.parentElement.id);
      setElement(event.target.parentElement.id);
      console.log("the element = " + element);
      setToggled(!toggled);
    }
  }

  return (
    <div id='instrument-window'>
      <div className="instrument-container">
        <SvgInstrumentWindowComponent
          id='instrument'
          molecule={molecule}
          range={`${frequencyMin} - ${frequencyMax}`}
          frequency={currentFrequency}
          cyclePerStep={`${currentCycle} / ${numCyclesPerStep}`}
          mwBand={mwBand}
          pressure={'1.3 x 10⁻⁶ Torr'}
          onDisplayCLick={handlePartClick}
          onNavigateClick={handlePartClickNavigate}
          onClick={handleInstrClick}/>
        {/* Render all clickable components from configuration */}
      </div>

      <div id="instrument-spinner">
        <h1>Scan Progress</h1>
        {prefetch && <Spinner variant="indeterminate" size={100} />}
        {postfetch && (
          <>
            <h2>Acquiring Spectrum...</h2>
            <Spinner
              variant="determinate"
              size={100}
              delay={delay}
            />
            <p style={{
              textAlign: 'center',
              maxWidth: '75%',
              fontSize: 25 }}>Please take this time to explore the instrument
              by clicking/tapping on the various components</p>
          </>
        )}
        {!fetching && error && (
          <div id="instrument-error" style={{ display: "grid" }}>
            <p>{errorText}</p>
          </div>
        )}
        {msg && (
            <div id="message"
                 style={{
                   textAlign: 'center',
                   width: '600px',
                   maxWidth: '80%', }}>
              <p style={{ fontSize: 25 }} dangerouslySetInnerHTML={{ __html: msgText}} />
            </div>
        )}

        {/* MUI Dialog popup that opens for the spectrum */}
        {displayToggle && (<Dialog
          onClose={handlePartClick}
          open={displayToggle}
          fullScreen={true}
        >
          <CloseButton id="customized-dialog-title" onClose={handlePartClick}>
            <div className="popup-tooltip popup-spectra">
              <h1>Spectrum Display</h1>
              <AcquireSpectrumPlotly />
            </div>
          </CloseButton>
        </Dialog>)}

        {/* MUI Dialog popup that holds tooltip information */}
        {element && (
            <Dialog
                onClose={handleInstrClick}
                open={toggled}
                fullScreen={element === "display" ? true : false}
            >
              <CloseButton id="customized-dialog-title" onClose={handleInstrClick}>
                {instrumentTips[element].text}
              </CloseButton>
            </Dialog>
        )}
      </div>
    </div>
  );
}

export default InstrumentWindow;