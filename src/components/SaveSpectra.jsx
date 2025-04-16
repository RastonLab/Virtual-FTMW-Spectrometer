import { useState } from "react";
import CloseButton from "./CloseButton.jsx";
import { Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import "../style/components/Button.css";
import "../style/components/Save.css";

/**
 * Saves the data as a CSV file.
 */
export default function SaveSpectra() {
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

  const { data } = useSelector((store) => store.acquireSpectrum);
  const { peaksData } = useSelector((store) => store.peaksData);

  const [open, setOpen] = useState(false);

  // Open and close dialog functions
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /**
   * Returns the CSV string for the spectrum X and Y coordinates.
   */
  const formatSpectrumData = () => {
    let csv = "Spectrum\n";
    if (data?.x && data?.y) {
      for (let i = 0; i < data.x.length; i++) {
        csv += `${data.x[i]}, ${data.y[i]}\n`;
      }
    }
    return csv;
  };

  /**
   * Returns the CSV string for the peaks data.
   */
  const formatPeaksData = () => {
    let csv = "Peaks Data\n";
    if (peaksData?.peaks) {
      Object.keys(peaksData.peaks).forEach((key) => {
        csv += `${key}, ${peaksData.peaks[key]}\n`;
      });
    }
    return csv;
  };

  /**
   * Downloads the spectral data CSV file, including parameter details and coordinate data.
   */
  const downloadSpectrumCsv = () => {
    let csv = `Spectrum details | Min Frequency: ${frequencyMin} | Max Frequency: ${frequencyMax} | Molecule: ${molecule} | Step Size: ${stepSize} | Cycles per Step: ${numCyclesPerStep} | Microwave Pulse Width: ${microwavePulseWidth} | MW Band: ${mwBand} | Repetition Rate: ${repetitionRate} | Molecular Pulse Width: ${molecularPulseWidth} | Acquisition Type: ${acquisitionType} | Resolution: ${vres}\n`;
    csv += formatSpectrumData();
    triggerDownload(csv, "spectral_data.csv");
  };

  /**
   * Downloads the peaks data CSV file.
   */
  const downloadPeaksCsv = () => {
    const csv = formatPeaksData();
    triggerDownload(csv, "peaks_data.csv");
  };

  /**
   * Helper function that triggers a file download with the provided CSV content.
   * @param {string} csvData - The CSV string to be saved.
   * @param {string} fileName - The name for the downloaded file.
   */
  const triggerDownload = (csvData, fileName) => {
    const element = document.createElement("a");
    const file = new Blob([csvData], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div>
      <button className="popup-button dropdown-items" onClick={handleClickOpen}>
        Save
      </button>
      <Dialog className="popup" onClose={handleClose} open={open}>
        <CloseButton id="customized-dialog-title" onClose={handleClose} />
        <h2>Save Data</h2>

        {(!data && !peaksData) && (
          <h3>There is currently no data to save</h3>
        )}

        <div className="save-col">
          {data && (
            <button className="button" onClick={downloadSpectrumCsv}>
              Spectral Data
            </button>
          )}
          {peaksData && (
            <button className="button" onClick={downloadPeaksCsv}>
              Peaks Data
            </button>
          )}
        </div>
      </Dialog>
    </div>
  );
}
