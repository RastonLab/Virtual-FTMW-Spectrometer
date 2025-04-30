import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Slider, TextField } from "@mui/material";
import Spinner from "../Spinner";
import FindPeaksFetch from "../FindPeaksFetch";
import AcquireSpectrumPlotly from "../AcquireSpectrumPlotly/AcquireSpectrumPlotly";
import { FIND_PEAKS } from "../../dictionaries/constants";
import "../../style/routes/FindPeaks.css";
import PeakList from "./PeakList";

/**
 * A component to find the peaks of a spectrum components
 */
export default function FindPeaks() {
  const { peaksData } = useSelector((store) => store.peaksData);
  const { data, frequencyMin, frequencyMax } = useSelector((store) => store.acquireSpectrum);
  const { fetching } = useSelector((store) => store.progress);
  const { error, errorText } = useSelector((store) => store.error);

  // Compute frequency min and max directly from data.x if available.
  const computedFrequencyMin = data && data.x ? data.x[0] : 0;
  const computedFrequencyMax = data && data.x ? data.x[data.x.length - 1] : 0;

  // Component state
  // Use computed values if available, otherwise default to empty string.
  const [threshold, setThreshold] = useState(0.5);
  const [lowerBound, setLowerBound] = useState(
    data ? (frequencyMin ? frequencyMin : data.x[0]) : ""
  );
  const [upperBound, setUpperBound] = useState(
    data ? (frequencyMax ? frequencyMax : data.x[data.x.length - 1]) : ""
  );
  const [dataPoints, setDataPoints] = useState(0);
  const [emptyInput, setEmptyInput] = useState(true);

  // When data becomes available, initialize lower and upper bounds if not already set.
  useEffect(() => {
    if (data && data.x && frequencyMin && frequencyMax && (lowerBound === "" || upperBound === "")) {
      setLowerBound(frequencyMin || data.x[0]);
      setUpperBound(frequencyMax || data.x[data.x.length - 1]);
    }
  }, [data, lowerBound, frequencyMin, frequencyMax, upperBound]);

  // Update the number of data points in the selected range.
  useEffect(() => {
    if (data && data.x) {
      const xData = data.x;
      // Find first index with x >= lowerBound.
      let startIndex = xData.findIndex((element) => element >= lowerBound);
      startIndex = startIndex === -1 ? 0 : startIndex;

      // Find first index with x >= upperBound.
      let endIndex = xData.findIndex((element) => element >= upperBound);
      endIndex = endIndex === -1 ? xData.length - 1 : endIndex;

      const currentDataPoints = xData.slice(startIndex, endIndex + 1).length;
      setDataPoints(currentDataPoints);
      setEmptyInput(lowerBound === "" || upperBound === "");
    }
  }, [data, lowerBound, upperBound]);

  // Ensure the threshold value stays within [0.5]
  const validateThreshold = () => {
    if (threshold < 0.5 || threshold === '') {
      setThreshold(0.5);
    } 
  };

    // On change, set the threshold value and allow user to erase to blank
  const handleThresholdChange = (event) => {
      const value = event.target.value
      // let user erase to blank
      setThreshold(value === "" ? "" : Number(value))
  }

  // Ensure that the frequency bounds are within allowed limits and swap if needed.
  const validateBounds = () => {
    if (!(data && data.x)) return; // Safety check.

    let newLower = lowerBound || computedFrequencyMin;
    let newUpper = upperBound || computedFrequencyMax;

    if (newLower < computedFrequencyMin) newLower = computedFrequencyMin;
    if (newUpper > computedFrequencyMax) newUpper = computedFrequencyMax;
    if (newLower > newUpper) {
      [newLower, newUpper] = [newUpper, newLower];
    }
    setLowerBound(newLower);
    setUpperBound(newUpper);
  };

  /**
   * Handles the slider change event.
   */
  const handleSliderChange = (event, newValue) => {
    setLowerBound(newValue[0]);
    setUpperBound(newValue[1]);
  };

  // Render the lower/upper bounds inputs and slider.
  const renderBoundsInput = () => (
    <form id="find-peaks-bounds" name="bounds">
      {/* Lower Bound Input */}
      <Box
        className="find-peaks-box"
        sx={{ "& .MuiTextField-root": { m: 1, width: "20ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="peak-lowerbound"
          label="Lower Domain Bound"
          placeholder="Enter Lower Bound"
          type="number"
          value={lowerBound}
          onChange={(e) =>
            setLowerBound(
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
          onBlur={validateBounds}
          InputProps={{
            inputProps: { min: computedFrequencyMin, max: computedFrequencyMax },
          }}
        />
      </Box>

      {/* Slider for Bounds */}
      <Box className="find-peaks-box">
        <Slider
          sx={{ minWidth: "150px" }}
          value={[
            lowerBound || computedFrequencyMin,
            upperBound || computedFrequencyMax,
          ]}
          min={computedFrequencyMin}
          max={computedFrequencyMax}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
        />
      </Box>

      {/* Upper Bound Input */}
      <Box
        className="find-peaks-box"
        sx={{ "& .MuiTextField-root": { m: 1, width: "20ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="peak-upperbound"
          label="Upper Domain Bound"
          placeholder="Enter Upper Bound"
          type="number"
          value={upperBound}
          onChange={(e) =>
            setUpperBound(
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
          onBlur={validateBounds}
          InputProps={{
            inputProps: { min: computedFrequencyMin, max: computedFrequencyMax },
          }}
        />
      </Box>
    </form>
  );

  // Render the threshold input field.
  const renderThresholdInput = () => (
    <form 
      id="find-peaks-threshold" 
      name="threshold"
      onSubmit={e => {
        // stop the browser from submitting and reloading
        e.preventDefault()
      }}
      >
      <Box
        sx={{ "& .MuiTextField-root": { m: 1, width: "15ch" } }}
        noValidate
        autoComplete="off"
        className="absorb-row"
      >
        <TextField
          id="peak-threshold"
          label="Threshold"
          placeholder="Enter threshold"
          type="number"
          value={threshold}
          onChange={(e) => handleThresholdChange(e)}
          onBlur={validateThreshold}
        />
      </Box>
    </form>
  );

  // Render the data points summary and peak find button.
  const renderDataPointsSummary = () => (
    <div id="find-peaks-points">
      <p>
        Current Number of Data Points Selected: <b>{dataPoints}</b>
      </p>
      {emptyInput && (
        <p>
          <b>Please enter data into the empty input field(s)!</b>
        </p>
      )}
      <FindPeaksFetch
        params={{ threshold, lowerBound, upperBound }}
        fetchURL={FIND_PEAKS}
        buttonText="Find Peaks"
        buttonStyle="button"
      />
    </div>
  );

  // Render the peaks data or any error messages.
  const renderPeaksData = () => {
    if (peaksData && !error) {
      return (
        <div id="find-peaks-data-container">
          <h1>Spectrum Peaks</h1>
          <div id="find-peaks-results">
            <PeakList peaks={peaksData.peaks} />
          </div>
        </div>
      );
    } else if (error) {
      return (
        <div id="find-peaks-error">
          <p style={{ fontSize: 30 }}>{errorText}</p>
        </div>
      );
    }
    return null;
  };
  

  if (!data) {
    return (
      <div className="find-peaks-container-no-data" id="find-peaks-text">
        <h2>Please generate a Spectrum and return here</h2>
      </div>
    );
  }

  return (
    <div className="find-peaks-container">
      {fetching ? (
        <Spinner variant="indeterminate" size={200} />
      ) : (
        <>
          <div className="find-peaks-row-left">
            <AcquireSpectrumPlotly />
            <div>
              {renderBoundsInput()}
              {renderThresholdInput()}
              {renderDataPointsSummary()}
            </div>
          </div>
          <div className="find-peaks-row-right">{renderPeaksData()}</div>
        </>
      )}
    </div>
  );
}
