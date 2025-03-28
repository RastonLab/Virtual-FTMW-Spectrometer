import React, { useState } from 'react';
import SchematicWindowComponent from './SchematicWindowComponent'; 
import SchematicDescription from './SchematicDescription';
import InfoDialog from '../InfoDialog';
import '../../style/InfoDialog.css';

/**
 * The schematic window component.
 */
const SchematicWindow = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState({
        title: '',
        content: '',
        image: ''
    });

    // Use the SVG files from the public directory
    const mwSynthesizerImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Microwave-synthesizer.svg";
    const powerDividerImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Midwest-Microwave.svg";
    const rfSignalGeneratorImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/RF-signal-generator.svg";
    const singleSidebandMixerImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Single-sideband-mixer.svg";
    const powerAmplifierImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Power-amplifier.svg";
    const switchAttenuatorImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/General-Microwave-F9114.svg";
    const circulatorImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Circulator.svg";
    const wireHookAntennaImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Wire-hook-antenna.svg";
    const nozzleImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Nozzle.svg";
    const nozzleDriverImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/nozzle-driver.svg";
    const lowNoiseAmplifierImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Low-noise-amplifier.svg";
    const imageRejectionMixerImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Image-rejection-mixer.svg";
    const rfAmplifierImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/RF-amplifier.svg";
    const oscilloscopeImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/computer-ad-converters.svg";
    const frequencyReferenceImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Standford-Research-Systems-10 MHz.svg";
    const pulseGeneratorImage = process.env.PUBLIC_URL + "/assets/svg/components/schematic/Pulse-Generators.svg";

    const handleComponentClick = (componentId) => {
        if (componentId === 'microwave-synthesizer') {
            setDialogContent({
                title: 'Microwave Synthesizer',
                content: 'Generates a continuous-wave microwave signal from 2–40 GHz with a stable output power of around 10 dBm.',
                image: mwSynthesizerImage
            });
            setDialogOpen(true);
            console.log("Microwave Synthesizer clicked, showing dialog with image:", mwSynthesizerImage);
        }
        else if (componentId === 'power-divider') {
            setDialogContent({
                title: 'Power Divider',
                content: 'Used to split the microwave signal into different paths while maintaining signal integrity.',
                image: powerDividerImage
            });
            setDialogOpen(true);
            console.log("Power Divider clicked, showing dialog with image:", powerDividerImage);
        }
        else if (componentId === 'radio-frequency-reference') {
            setDialogContent({
                title: 'Radio Frequency Reference',
                content: 'Typically a 10 MHz rubidium frequency standard, ensuring phase stability and synchronization across the spectrometer components.',
                image: rfSignalGeneratorImage
            });
            setDialogOpen(true);
            console.log("Radio Frequency Reference clicked, showing dialog with image:", rfSignalGeneratorImage);
        }
        else if (componentId === 'single-sideband-mixer') {
            setDialogContent({
                title: 'Single Sideband Mixer',
                content: 'This combines the variable microwave and fixed RF signals to create a new frequency referred to as the tuning frequency.',
                image: singleSidebandMixerImage
            });
            setDialogOpen(true);
            console.log("Single Sideband Mixer clicked, showing dialog with image:", singleSidebandMixerImage);
        }
        else if (componentId === 'power-amplifier') {
            setDialogContent({
                title: 'Power Amplifier',
                content: 'Used to boost the microwave signal before it reaches the resonator, ensuring adequate power for polarization of molecular transitions. Typical gain is around 10 dB.',
                image: powerAmplifierImage
            });
            setDialogOpen(true);
            console.log("Power Amplifier clicked, showing dialog with image:", powerAmplifierImage);
        }
        else if (componentId === 'switch-attenuator') {
            setDialogContent({
                title: 'MW Switch',
                content: 'Single-pole double-throw (SPDT) switch that controls when the microwave signal is sent to the cavity.',
                image: switchAttenuatorImage
            });
            setDialogOpen(true);
            console.log("MW Switch clicked, showing dialog with image:", switchAttenuatorImage);
        }
        else if (componentId === 'circulator') {
            setDialogContent({
                title: 'Circulator',
                content: 'Directs microwave signals either toward the antenna for transmission or to the receiving arm for detection.',
                image: circulatorImage
            });
            setDialogOpen(true);
            console.log("Circulator clicked, showing dialog with image:", circulatorImage);
        }
        else if (componentId === 'wire-hook-antenna') {
            setDialogContent({
                title: 'Wire Hook Antenna',
                content: 'Tinned copper wire that couples microwave radiation into and out of the Fabry-Perot cavity. Its length, following the curvature of the fixed mirror, is approximately half a wavelength (λ/2); at 3 GHz, the optimal half-wave dipole antenna length is thus 5 cm.',
                image: wireHookAntennaImage
            });
            setDialogOpen(true);
            console.log("Wire Hook Antenna clicked, showing dialog with image:", wireHookAntennaImage);
        }
        else if (componentId === 'solenoid-valve') {
            setDialogContent({
                title: 'Solenoid Valve (Nozzle)',
                content: 'Pulses molecular samples into the spectrometer that interact with the microwave field.',
                image: nozzleImage
            });
            setDialogOpen(true);
            console.log("Solenoid Valve clicked, showing dialog with image:", nozzleImage);
        }
        else if (componentId === 'nozzle-driver') {
            setDialogContent({
                title: 'Nozzle Driver',
                content: 'Controls the operation of the solenoid valve.',
                image: nozzleDriverImage
            });
            setDialogOpen(true);
            console.log("Nozzle Driver clicked, showing dialog with image:", nozzleDriverImage);
        }
        else if (componentId === 'mw-switch') {
            setDialogContent({
                title: 'MW Switch',
                content: 'Single-pole double-throw (SPDT) switch that controls when the microwave signal is sent to the oscilloscope.',
                image: switchAttenuatorImage
            });
            setDialogOpen(true);
            console.log("MW Switch clicked, showing dialog with image:", switchAttenuatorImage);
        }
        else if (componentId === 'low-noise-amplifier') {
            setDialogContent({
                title: 'Low-noise Amplifier',
                content: 'Increases signal strength while minimizing unwanted noise, thus improving the spectrometer\'s sensitivity.',
                image: lowNoiseAmplifierImage
            });
            setDialogOpen(true);
            console.log("Low-noise Amplifier clicked, showing dialog with image:", lowNoiseAmplifierImage);
        }
        else if (componentId === 'image-rejection-mixer') {
            setDialogContent({
                title: 'Image Rejection Mixer',
                content: 'This downconverts the received microwave signal to an intermediate frequency while filtering out unwanted sidebands and noise. The intermediate frequency is sum of the reference signal (30 MHz) and the difference frequency between the molecular signal and the tuning frequency.',
                image: imageRejectionMixerImage
            });
            setDialogOpen(true);
            console.log("Image Rejection Mixer clicked, showing dialog with image:", imageRejectionMixerImage);
        }
        else if (componentId === 'rf-amplifier') {
            setDialogContent({
                title: 'RF Amplifier',
                content: 'Amplifies the RF signal before digitization.',
                image: rfAmplifierImage
            });
            setDialogOpen(true);
            console.log("RF Amplifier clicked, showing dialog with image:", rfAmplifierImage);
        }
        else if (componentId === 'oscilloscope') {
            setDialogContent({
                title: 'Oscilloscope',
                content: 'Digitizes the detected free induction decay (FID) signal and Fourier transforms it to a frequency domain signal for analysis.',
                image: oscilloscopeImage
            });
            setDialogOpen(true);
            console.log("Oscilloscope clicked, showing dialog with image:", oscilloscopeImage);
        }
        else if (componentId === 'frequency-reference') {
            setDialogContent({
                title: 'Frequency Reference',
                content: 'A high-precision 10 MHz reference source used to synchronize all frequency components and maintain phase coherence during signal averaging.',
                image: frequencyReferenceImage
            });
            setDialogOpen(true);
            console.log("Frequency Reference clicked, showing dialog with image:", frequencyReferenceImage);
        }
        else if (componentId === 'pulse-generator') {
            setDialogContent({
                title: 'Pulse Generator',
                content: 'Produces precisely timed pulses to synchronize microwave excitation, sample introduction, and data acquisition, ensuring phase-coherent signal accumulation across multiple cycles. A typical sequence begins with a molecular pulse lasting 500 μs, followed by a 10 μs delay before applying a 1 μs microwave pulse. A protective switch stays in a high-loss state until the power in the Fabry-Pérot cavity dissipates (10 μs), after which the oscilloscope is triggered to capture the time-domain signal for Fourier transformation.',
                image: pulseGeneratorImage
            });
            setDialogOpen(true);
            console.log("Pulse Generator clicked, showing dialog with image:", pulseGeneratorImage);
        }
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div className="schematic-window">
            <SchematicWindowComponent onComponentClick={handleComponentClick} />
            <SchematicDescription />
            <InfoDialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                title={dialogContent.title}
                content={dialogContent.content}
                image={dialogContent.image}
            />
        </div>
    );
}

export default SchematicWindow;