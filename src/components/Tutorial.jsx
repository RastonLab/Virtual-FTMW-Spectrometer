import React, { useState } from "react";
import CloseButton from "./CloseButton.jsx";
import plotlyScreenshotTool from "../images/other/Plotly_Screenshot_Tool.png";
import { Dialog } from "@mui/material";
import "../style/components/Popup.css";

/**
 * A component that contains a MUI Dialog popup to display the FTMW-SIS tutorial
 */
export default function Tutorial() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="popup-button dropdown-items" onClick={handleClickOpen}>
        Tutorial
      </button>
      <Dialog className="popup" onClose={handleClose} open={open}>
        <CloseButton id="customized-dialog-title" onClose={handleClose} />

        <h2>Tutorial</h2>

        <p>
          This is a brief tutorial that shows how to acquire spectra, find peaks,
          and export data using FTMW-SIS. In this tutorial we focus on
          benzonitrile (C<sub>6</sub>H<sub>5</sub>CN) in the X band.
        </p>
        <ol>
          <li>
            Navigate to the <b>Window</b> menu and choose{" "}
            <b>Experimental Setup</b>. Select appropriate parameters: in this
            example we chose C<sub>6</sub>H<sub>5</sub>CN, a frequency range
            acquisition type covering 8000 to 8500 MHz (within the X band), a
            step size of 1 MHz, and 1 cycle per step. Note that the repetition
            rate, molecular pulse width, and microwave pulse width are not yet
            adjustable (they will be in the next version), and are fixed to the
            commonly used values of 1 Hz, 500 μs, and 1 μs, respectively. Also
            note if a frequency range larger than 1000 MHz is chosen, the SIS
            can be sluggish due to the large amount of data that needs to be
            processed.
          </li>
          <li>
            Navigate to the <b>Measure</b> menu and select <b>Acquire Spectrum</b>.
            You will be taken to the <b>Instrument window</b> where you will see the
            movable mirror on the left move to the right as the spectrum is
            acquired. While the frequency is being scanned, please take the time
            to click or tap on various objects to learn about their
            functionality. Note that the lightning bolt icon will take you to
            the <b>Schematic window</b> which provides details of the microwave
            electronics and features an animation of how FTMW spectroscopy work.
          </li>
          <li>
            After the scan is complete, “SPECTRUM READY” will be displayed on
            the monitor; either click or tap on it or navigate to the{" "}
            <b>Window</b> menu and choose <b>Spectrum</b>. This will display
            the sum of the Fourier-transformed spectra that were acquired at
            each frequency step. This spectrum is graphed with Plotly, which
            allows you to zoom in by dragging a rectangle over the region of
            interest. You can download an image of this plot by selecting the
            camera icon in Plotly’s menu bar.
            <br />
            <img
              src={plotlyScreenshotTool}
              alt="an shows where the plotly screenshot tool is located"
            />
            <br />
            Feel free to zoom in and explore the substructure within each set of
            peaks, which should be more or less indistinguishable from peaks in
            a real spectrum of C<sub>6</sub>H<sub>5</sub>CN. If you would like
            to export the spectrum for loading into another program (for
            example PGOPHER or OPUS), then navigate to the <b>File</b> menu and
            choose <b>Save</b> and then <b>Spectrum Data</b>.
          </li>
          <li>
            A particularly useful feature of FTMW-SIS is the ability to generate
            a list of peaks and their intensities. Using these values you can
            perform analyses to determine molecular constants and the
            rotational temperature. To generate such a list, navigate to the{" "}
            <b>Window</b> menu and choose <b>Find Peaks</b>. Set the Lower
            Domain Bound to 8150 MHz, the Upper Domain Bound to 8400 MHz, and
            the Threshold to a positive number like 0.3 (this is the intensity
            value above which peaks will be identified). Click/tap on “Find Peaks”,
            after which a list of peak positions and their
            intensities will appear. If you have a very large number of peaks
            you might want to consider increasing the threshold. These values
            can be selected and copied to a spreadsheet for analysis, or you can
            save them to file by navigating to the <b>File</b> menu and
            choosing <b>Save</b> and then <b>Peaks Data</b>. If peaks are
            absent from the list, it is likely due to their low signal-to-noise
            ratio; this can be improved by increasing the Number of Cycles per
            Step. Alternatively you can manually determine the peak positions
            using the Plotly interface.
          </li>
          <li>
            Please keep in mind that each rotational transition appears as a
            doublet due to Doppler splitting; the center of each pair of peaks
            corresponds to the rest frequency of the transition. This splitting
            arises from the collinear arrangement of the molecular beam and
            microwave radiation (click or tap the movable mirror in the <b>Instrument window</b> to 
            learn more). The list of Doppler split peak
            centers should match the values listed in spectral catalogues (for
            example see Table S2 in https://doi.org/10.1021/acs.jchemed.0c00934).
            Feel free to acquire spectra in different bands so you have plenty
            of line positions to include in your fit, which can be done in
            PGOPHER or SPFIT, for example.
          </li>
        </ol>
        <p>
          That’s it for now. Please note that the spectra you have generated
          with FTMW-SIS will be almost indistinguishable from spectra collected
          with a real FTMW spectrometer. We hope you enjoy the program we have
          developed!
        </p>
      </Dialog>
    </div>
  );
}
