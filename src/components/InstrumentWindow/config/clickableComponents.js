/**
 * Configuration file for all clickable components in the instrument window
 * Each component has:
 * - id: the SVG element ID to attach the click handler to
 * - title: title for the info dialog
 * - description: description text for the info dialog
 * - image: path to the image to display (if any)
 * - navigateTo: optional route to navigate to when clicked (instead of showing info dialog)
 */

const clickableComponents = [
  {
    id: 'electric',
    title: 'Lightning Bolt',
    description: 'The electronics component that controls the electrical aspects of the FTMW spectrometer.',
    image: '/assets/svg/components/schematic/RF-amplifier.svg',
    navigateTo: '/schematic'
  },
  {
    id: 'lecture',
    title: 'Lecture bottle',
    description: 'Gas cylinder containing a prepared mixture of a target molecule (often around 1% concentration) diluted in an inert carrier gas like helium. The gas is pulsed into the spectrometer through a nozzle to create a cold supersonic expansion.',
    image: '/assets/svg/components/schematic/lecture-bottle.svg'
  },
  {
    id: 'movable-mirror',
    title: 'Movable Mirror',
    description: 'Concave aluminium mirror whose position can be adjusted to fine-tune the cavity length, ensuring that it remains resonant with the microwave frequency. A stepper motor controls its alignment, and the nozzle is mounted onto this mirror. Note that this collinear arrangement of the molecular beam and microwave radiation leads to a Doppler splitting of lines.',
    image: '/assets/svg/components/schematic/Movable-mirror.svg'
  },
  {
    id: 'diffusion-pump',
    title: 'Diffusion Pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    image: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'rotary-pump',
    title: 'Rotary Pump',
    description: 'Mechanical vacuum pump that provides the initial evacuation of the sample chamber. It is used in combination with the diffusion pump to reach low pressures for spectroscopic measurements. The exhaust gas flows into the fume hood exhaust system.',
    image: '/assets/svg/components/schematic/rotary-pump.svg'
  },
  {
    id: 'radiation',
    title: 'Microwave Source',
    description: 'The microwave excitation source that generates the microwave field for the spectroscopic measurement. The field interacts with the molecular sample to produce the spectroscopic signal.',
    image: '/assets/svg/components/schematic/Wire-hook-antenna.svg'
  },
  {
    id: 'inside-smooth-spacer',
    title: 'Smooth Spacer',
    description: 'Part of the cavity assembly that helps maintain the correct distance between components.',
    image: '/assets/svg/components/schematic/Fixed-mirror.svg'
  },
  {
    id: 'wire-and-bellows',
    title: 'Bellows',
    description: 'Flexible metal conduit that remains hermetically sealed while the movable mirror is translated.',
    image: '/assets/svg/components/schematic/Metal-Hose.svg'
  },
  {
    id: 'fixed-mirror',
    title: 'Fixed Mirror',
    description: 'Stationary concave aluminum mirror forming one end of the Fabry-Pérot cavity. It reflects microwaves back into the cavity which enhances the interaction between the molecular sample and the microwave field.',
    image: '/assets/svg/components/schematic/Fixed-mirror.svg'
  },
  {
    id: 'path4',
    title: 'Fixed Mirror',
    description: 'Stationary concave aluminum mirror forming one end of the Fabry-Pérot cavity. It reflects microwaves back into the cavity which enhances the interaction between the molecular sample and the microwave field. The wire hook antenna is positioned at its center.',
    image: '/assets/svg/components/schematic/Fixed-mirror.svg'
  },
  {
    id: 'pressure-controller-and-ion-gauge',
    title: 'Pressure Controller',
    description: 'Analog or digital device that is connected to the ion gauge for monitoring the vacuum level (10⁻³ - 10⁻¹¹ bar) inside the chamber.',
    image: '/assets/svg/components/schematic/ion-gauge.svg'
  },
  {
    id: 'ion-gauge',
    title: 'Ion Gauge',
    description: 'Vacuum gauge that measures very low pressures in the spectrometer chamber (down to 10⁻¹¹ bar). It works by ionizing residual gas molecules and detecting the resulting ion current.',
    image: '/assets/svg/components/schematic/ion-gauge.svg'
  },
  {
    id: 'pressure-controller',
    title: 'Pressure Controller',
    description: 'Digital display device that shows the current pressure readings from the ion gauge, allowing monitoring of the vacuum level (10⁻³ - 10⁻¹¹ bar) inside the chamber.',
    image: '/assets/svg/components/schematic/pressure-controller.svg'
  },
  {
    id: 'waveguide',
    title: 'Waveguide',
    description: 'Metal tube or channel that guides electromagnetic waves (microwaves) with minimal loss of energy. It connects the microwave source to the cavity.',
    image: '/assets/svg/components/schematic/waveguide.svg'
  },
  {
    id: 'pressure-value',
    title: 'Pressure Display',
    description: 'Analog or digital display showing the current pressure (in Torr) within the vacuum chamber. The pressure is a critical parameter for successful spectroscopy experiments.',
    image: '/assets/svg/components/instruments/pressure-controller.svg'
  },
  {
    id: 'tuning-rod-motor',
    title: 'Tuning Rod & Motor',
    description: 'Mechanical system used to adjust the cavity resonance frequency by fine-tuning the mirror separation.',
    image: '/assets/svg/components/instruments/tuning-rod-motor.svg'
  },
  {
    id: 'motor-and-rod',
    title: 'Tuning Rod & Motor',
    description: 'Mechanical system used to adjust the cavity resonance frequency by fine-tuning the mirror separation.',
    image: '/assets/svg/components/instruments/tuning-rod-motor.svg'
  },
  {
    id: 'smooth-rod',
    title: 'Support Rod',
    description: 'Stainless steel rod that supports and stabilizes the vertical position of the movable mirror.',
    image: '/assets/svg/components/schematic/Metal-Rod.svg'
  },
  {
    id: 'rod-with-smooth-spacer',
    title: 'Support Rod',
    description: 'Stainless steel rod that supports and stabilizes the vertical position of the movable mirror.',
    image: '/assets/svg/components/schematic/Metal-Rod.svg'
  },
  {
    id: 'rod-with-threaded-spacer',
    title: 'Tuning Rod & Motor',
    description: 'Mechanical system used to adjust the cavity resonance frequency by fine-tuning the mirror separation. The horizontal rod extends across the cavity and connects to the movable mirror.',
    image: '/assets/svg/components/instruments/tuning-rod-motor.svg'
  },
  {
    id: 'inside-threaded-spacer',
    title: 'Tuning Rod & Motor',
    description: 'Mechanical system used to adjust the cavity resonance frequency by fine-tuning the mirror separation. The horizontal rod extends across the cavity and connects to the movable mirror.',
    image: '/assets/svg/components/instruments/tuning-rod-motor.svg'
  },
  {
    id: 'attachment-and-threaded-spacer',
    title: 'Tuning Rod & Motor',
    description: 'Mechanical system used to adjust the cavity resonance frequency by fine-tuning the mirror separation. The horizontal rod extends across the cavity and connects to the movable mirror.',
    image: '/assets/svg/components/instruments/tuning-rod-motor.svg'
  },
  {
    id: 'threaded-spacer',
    title: 'Tuning Rod & Motor',
    description: 'Mechanical system used to adjust the cavity resonance frequency by fine-tuning the mirror separation. The horizontal rod extends across the cavity and connects to the movable mirror.',
    image: '/assets/svg/components/instruments/tuning-rod-motor.svg'
  },
  {
    id: 'chamber',
    title: 'Vacuum Chamber',
    description: 'The main chamber that houses the Fabry-Pérot cavity and maintains the high-vacuum environment necessary for spectroscopy.',
    image: '/assets/svg/components/schematic/vacuum-chamber.svg'
  },
  {
    id: 'spectrum-ready',
    title: 'Spectrum Ready',
    description: 'Indicator that shows when the spectrum acquisition is complete and ready for analysis.',
    image: ''
  },
  {
    id: 'attachment-and-smooth-spacer',
    title: 'Attachment and Smooth Spacer',
    description: 'Components that help maintain the structural integrity of the cavity.',
    image: '/assets/svg/components/schematic/Fixed-mirror.svg'
  },
  {
    id: 'gas-value',
    title: 'Gas Value',
    description: 'Displays the gas value readout from the instrument.',
    image: ''
  }
];

export default clickableComponents; 