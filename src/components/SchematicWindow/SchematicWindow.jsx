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