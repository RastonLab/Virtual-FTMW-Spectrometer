// components

// graph import
import spectrum_graph from "../assets/svg/components/instruments/graph.png";

// svg imports
import fixMirror from "../assets/svg/components/schematic/Fixed-mirror.svg";
import movMirror from "../assets/svg/components/schematic/Movable-mirror.svg";
import diffPump from "../assets/svg/components/instruments/diffusion-pump.svg";
import rotPump from "../assets/svg/components/instruments/rotary-pump.svg";
import lecBottle from "../assets/svg/components/instruments/gas.svg";
import ionGauge from "../assets/svg/components/instruments/ion-gauge.svg";
import presController from "../assets/svg/components/instruments/pressure-controller.svg";
import tunRodMotor from "../assets/svg/components/instruments/tuning-rod-&-motor.svg";
import bellows from "../assets/svg/components/schematic/Metal-Hose.svg";
import suppRod from "../assets/svg/components/schematic/Metal-Rod.svg";
import mwSynthesizer from "../assets/svg/components/schematic/Microwave-synthesizer.svg";
import FabryPerotAnimation from "../components/SchematicWindow/FabryPerotAnimation";


export const instrumentTips = {
    fixedMirror: {
        text: (
            <div className="popup-instr-tip">
                <h1>Fixed Mirror</h1>

                <img className="instr-tip-svg" src={fixMirror} alt="Fixed Mirror SVG" />

                <p>
                    Stationary concave aluminum mirror forming one end of the Fabry-Pérot cavity.
                    It reflects microwaves back into the cavity which enhances the interaction between
                    the molecular sample and the microwave field. The wire hook antenna is positioned
                    at its center.
                </p>
            </div>
        ),
    },

    movableMirror: {
        text: (
            <div className="popup-instr-tip">
                <h1>Fixed Mirror</h1>

                <img className="instr-tip-svg" src={movMirror} alt="Movable Mirror SVG" />

                <p>
                    Concave aluminium mirror whose position can be adjusted to fine-tune the cavity length,
                    ensuring that it remains resonant with the microwave frequency. A stepper motor
                    controls its alignment, and the nozzle is mounted onto this mirror. Note that this
                    collinear arrangement of the molecular beam and microwave radiation leads to a Doppler
                    splitting of lines, given by ______ v<sup>split</sup> =
                </p>
            </div>
        ),
    },

    diffusionPump: {
        text: (
            <div className="popup-instr-tip">
                <h1>Diffusion Pump</h1>

                <img className="instr-tip-svg" src={diffPump} alt="Diffusion Pump SVG" />

                <p>
                    High-vacuum pump that removes gas phase molecules from the chamber. It operates
                    by directing a stream of hot oil vapor downward, which entrains gas molecules
                    and carries them toward the backing (rotary) pump.
                </p>
            </div>
        ),
    },

    rotaryPump: {
        text: (
            <div className="popup-instr-tip">
                <h1>Rotary Pump</h1>

                <img className="instr-tip-svg" src={rotPump} alt="Rotary Pump SVG" />

                <p>
                    Mechanical vacuum pump that provides the initial evacuation of the sample chamber.
                    It is used in combination with the diffusion pump to reach low pressures for
                    spectroscopic measurements. The exhaust gas flows into the fume hood exhaust system.
                </p>
            </div>
        ),
    },

    lecture: {
        text: (
            <div className="popup-instr-tip">
                <h1>Lecture Bottle</h1>

                <img className="instr-tip-svg" src={lecBottle} alt="Lecture Bottle SVG" />

                <p>
                    Gas cylinder containing a prepared mixture of a target molecule (often around 1%
                    concentration) diluted in an inert carrier gas like helium. The gas is pulsed into
                    the spectrometer through a nozzle to create a cold supersonic expansion.
                </p>
            </div>
        ),
    },

    ionGauge: {
        text: (
            <div className="popup-instr-tip">
                <h1>Ion Gauge</h1>

                <img className="instr-tip-svg" src={ionGauge} alt="Ion Gauge SVG" />

                <p>
                    Vacuum gauge that measures very low pressures in the spectrometer chamber
                    (down to 10<sup>11</sup> bar). It works by ionizing residual gas molecules and detecting
                    the resulting ion current.
                </p>
            </div>
        ),
    },

    pressureController: {
        text: (
            <div className="popup-instr-tip">
                <h1>Pressure Controller</h1>

                <img className="instr-tip-svg" src={presController} alt="Pressure Controller SVG" />

                <p>
                    Analog or digital device that is connected to the ion gauge for monitoring the
                    vacuum level (10<sup>3</sup> – 10<sup>11</sup> bar) inside the chamber.
                </p>
            </div>
        ),
    },

    tuningRodMotor: {
        text: (
            <div className="popup-instr-tip">
                <h1>Tuning Rod & Motor</h1>

                <img className="instr-tip-svg" src={tunRodMotor} alt="Tuning Rod & Motor SVG" />

                <p>
                    Mechanical system used to adjust the cavity resonance frequency by fine-tuning
                    the mirror separation.
                </p>
            </div>
        ),
    },

    bellows: {
        text: (
            <div className="popup-instr-tip">
                <h1>Bellows</h1>

                <img className="instr-tip-svg" src={bellows} alt="Bellows SVG" />

                <p>
                    Flexible metal conduit that remains hermetically sealed while the movable
                    mirror is translated.
                </p>
            </div>
        ),
    },

    fabryPerotCavity: {
        text: (
            <div className="popup-instr-tip">
                <h1>Fabry Pérot Cavity</h1>

                <FabryPerotAnimation />
            </div>
        ),
    },
};