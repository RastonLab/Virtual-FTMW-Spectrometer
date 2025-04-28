import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SvgInstrumentWindowComponent from './InstrumentWindowComponent';
import '../../style/InstrumentWindow.css';
import '../../style/InfoDialog.css';
import { getMWBand } from '../../functions/getMWBand';
import { setCurrentFrequency, setsMWBand } from '../../redux/experimentalSetupSlice';
import { animateToBand, setSBandState, setSpectrumReady } from './animations/instrumentWindowAnimations';
import Spinner from '../Spinner';
import { Dialog } from '@mui/material';
import CloseButton from '../CloseButton';
import AcquireSpectrumPlotly from "../AcquireSpectrumPlotly/AcquireSpectrumPlotly";
import InfoDialog from '../InfoDialog';
import { useNavigate } from "react-router-dom";
import clickableComponents from './config/clickableComponents';
import instrumentClickables from './config/instrumentClickables';
import InstrumentClickable from './InstrumentClickable';

/**
 * A component that contains the instrument window
 * 
 * Note on clickable elements:
 * This component uses SVG elements with event handlers to create interactive areas
 * for users to click and learn about different parts of the instrument.
 */
const InstrumentWindow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { molecule, frequencyMin, frequencyMax, stepSize, numCyclesPerStep, mwBand, currentFrequency, acquisitionType, currentCycle } = useSelector((store) => store.experimentalSetup);
  const { error, errorText } = useSelector((store) => store.error);
  const { fetching, prefetch, postfetch } = useSelector((store) => store.progress);
  const { data } = useSelector((store) => store.acquireSpectrum);

  const delay = ((((frequencyMax - frequencyMin) / stepSize) + 1) * numCyclesPerStep * 1000) + 1200; // 1000 is to convert to milliseconds, 1200 for the extra 1.2 seconds delay on animation

  const [toggled, setToggled] = useState(false);
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const [infoDialogContent, setInfoDialogContent] = useState({
    title: '',
    content: '',
    image: '',
    customComponent: null
  });

  /**
   * Sets the beginning state of the instrument window
   */
  useEffect(() => {
    if (document.getElementById("instrument-window") !== null) {
      setSBandState();
    }
    
    // Add instrument-page class to html and body for consistent positioning
    document.documentElement.classList.add('instrument-page');
    document.body.classList.add('instrument-page');
    
    // Clean up function
    return () => {
      document.documentElement.classList.remove('instrument-page');
      document.body.classList.remove('instrument-page');
    };
  }, []);

  useEffect(() => {
    if (data) {
      setSpectrumReady();
    }
  }, [data]);

  /**
   * Animates the instrument window
   */
  useEffect(() => {
    if (document.getElementById("instrument-window") !== null && postfetch && acquisitionType === "range") {
      animateToBand(mwBand, frequencyMin, frequencyMax, stepSize, numCyclesPerStep);
    }
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
   * Add click handlers to SVG elements
   */
  useEffect(() => {
    // Get the SVG document
    const svgElement = document.getElementById('instrument');
    if (!svgElement) return;

    // Function to handle component clicks
    const handleComponentClick = (component) => {
      if (component.navigateTo) {
        navigate(component.navigateTo);
      } else {
        setInfoDialogContent({
          title: component.title,
          content: component.description,
          image: component.image,
          customComponent: null
        });
        setInfoDialogOpen(true);
      }
    };

    // Store handlers for cleanup
    const clickHandlers = [];

    // Add click handlers to all clickable components
    clickableComponents.forEach(component => {
      // Skip computer display as it has its own handler
      if (component.id === 'readout') return;
      
      // Find the element in the SVG
      const element = svgElement.querySelector(`#${component.id}`);
      
      if (element) {
        // Set cursor style
        element.style.cursor = 'pointer';
        
        // Create and add click handler
        const clickHandler = () => handleComponentClick(component);
        element.addEventListener('click', clickHandler);
        
        // Store for cleanup
        clickHandlers.push({ element, handler: clickHandler });
      }
    });
    
    // Additional handling for group elements (cavity, mirrors, etc.)
    const groupElements = [
      { 
        id: 'cavity', 
        component: {
          title: 'Fabry-Pérot Cavity',
          description: 'The heart of the FTMW spectrometer where molecules interact with the microwave field.',
          image: '/assets/svg/components/schematic/Fixed-mirror.svg'
        }
      },
      { 
        id: 'mirrors', 
        component: {
          title: 'Cavity Mirrors',
          description: 'Concave aluminum mirrors that form the resonant cavity.',
          image: '/assets/svg/components/schematic/Fixed-mirror.svg'
        }
      },
      { 
        id: 'chamber-frame', 
        component: {
          title: 'Chamber Framework',
          description: 'The structural framework that supports the vacuum chamber.',
          image: '/assets/svg/components/schematic/Fixed-mirror.svg'
        }
      },
      { 
        id: 'main-chamber', 
        component: {
          title: 'Main Chamber',
          description: 'The vacuum chamber that houses the Fabry-Pérot cavity and maintains the high-vacuum environment necessary for spectroscopy.',
          image: '/assets/svg/components/schematic/Fixed-mirror.svg'
        }
      }
    ];

    // Add handlers for group elements
    groupElements.forEach(({ id, component }) => {
      const element = svgElement.querySelector(`#${id}`);
      if (element) {
        element.style.cursor = 'pointer';
        const clickHandler = () => handleComponentClick(component);
        element.addEventListener('click', clickHandler);
        clickHandlers.push({ element, handler: clickHandler });
      }
    });
    
    // Set the electric/lightning bolt element to not be clickable
    const electricElement = svgElement.querySelector('#electric');
    if (electricElement) {
      electricElement.style.cursor = 'default';
      electricElement.style.pointerEvents = 'none';
    }
    
    // Make pressure controller elements not clickable
    const pressureElements = [
      'pressure-controller-and-ion-gauge',
      'pressure-controller'
    ];
    
    pressureElements.forEach(id => {
      const element = svgElement.querySelector(`#${id}`);
      if (element) {
        element.style.cursor = 'default';
        element.style.pointerEvents = 'none';
      }
    });
    
    // Specifically ensure ion gauge is clickable
    const ionGaugeElement = svgElement.querySelector('#ion-gauge');
    if (ionGaugeElement) {
      ionGaugeElement.style.cursor = 'pointer';
      ionGaugeElement.style.pointerEvents = 'auto';
    }
    
    // Cleanup function
    return () => {
      clickHandlers.forEach(({ element, handler }) => {
        if (element) {
          element.removeEventListener('click', handler);
        }
      });
    };
  }, [navigate, setInfoDialogContent, setInfoDialogOpen]);

  /**
   * Handler invoked when clicking the PC display
   */
  const handlePartClick = () => {
    setToggled(true);
  };

  // Handler for closing the dialog
  const handleClick = () => {
    setToggled(false);
  };

  /**
   * Handler for component descriptions in info dialog
   * Used for components that need dynamic content or are triggered outside the SVG
   */
  const handleComponentInfoDialog = (componentId, title, content, image, customComponent = null) => {
    setInfoDialogContent({
      title,
      content,
      image,
      customComponent
    });
    setInfoDialogOpen(true);
  };

  // Handler for closing the info dialog
  const handleCloseInfoDialog = () => {
    setInfoDialogOpen(false);
  };

  return (
    <div id='instrument-window'>
      <div id="instrument">
        <SvgInstrumentWindowComponent
          molecule={molecule}
          range={`${frequencyMin} - ${frequencyMax}`}
          frequency={currentFrequency}
          cyclePerStep={`${currentCycle} / ${numCyclesPerStep}`}
          mwBand={mwBand}
          pressure={'1.3 x 10⁻⁶ Torr'}
          onDisplayCLick={handlePartClick}
          onComponentInfoClick={handleComponentInfoDialog}
        />
        
        {/* Fabry-Pérot cavity clickable */}
        <InstrumentClickable
          key="fabry-perot-cavity"
          id="fabry-perot-cavity"
          name="Fabry-Pérot Cavity"
          description="This is where molecules are polarized by the microwave field, leading to the coherent emission that is detected in FTMW spectroscopy. The Fabry-Pérot cavity is a high-Q resonator consisting of two concave mirrors (one fixed and one movable) that confines the microwave radiation, which enhances field strength and spectral resolution. The bandwidth, Γ, in FTMW spectroscopy is typically around 1 MHz at a resonance frequency, νres, of 10 GHz; this can be determined from the equation, Γ = νres/Q, where Q = 10,000."
          style={{
            top: '23.5%',
            left: '35%',
            width: '50%',
            height: '42%',
            zIndex: 5,
            opacity: 0,
            border: 'none',
            background: 'transparent',
            outline: 'none',
            boxShadow: 'none'
          }}
          className="invisible-clickable"
          svg="/assets/svg/components/instruments/graph.png"
          borderColor="transparent"
          onDialogClose={handleCloseInfoDialog}
          title={null}
        />
        
        {/* Pressure Controller clickable */}
        <InstrumentClickable
          key="pressure-controller-clickable"
          id="pressure-controller-clickable"
          name="Pressure Controller"
          description="Analog or digital device that is connected to the ion gauge for monitoring the vacuum level (10⁻³ - 10⁻¹¹ bar) inside the chamber."
          style={{
            top: '6.2%',
            left: '40.5%',
            width: '11%',
            height: '8.5%',
            zIndex: 5,
            opacity: 0,
            border: 'none',
            background: 'transparent',
            outline: 'none',
            boxShadow: 'none'
          }}
          className="invisible-clickable"
          svg="/assets/svg/components/instruments/pressure-controller.svg"
          borderColor="transparent"
          onDialogClose={handleCloseInfoDialog}
          title={null}
        />
        
        {/* Pressure Controller small clickable 1 */}
        <InstrumentClickable
          key="pressure-controller-small-1"
          id="pressure-controller-small-1"
          name="Pressure Controller"
          description="Analog or digital device that is connected to the ion gauge for monitoring the vacuum level (10⁻³ - 10⁻¹¹ bar) inside the chamber."
          style={{
            top: '14.6%',
            left: '41.7%',
            width: '1.9%',
            height: '1.9%',
            zIndex: 5,
            opacity: 0,
            border: 'none',
            background: 'transparent',
            outline: 'none',
            boxShadow: 'none'
          }}
          className="invisible-clickable"
          svg="/assets/svg/components/instruments/pressure-controller.svg"
          borderColor="transparent"
          onDialogClose={handleCloseInfoDialog}
          title={null}
        />
        
        {/* Pressure Controller small clickable 2 */}
        <InstrumentClickable
          key="pressure-controller-small-2"
          id="pressure-controller-small-2"
          name="Pressure Controller"
          description="Analog or digital device that is connected to the ion gauge for monitoring the vacuum level (10⁻³ - 10⁻¹¹ bar) inside the chamber."
          style={{
            top: '14.6%',
            left: '48.6%',
            width: '1.9%',
            height: '1.9%',
            zIndex: 5,
            opacity: 0,
            border: 'none',
            background: 'transparent',
            outline: 'none',
            boxShadow: 'none'
          }}
          className="invisible-clickable"
          svg="/assets/svg/components/instruments/pressure-controller.svg"
          borderColor="transparent"
          onDialogClose={handleCloseInfoDialog}
          title={null}
        />
      </div>

      <div id="instrument-spinner">
        <h1>Scan Progress</h1>
        {prefetch && <Spinner variant="indeterminate" size={100} />}
        {postfetch && (
          <>
            <h2>Processing Sample...</h2>
            <Spinner
              variant="determinate"
              size={100}
              delay={delay}
            />
          </>
        )}
        {!fetching && error && (
          <div id="instrument-error" style={{ display: "grid" }}>
            <p>{errorText}</p>
          </div>
        )}

        {/* MUI Dialog popup that opens for the spectrum */}
        <Dialog
          onClose={handleClick}
          open={toggled}
          fullScreen={true}
          className="spectrum-dialog"
        >
          <CloseButton id="customized-dialog-title" onClose={handleClick}>
            <div className="popup-tooltip popup-spectra">
              <h1>Spectra Display</h1>
              <AcquireSpectrumPlotly />
            </div>
          </CloseButton>
        </Dialog>

        {/* Info dialog for component descriptions */}
        <InfoDialog
          open={infoDialogOpen}
          onClose={handleCloseInfoDialog}
          title={infoDialogContent.title}
          content={infoDialogContent.content}
          image={infoDialogContent.image}
          customComponent={infoDialogContent.customComponent}
        />
      </div>
    </div>
  );
}

export default InstrumentWindow;