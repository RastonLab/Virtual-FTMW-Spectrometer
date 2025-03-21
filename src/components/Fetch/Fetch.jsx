import React, { useEffect, useState } from "react";
import { moveMirror } from "../InstrumentWindow/animations/mirrorAnimation";
import { useDispatch, useSelector } from "react-redux";
import { setCancelFetch, setProgress } from "../../redux/progressSlice";
import { setError } from "../../redux/errorSlice";
import { setSpectrumData, setSpectrumParameters } from "../../redux/acquireSpectrumSlice";

/**
 * A component that reaches out to the Flask server with user entered parameters and received X and Y coordinates.
 *
 * @param {string} fetchURL - The URL used to reach out to the server.
 * @param {string} buttonText - The text on the button.
 * @param {string} buttonStyle - The class ID set on the button to determine style.
 */
export default function Fetch({
  fetchURL,
  buttonText,
  buttonStyle}) {

  const dispatch = useDispatch();
  const { fetching, postfetch, cancelFetch } = useSelector((store) => store.progress);
  const { devMode } = useSelector((store) => store.devMode);
  const { 
    molecule, 
    stepSize,
    frequencyMin,
    frequencyMax,
    numCyclesPerStep,
    microwavePulseWidth,
    mwBand,
    repetitionRate,
    molecularPulseWidth,
    acquisitionType,
    vres,
  } = useSelector((store) => store.experimentalSetup);

  // cancel fetch
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#aborting_a_fetch
  const [controller, setController] = useState(new AbortController());
  const signal = controller.signal;

  // waiting for entire page to render to fix issue where first cancel on load did not work
  useEffect(() => {
    if (document.querySelector("#cancel-scan-button")) {
      document
        .querySelector("#cancel-scan-button")
        .addEventListener("click", () => {
          controller.abort();
        });
    }

    if (document.getElementById("instrument-window") !== null && postfetch && !devMode) {
      moveMirror();
    }
  });

  // cancel fetch
  useEffect(() => {
    if (cancelFetch && document.querySelector("#cancel-scan-button")) {
      controller.abort();
      // Reset the controller for future fetches
      setController(new AbortController());
      dispatch(setCancelFetch(false));
    }
  }, [cancelFetch, controller, dispatch]);

  /**
   * Fetches the server with user entered parameters and sets the X and Y coordinates
   */
  const fetchServer = async () => {
    // remove any errors (if existing) and start a progress spinner
    dispatch(setError([false, null]));
    dispatch(setProgress([true, true, false]));
    
    let body = "";

    body = JSON.stringify({
      molecule: molecule,
      stepSize: stepSize,
      frequencyMin: frequencyMin,
      frequencyMax: frequencyMax,
      numCyclesPerStep: numCyclesPerStep,
      microwavePulseWidth: microwavePulseWidth,
      mwBand: mwBand,
      repetitionRate: repetitionRate,
      molecularPulseWidth: molecularPulseWidth,
      acquisitionType: acquisitionType,
      vres: vres,
    });

    try {
      const response = await fetch(fetchURL, {
        method: "POST",
        signal: signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await response.json();
      dispatch(setProgress([true, false, true]));
      if (response.ok) {
        if (data.success) {
          dispatch(setProgress(false, false, false));
          dispatch(setSpectrumData([data, frequencyMin, frequencyMax]));
          dispatch(
            setSpectrumParameters({
              molecule: molecule,
              stepSize: stepSize,
              frequencyMin: frequencyMin,
              frequencyMax: frequencyMax,
              numCyclesPerStep: numCyclesPerStep,
              microwavePulseWidth: microwavePulseWidth,
              mwBand: mwBand,
              repetitionRate: repetitionRate,
              molecularPulseWidth: molecularPulseWidth,
              acquisitionType: acquisitionType,
              vres: vres,
              spectrumTitle: acquisitionType === "range" ? "Frequency Range" : "Single Frequency",
            })
          );
        }
        else {
          dispatch(setError([true, data.text]));
        }
      }
    } catch (error) {
       dispatch(setProgress(false, false, false));
       switch (error.name) {
          case "AbortError":
            dispatch(setError([true, "Scan canceled"]));
            break;
          default:
            console.error(`Fetch error: ${error.message}`);
            dispatch(
              setError([
                true,
                "We could not collect your data at this time. Please wait a few moments and try again.",
              ])
            );
        }
      }
  };

  return (
    <button
      className={buttonStyle}
      disabled={fetching}
      onClick={fetchServer}
    >
      {buttonText}
    </button>
  );
}