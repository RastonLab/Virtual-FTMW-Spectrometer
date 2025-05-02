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
        label: "Spectrum",
        component: (
          <Link to="/spectrum">
            <div>Spectrum</div>
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
    ],
  },
];
