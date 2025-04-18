import { useState } from "react";
import CloseButton from "./CloseButton.jsx";
import { Dialog } from "@mui/material";
import { useDispatch } from "react-redux";
import { setError } from "../redux/errorSlice";
import { setSpectrumData, setSpectrumParameters } from "../redux/acquireSpectrumSlice";
import {
  setMolecule,
  setStepSize,
  setFrequencyMin,
  setFrequencyMax,
  setNumCyclesPerStep,
  setMicrowavePulseWidth,
  setsMWBand,
  setRepetitionRate,
  setMolecularPulseWidth,
  setAcquisitionType,
  setVres,
} from "../redux/experimentalSetupSlice";
import "../style/components/Open.css";
import "../style/components/Button.css";

/**
 * A component that allows the user to upload a CSV file containing spectral data.
 */
export const UploadSpectra = () => {
  const dispatch = useDispatch();

  const fileReader = new FileReader();
  const [data, setData] = useState("");
  const [success, setSuccess] = useState(false);
  const [badFile, setBadFile] = useState(false);
  const [open, setOpen] = useState(false);

  // Opens the upload dialog.
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Resets the state when closing the dialog.
  const handleClose = () => {
    setData("");
    setSuccess(false);
    setBadFile(false);
    setOpen(false);
  };

  // Reads the selected file and loads its text.
  const changeHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      fileReader.onload = (e) => {
        setData(e.target.result);
      };
      fileReader.readAsText(file);
    }
    setSuccess(false);
    setBadFile(false);
  };

  // Parses the CSV data and updates the store accordingly.
  const handleSubmission = () => {
    if (!data) {
      setBadFile(true);
      return;
    }

    // Split file text into lines.
    const lines = data.split("\n");
    if (lines.length < 3) {
      setBadFile(true);
      return;
    }

    // reject any file whose first line isn’t exactly your Spectrum header
    const firstToken = lines[0].split("|")[0].trim().toLowerCase();
    if (firstToken !== "spectrum details") {
      setBadFile(true);
      return;
    }

    // Parse the parameter header
    // Expected format (all values are separated by "|"):
    // "Spectrum details | Min Frequency: 2000 | Max Frequency: 4000 | Molecule: C7H5N | Step Size: 1 | Cycles per Step: 1 | Microwave Pulse Width: 1 | MW Band: S | Repetition Rate: 1 | Molecular Pulse Width: 500 | Acquisition Type: single | Resolution: 2000"
    const paramLine = lines[0].trim();
    const tokens = paramLine.split("|").map((token) => token.trim());
    let csvFrequencyMin = null;
    let csvFrequencyMax = null;
    let spectrumParameters = {};

    tokens.forEach((token) => {
      if (token.indexOf(":") !== -1) {
        const [key, value] = token.split(":").map((str) => str.trim());
        switch (key) {
          case "Min Frequency":
            dispatch(setFrequencyMin(parseFloat(value)));
            csvFrequencyMin = parseFloat(value);
            spectrumParameters["frequencyMin"] = parseFloat(value);
            break;
          case "Max Frequency":
            dispatch(setFrequencyMax(parseFloat(value)));
            csvFrequencyMax = parseFloat(value);
            spectrumParameters["frequencyMax"] = parseFloat(value);
            break;
          case "Molecule":
            dispatch(setMolecule(value));
            spectrumParameters["molecule"] = value;
            break;
          case "Step Size":
            dispatch(setStepSize(parseFloat(value)));
            spectrumParameters["stepSize"] = parseFloat(value);
            break;
          case "Cycles per Step":
            dispatch(setNumCyclesPerStep(parseFloat(value)));
            spectrumParameters["numCyclesPerStep"] = parseFloat(value);
            break;
          case "Microwave Pulse Width":
            dispatch(setMicrowavePulseWidth(parseFloat(value)));
            spectrumParameters["microwavePulseWidth"] = parseFloat(value);
            break;
          case "MW Band":
            dispatch(setsMWBand(value));
            spectrumParameters["mwBand"] = value;
            break;
          case "Repetition Rate":
            dispatch(setRepetitionRate(parseFloat(value)));
            spectrumParameters["repetitionRate"] = parseFloat(value);
            break;
          case "Molecular Pulse Width":
            dispatch(setMolecularPulseWidth(parseFloat(value)));
            spectrumParameters["molecularPulseWidth"] = parseFloat(value);
            break;
          case "Acquisition Type":
            dispatch(setAcquisitionType(value));
            spectrumParameters["acquisitionType"] = value;
            spectrumParameters["spectrumTitle"] = value === "range" ? "Frequency Range" : "Single Frequency";
            break;
          case "Resolution":
            dispatch(setVres(parseFloat(value)));
            spectrumParameters["vres"] = parseFloat(value);
            break;
          default:
            break;
        }
      }
    });

    // Parse and load the spectral data
    // The second line is assumed to be a header ("Spectrum") and skipped.
    const xData = [];
    const yData = [];

    for (let i = 2; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue; // skip empty lines
      const [xStr, yStr] = line.split(",").map((str) => str.trim());
      const x = parseFloat(xStr);
      const y = parseFloat(yStr);
      if (!isNaN(x) && !isNaN(y)) {
        xData.push(x);
        yData.push(y);
      }
    }

    // Update the store with the spectral data.
    const spectralData = { x: xData, y: yData };
    dispatch(setSpectrumData([spectralData, csvFrequencyMin, csvFrequencyMax]));
    dispatch(setSpectrumParameters(spectrumParameters));

    // Clear any previous error and signal a successful upload.
    dispatch(setError({ status: false, message: null }));
    setSuccess(true);
  };

  return (
    <div id="open">
      <button className="popup-button dropdown-items" onClick={handleClickOpen}>
        Upload
      </button>
      <Dialog className="popup" onClose={handleClose} open={open}>
        <CloseButton id="customized-dialog-title" onClose={handleClose} />
        <h2>Please Select a Spectra File</h2>
        <div className="open-row">
          <label className="custom-file-upload button">
            Select a File
            <input type="file" name="file" onChange={changeHandler} />
          </label>
          {success && <h2>Upload Successful!</h2>}
          {badFile && <h2>Cannot Upload File</h2>}
          <button className="button" onClick={handleSubmission}>
            Upload
          </button>
        </div>
        <div className="open-row file">
          {/* Using pre-wrap style to display file contents with preserved formatting */}
          <p className="content" style={{ whiteSpace: "pre-wrap" }}>
            {data}
          </p>
        </div>
      </Dialog>
    </div>
  );
};
