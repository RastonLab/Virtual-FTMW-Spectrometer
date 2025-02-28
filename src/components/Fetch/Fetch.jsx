import React, { useEffect } from "react";
import { moveMirror } from "../InstrumentWindow/animations/mirrorAnimation";
import { useDispatch, useSelector } from "react-redux";
import { setProgress } from "../../redux/progressSlice";

/**
 * A component that reaches out to the Flask server with user entered parameters and received X and Y coordinates.
 *
 * @param {object} params - The parameters used to find_peaks.
 * @param {string} type - The type of fetch request that is being performed.
 * @param {string} fetchURL - The URL used to reach out to the server.
 * @param {string} buttonText - The text on the button.
 * @param {string} buttonStyle - The class ID set on the button to determine style.
 */
export default function Fetch({
  params,
  type,
  fetchURL,
  buttonText,
  buttonStyle,
  tooManyPoints = false}) {

  const dispatch = useDispatch();
  const { fetching, postfetch } = useSelector((store) => store.progress);
  const { devMode } = useSelector((store) => store.devMode);

  // cancel fetch
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#aborting_a_fetch
  const controller = new AbortController();

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

  const fetchServer = async () => {
    dispatch(setProgress([true, false, true]));
  };

  return (
    <button
      className={buttonStyle}
      disabled={fetching || tooManyPoints}
      onClick={fetchServer}
    >
      {buttonText}
    </button>
  );
}