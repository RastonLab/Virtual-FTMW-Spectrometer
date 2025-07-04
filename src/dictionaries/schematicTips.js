// svg imports
import mwSynthesizer from "../assets/svg/components/schematic/Microwave-synthesizer.svg";
import powerDivider from "../assets/svg/components/schematic/Midwest-Microwave.svg";
import rfsg from "../assets/svg/components/schematic/RF-signal-generator.svg";
import ssMixer from "../assets/svg/components/schematic/Single-sideband-mixer.svg";
import pAmplifier from "../assets/svg/components/schematic/Power-amplifier.svg";
import sAttenuator from "../assets/svg/components/schematic/General-Microwave-F9114.svg";
import circ from "../assets/svg/components/schematic/Circulator.svg";
import whAntenna from "../assets/svg/components/schematic/Wire-hook-antenna.svg";
import nozzle from "../assets/svg/components/schematic/Nozzle.svg";
import nDriver from "../assets/svg/components/schematic/nozzle-driver.svg";
import lnAmplifier from "../assets/svg/components/schematic/Low-noise-amplifier.svg";
import irMixer from "../assets/svg/components/schematic/Image-rejection-mixer.svg";
import rfAmplifier from "../assets/svg/components/schematic/RF-amplifier.svg";
import oscill from "../assets/svg/components/schematic/computer-ad-converters.svg";
import fReference from "../assets/svg/components/schematic/Standford-Research-Systems-10 MHz.svg";
import pGenerator from "../assets/svg/components/schematic/Pulse-Generators.svg";

/*const microwaveSynthesizer = {
    text: {

    },
};*/

/**
 * Objects with keys associated with the group IDs of the Schematic Window SVG
 */
