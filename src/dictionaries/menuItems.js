import CancelScan from "../components/CancelScan";
import AcquireSpectrumFetch from "../components/AcquireSpectrumFetch";
import LandingPage from "../components/LandingPage";
import Tutorial from "../components/Tutorial";
import { ACQUIRE_SPECTRUM } from "../dictionaries/constants";
import { Link } from "react-router-dom";
import SaveSpectra from "../components/SaveSpectra";
import { UploadSpectra } from "../components/UploadSpectra";

/**
 * Controls what appears in the MenuBar. To remove something, either remove the code or comment it out
 */
export const menuItems = [
  {
    label: "File",
    submenu: [
      {
        label: "Upload",
        component: <UploadSpectra />,
      },
      {
        label: "Save",
        component: <SaveSpectra />,
      },
    ],
  },
  {
    label: "Window",
    submenu: [
      {
        label: "Experimental Setup",
        component: (
          <Link to="/experimental-setup">
            <div>Experimental Setup</div>
          </Link>
        ),
      },
      {
        label: "Instrument",
        component: (
          <Link to="/instrument">
            <div>Instrument</div>
          </Link>
        ),
      },
      {
        label: "Schematic",
        component: (
          <Link to="/schematic">
            <div>Schematic</div>
          </Link>
        ),
      },
      {
        label: "Spectra",
        component: (
          <Link to="/spectra">
            <div>Spectra</div>
          </Link>
        ),
      },
      {
        label: "Find Peaks",
        component: (
          <Link to="/peaks">
            <div>Find Peaks</div>
          </Link>
        ),
      },
    ],
  },
  {
    label: "Measure",
    submenu: [
      {
        label: "Acquire Spectrum",
        component: (
          <AcquireSpectrumFetch
            type="acquire-spectrum"
            fetchURL={ACQUIRE_SPECTRUM}
            buttonText={"Acquire Spectrum"}
          />
        ),
      },
      {
        label: "Cancel Acquisition",
        component: <CancelScan buttonText="Cancel Acquisition" errorText="Scan Cancelled" />,
      },
    ],
  },
  {
    label: "Help",
    submenu: [
      {
        label: "Tutorial",
        component: <Tutorial />,
      },
      {
        label: "Landing Page",
        component: <LandingPage isMenu={true} />,
      },
      // {
      //   label: "Usage",
      //   button: true,
      //   title: "Components of the FITR-SIS",
      //   text: "",
      // },
      // {
      //   label: "About",
      //   button: true,
      //   title: "About The Raston Lab: FTIR-SIS",
      //   text: (
      //     <p>
      //       This Virtual Instrument is one of four in development by Raston Lab.
      //       The goal of these Virtual Instruments is to provide students who do
      //       not have access to these tools with experience they will need after
      //       graduation. The FTIR-SIS allows students to generate spectra similar
      //       to those you would get from the physical instrument. This is achived
      //       through mathmatical computations combined with data pulled from
      //       RADIS, a spectrum generation tool that uses data from the latest
      //       HITRAN database.
      //     </p>
      //   ),
      // },
    ],
  },
];
