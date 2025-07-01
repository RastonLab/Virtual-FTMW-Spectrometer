// svg imports
import mwSynthesizer from "../assets/svg/components/schematic/Microwave-synthesizer.svg";
import powerDivider from "../assets/svg/components/schematic/Midwest-Microwave.svg";
import rfsg from "../assets/svg/components/schematic/RF-signal-generator.svg";
import ssMixer from "../assets/svg/components/schematic/Single-sideband-mixer.svg";
import pAmplifier from "../assets/svg/components/schematic/Power-amplifier.svg";
import switchAttenuator from "../assets/svg/components/schematic/General-Microwave-F9114.svg";
import circulator from "../assets/svg/components/schematic/Circulator.svg";
import wireHookAntenna from "../assets/svg/components/schematic/Wire-hook-antenna.svg";
import nozzle from "../assets/svg/components/schematic/Nozzle.svg";
import nozzleDriver from "../assets/svg/components/schematic/nozzle-driver.svg";
import lowNoiseAmplifier from "../assets/svg/components/schematic/Low-noise-amplifier.svg";
import imageRejectionMixer from "../assets/svg/components/schematic/Image-rejection-mixer.svg";
import rfAmplifier from "../assets/svg/components/schematic/RF-amplifier.svg";
import oscilloscope from "../assets/svg/components/schematic/computer-ad-converters.svg";
import frequencyReference from "../assets/svg/components/schematic/Standford-Research-Systems-10 MHz.svg";
import pulseGenerator from "../assets/svg/components/schematic/Pulse-Generators.svg";

/*const microwaveSynthesizer = {
    text: {

    },
};*/

/**
 * Objects with keys associated with the group IDs of the Instrument Window SVG
 */
export const tooltips = {
    microwaveSynthesizer: {
        text: (
            <div className="popup-tooltip">
                <h1>Microwave Synthesizer</h1>

                <img className="tooltip-svg" src={mwSynthesizer} alt="Microwave Synthesizer SVG" />

                <p>
                    Generates a continuous-wave microwave signal from 2–40 GHz
                    with a stable output power of around 10 dBm.
                </p>
            </div>
        ),
    },

    powerDivider: {
        text: (
            <div className="popup-tooltip">
                <h1>Power Divider</h1>

                <img className="tooltip-svg" src={powerDivider} alt="Power Divider SVG" />

                <p>
                    Used to split the microwave signal into different paths while
                    maintaining signal integrity.
                </p>
            </div>
        ),
    },

    radioFrequencyReference: {
        text: (
            <div className="popup-tooltip">
                <h1>RF Signal Generator</h1>

                <img className="tooltip-svg" src={rfsg} alt="RF Signal Generator SVG" />

                <p>
                    RF signal generator: Generates a 30 MHz reference signal that
                    is mixed with the microwave signal to produce the tuning frequency
                    used in the excitation pulse.
                </p>
            </div>
        ),
    },

    singleSidebandMixer: {
        text: (
            <div className="popup-tooltip">
                <h1>Single Sideband Mixer</h1>

                <img className="tooltip-svg" src={ssMixer} alt="Single Sideband Mixer SVG" />

                <p>
                    This combines the variable microwave and fixed RF signals to
                    create a new frequency referred to as the tuning frequency.
                </p>
            </div>
        ),
    },

    powerAmplifier: {
        text: (
            <div className="popup-tooltip">
                <h1>Power Amplifier</h1>

                <img className="tooltip-svg" src={pAmplifier} alt="Power Amplifier SVG" />

                <p>
                    Used to boost the microwave signal before it reaches the
                    resonator, ensuring adequate power for polarization of molecular
                    transitions. Typical gain is around 10 dB.
                </p>
            </div>
        ),
    },
}