export const schematicTips = {
    microwaveSynthesizer: {
        text: (
            <div className="popup-schem-tip">
                <h1>Microwave Synthesizer</h1>

                <img className="schem-tip-svg" src={mwSynthesizer} alt="Microwave Synthesizer SVG" />

                <p>
                    Generates a continuous-wave microwave signal from 2–40 GHz
                    with a stable output power of around 10 dBm.
                </p>
            </div>
        ),
    },

    powerDivider: {
        text: (
            <div className="popup-schem-tip">
                <h1>Power Divider</h1>

                <img className="schem-tip-svg" src={powerDivider} alt="Power Divider SVG" />

                <p>
                    Used to split the microwave signal into different paths while
                    maintaining signal integrity.
                </p>
            </div>
        ),
    },

    radioFrequencyReference: {
        text: (
            <div className="popup-schem-tip">
                <h1>RF Signal Generator</h1>

                <img className="schem-tip-svg" src={rfsg} alt="RF Signal Generator SVG" />

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
            <div className="popup-schem-tip">
                <h1>Single Sideband Mixer</h1>

                <img className="schem-tip-svg" src={ssMixer} alt="Single Sideband Mixer SVG" />

                <p>
                    This combines the variable microwave and fixed RF signals to
                    create a new frequency referred to as the tuning frequency.
                </p>
            </div>
        ),
    },

    powerAmplifier: {
        text: (
            <div className="popup-schem-tip">
                <h1>Power Amplifier</h1>

                <img className="schem-tip-svg" src={pAmplifier} alt="Power Amplifier SVG" />

                <p>
                    Used to boost the microwave signal before it reaches the
                    resonator, ensuring adequate power for polarization of molecular
                    transitions. Typical gain is around 10 dB.
                </p>
            </div>
        ),
    },

    switchAttenuator: {
        text: (
            <div className="popup-schem-tip">
                <h1>MW Switch</h1>

                <img className="schem-tip-svg" src={sAttenuator} alt="Switch Attenuator SVG" />

                <p>
                    Single-pole double-throw (SPDT) switch that controls when the
                    microwave signal is sent to the cavity.
                </p>
            </div>
        ),
    },

    circulator: {
        text: (
            <div className="popup-schem-tip">
                <h1>Circulator</h1>

                <img className="schem-tip-svg" src={circ} alt="Circulator SVG" />

                <p>
                    Directs microwave signals either toward the antenna for
                    transmission or to the receiving arm for detection.
                </p>
            </div>
        ),
    },

    wireHookAntenna: {
        text: (
            <div className="popup-schem-tip">
                <h1>Wire Hook Antenna</h1>

                <img className="schem-tip-svg" src={whAntenna} alt="Wire Hook Antenna SVG" />

                <p>
                    Tinned copper wire that couples microwave radiation into
                    and out of the Fabry-Perot cavity. Its length, following the
                    curvature of the fixed mirror, is approximately half a
                    wavelength (λ/2); at 3 GHz, the optimal half-wave dipole antenna
                    length is thus 5 cm.
                </p>
            </div>
        ),
    },

    solenoidValve: {
        text: (
            <div className="popup-schem-tip">
                <h1>Solenoid Valve (Nozzle)</h1>

                <img className="schem-tip-svg" src={nozzle} alt="Solenoid Valve (Nozzle) SVG" />

                <p>
                    Pulses molecular samples into the spectrometer that interact with the microwave field.
                </p>
            </div>
        ),
    },

    nozzleDriver: {
        text: (
            <div className="popup-schem-tip">
                <h1>Nozzle Driver</h1>

                <img className="schem-tip-svg" src={nDriver} alt="Nozzle Driver SVG" />

                <p>
                    Controls the operation of the solenoid valve.
                </p>
            </div>
        ),
    },

    mwSwitch: {
        text: (
            <div className="popup-schem-tip">
                <h1>MW Switch</h1>

                <img className="schem-tip-svg" src={sAttenuator} alt="Switch Attenuator SVG" />

                <p>
                    Single-pole double-throw (SPDT) switch that controls when the
                    microwave signal is sent to the oscilloscope.
                </p>
            </div>
        ),
    },

    lowNoiseAmplifier: {
        text: (
            <div className="popup-schem-tip">
                <h1>Low Noise Amplifier</h1>

                <img className="schem-tip-svg" src={lnAmplifier} alt="Low Noise Amplifier SVG" />

                <p>
                    Increases signal strength while minimizing unwanted noise,
                    thus improving the spectrometer’s sensitivity.
                </p>
            </div>
        ),
    },

    imageRejectionMixer: {
        text: (
            <div className="popup-schem-tip">
                <h1>Image Rejection Mixer</h1>

                <img className="schem-tip-svg" src={irMixer} alt="Image Rejection Mixer SVG" />

                <p>
                    This downconverts the received microwave signal to an
                    intermediate frequency while filtering out unwanted sidebands
                    and noise.  The intermediate frequency is sum of the reference
                    signal (30 MHz) and the difference frequency between the molecular
                    signal and the tuning frequency.
                </p>
            </div>
        ),
    },

    rfAmplifier: {
        text: (
            <div className="popup-schem-tip">
                <h1>RF Amplifier</h1>

                <img className="schem-tip-svg" src={rfAmplifier} alt="RF Amplifier SVG" />

                <p>
                    Amplifies the RF signal before digitization.
                </p>
            </div>
        ),
    },

    oscilloscope: {
        text: (
            <div className="popup-schem-tip">
                <h1>Oscilloscope</h1>

                <img className="schem-tip-svg" src={oscill} alt="Oscilloscope SVG" />

                <p>
                    Digitizes the detected free induction decay (FID) signal and
                    Fourier transforms it into the frequency domain. This Fourier
                    transformed spectrum is then recorded by a computer (see Instrument window).
                </p>
            </div>
        ),
    },

    frequencyReference: {
        text: (
            <div className="popup-schem-tip">
                <h1>Frequency Reference</h1>

                <img className="schem-tip-svg" src={fReference} alt="Frequency Reference SVG" />

                <p>
                    A high-precision 10 MHz reference source used to synchronize all
                    frequency components and maintain phase coherence during signal averaging.
                </p>
            </div>
        ),
    },

    pulseGenerator: {
        text: (
            <div className="popup-schem-tip">
                <h1>Pulse Generator</h1>

                <img className="schem-tip-svg" src={pGenerator} alt="Pulse Generator SVG" />

                <p>
                    Produces precisely timed pulses to synchronize microwave excitation,
                    sample introduction, and data acquisition, ensuring phase-coherent
                    signal accumulation across multiple cycles. A typical sequence begins
                    with a molecular pulse lasting 500 µs, followed by a 10 µs delay before
                    applying a 1 µs microwave pulse. A protective switch stays in a high-loss
                    state until the power in the Fabry-Pérot cavity dissipates (10 µs), after
                    which the oscilloscope is triggered to capture the time-domain signal
                    for Fourier transformation.

                </p>
            </div>
        ),
    },
};