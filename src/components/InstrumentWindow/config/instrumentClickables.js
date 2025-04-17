/**
 * Configuration for all clickable instrument components
 * - id: Unique identifier for the component
 * - name: Display name for the component
 * - description: Description text shown in the dialog
 * - position: Position object with top, left, width, height
 * - borderColor: Border color for the clickable area
 * - svg: Path to the SVG image shown in the dialog
 * - shape: Shape of the clickable ('rectangle', 'oval', or 'triangle')
 * - orientation: For triangles - which corner to point to
 */
const instrumentClickables = [
  {
    id: 'fixed-mirror',
    name: 'Fixed mirror',
    description: 'Stationary concave aluminum mirror forming one end of the Fabry-Pérot cavity. It reflects microwaves back into the cavity which enhances the interaction between the molecular sample and the microwave field. The wire hook antenna is positioned at its center.',
    position: {
      top: 200,
      left: 1020,
      width: 35,
      height: 70
    },
    borderColor: 'red',
    svg: '/assets/svg/components/schematic/Fixed-mirror.svg',
    shape: 'triangle',
    orientation: 'top-right'
  },
  {
    id: 'fixed-mirror-left',
    name: 'Fixed mirror',
    description: 'Stationary concave aluminum mirror forming one end of the Fabry-Pérot cavity. It reflects microwaves back into the cavity which enhances the interaction between the molecular sample and the microwave field. The wire hook antenna is positioned at its center.',
    position: {
      top: 480,
      left: 1020,
      width: 35,
      height: 70
    },
    borderColor: 'red',
    svg: '/assets/svg/components/schematic/Fixed-mirror.svg',
    shape: 'triangle',
    orientation: 'bottom-right'
  },
  {
    id: 'movable-mirror',
    name: 'Fixed mirror',
    description: 'Stationary concave aluminum mirror forming one end of the Fabry-Pérot cavity. It reflects microwaves back into the cavity which enhances the interaction between the molecular sample and the microwave field. The wire hook antenna is positioned at its center.',
    position: {
      top: 197,
      left: 1050,
      width: 40,
      height: 355
    },
    borderColor: 'red',
    svg: '/assets/svg/components/schematic/Fixed-mirror.svg'
  },
  {
    id: 'movable-mirror-tri-1',
    name: 'Movable mirror',
    description: 'Concave aluminium mirror whose position can be adjusted to fine-tune the cavity length, ensuring that it remains resonant with the microwave frequency. A stepper motor controls its alignment, and the nozzle is mounted onto this mirror. Note that this collinear arrangement of the molecular beam and microwave radiation leads to a Doppler splitting of lines.',
    position: {
      top: 200,
      left: 130,
      width: 35,
      height: 70
    },
    borderColor: 'blue',
    svg: '/assets/svg/components/schematic/Movable-mirror.svg',
    shape: 'triangle',
    orientation: 'top-left'
  },
  {
    id: 'movable-mirror-tri-2',
    name: 'Movable mirror',
    description: 'Concave aluminium mirror whose position can be adjusted to fine-tune the cavity length, ensuring that it remains resonant with the microwave frequency. A stepper motor controls its alignment, and the nozzle is mounted onto this mirror. Note that this collinear arrangement of the molecular beam and microwave radiation leads to a Doppler splitting of lines.',
    position: {
      top: 330,
      left: 130,
      width: 35,
      height: 70
    },
    borderColor: 'blue',
    svg: '/assets/svg/components/schematic/Movable-mirror.svg',
    shape: 'triangle',
    orientation: 'bottom-left'
  },
  {
    id: 'movable-mirror-tri-3',
    name: 'Movable mirror',
    description: 'Concave aluminium mirror whose position can be adjusted to fine-tune the cavity length, ensuring that it remains resonant with the microwave frequency. A stepper motor controls its alignment, and the nozzle is mounted onto this mirror. Note that this collinear arrangement of the molecular beam and microwave radiation leads to a Doppler splitting of lines.',
    position: {
      top: 480,
      left: 130,
      width: 35,
      height: 70
    },
    borderColor: 'blue',
    svg: '/assets/svg/components/schematic/Movable-mirror.svg',
    shape: 'triangle',
    orientation: 'bottom-left'
  },
  {
    id: 'diffusion-pump',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: 710,
      left: 630,
      width: 108,
      height: 180
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-oval',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: 620,
      left: 608,
      width: 151,
      height: 165
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg',
    shape: 'oval'
  },
  {
    id: 'diffusion-pump-long',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: 610,
      left: 615,
      width: 134,
      height: 17    
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-square',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: 704,
      left: 700,
      width: 80,
      height: 73
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-rect1',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: 811,
      left: 700,
      width: 123,
      height: 35
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-rect2',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: 740,
      left: 812,
      width: 30,
      height: 90
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-tube',
    name: 'Diffusion pump flexible tube',
    description: 'Flexible connection tube that connects the diffusion pump to the main vacuum chamber. This allows for the efficient removal of gas molecules from the chamber while providing some vibration isolation between the pump and the chamber.',
    position: {
      top: 560,
      left: 650,
      width: 120,
      height: 80
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg',
    customClass: 'tube-shape'
  },
  {
    id: 'diffusion-pump-extra-long',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: 776,
      left: 758,
      width: 13,
      height: 38
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-triangle',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: 858,
      left: 718,
      width: 35,
      height: 32
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg',
    shape: 'triangle',
    orientation: 'bottom-right'
  },
  {
    id: 'lecture-bottle',
    name: 'Lecture bottle',
    description: 'Gas cylinder containing a prepared mixture of a target molecule (often around 1% concentration) diluted in an inert carrier gas like helium. The gas is pulsed into the spectrometer through a nozzle to create a cold supersonic expansion.',
    position: {
      top: 250,
      left: 65,
      width: 100,
      height: 100
    },
    borderColor: 'purple',
    svg: '/assets/svg/components/schematic/lecture-bottle.svg'
  }
];

export default instrumentClickables; 