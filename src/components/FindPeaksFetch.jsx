import React, { useEffect } from "react";
import { cancelAnimation } from "./InstrumentWindow/animations/instrumentWindowAnimations";
import { useDispatch, useSelector } from "react-redux";
import { setProgress } from "../redux/progressSlice";
import { setError } from "../redux/errorSlice";
import { setPeaksData } from "../redux/peaksDataSlice";

export let sleepID = 0;

/**
 * A component that reaches out to the Find Peaks http server
 * 
 * @param {object} params - The parameters used to find_peaks.
 * @param {string} fetchURL - The URL used to reach out to the server.
 * @param {string} buttonText - The text on the button.
 * @param {string} buttonStyle - The class ID set on the button to determine style.
 */
export default function FindPeaksFetch({
  params,
  fetchURL,
  buttonText,
  buttonStyle}) {

  const dispatch = useDispatch();
  const { fetching } = useSelector((store) => store.progress);
  const { data } = useSelector((store) => store.acquireSpectrum);

  // cancel fetch
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#aborting_a_fetch
  const controller = new AbortController();
  const signal = controller.signal;

  // move mirror
  useEffect(() => {
    if (document.querySelector("#cancel-scan-button")) {
      document
        .querySelector("#cancel-scan-button")
        .addEventListener("click", () => {
          controller.abort();
          if (document.querySelector("instrument-window") !== null) {
            cancelAnimation();
          }
        });
    }
  });

  /**
   * Fetches the server with user entered parameters and sets the X and Y coordinates
   */
  const fetchServer = async () => {
    // remove any errors (if existing) and start a progress spinner
    dispatch(setError([false, null]));
    dispatch(setProgress([true, true, false]));
    
    let body = "";

    let startIndex = data.x.findIndex((element) => {return element >= params.lowerBound; });

    if (startIndex === -1) {
        startIndex = 0;
    }

    let endIndex = data.x.findIndex((element) => { return element >= params.upperBound;});

    if (endIndex === -1) {
        endIndex = data.x.length - 1;
    }

    body = JSON.stringify({
      x: data.x.slice(startIndex, endIndex + 1),
      y: data.y.slice(startIndex, endIndex + 1),
      threshold: params.threshold,
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
            dispatch(setProgress([false, false, false]));
            dispatch(setPeaksData(data));
          
        }
        else {
            dispatch(setProgress([false, false, false]));
            dispatch(setError([true, data.text]));
        }
      }
    } catch (error) {
       dispatch(setProgress([false, false, false]));
       switch (error.name) {
          case "AbortError":
            dispatch(setError([true, "Scan canceled"]));
            break;
          default:
            dispatch(setError([true, "We couldn't acquire your spectrum right now. Please try using a smaller frequency range and/or a larger step size."]));
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