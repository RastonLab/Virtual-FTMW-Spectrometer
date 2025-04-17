/**
 * Configuration for all clickable instrument components
 * - id: Unique identifier for the component
 * - name: Display name for the component
 * - description: Description text shown in the dialog
 * - position: Position object with top, left, width, height as percentages
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
      top: '22%',
      left: '69.9%',
      width: '2.3%',
      height: '9.3%'
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
      top: '52%',
      left: '69.9%',
      width: '2.3%',
      height: '9.3%'
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
      top: '22%',
      left: '72%', 
      width: '2.7%',
      height: '39.5%'
    },
    borderColor: 'red',
    svg: '/assets/svg/components/schematic/Fixed-mirror.svg'
  },
  {
    id: 'movable-mirror-tri-1',
    name: 'Movable mirror',
    description: 'Concave aluminium mirror whose position can be adjusted to fine-tune the cavity length, ensuring that it remains resonant with the microwave frequency. A stepper motor controls its alignment, and the nozzle is mounted onto this mirror. Note that this collinear arrangement of the molecular beam and microwave radiation leads to a Doppler splitting of lines.',
    position: {
      top: '22%',
      left: '26.5%',
      width: '2.5%',
      height: '11.9%'
    },
    borderColor: 'blue',
    svg: '/assets/svg/components/schematic/Movable-mirror.svg',
    shape: 'triangle',
    orientation: 'top-left'
  },
  {
    id: 'movable-mirror-long',
    name: 'Movable mirror',
    description: 'Concave aluminium mirror whose position can be adjusted to fine-tune the cavity length, ensuring that it remains resonant with the microwave frequency. A stepper motor controls its alignment, and the nozzle is mounted onto this mirror. Note that this collinear arrangement of the molecular beam and microwave radiation leads to a Doppler splitting of lines.',
    position: {
      top: '22%',
      left: '24.3%',
      width: '2.3%',
      height: '39.5%'
    },
    borderColor: 'blue',
    svg: '/assets/svg/components/schematic/Movable-mirror.svg'
  },
  {
    id: 'movable-mirror-tri-3',
    name: 'Movable mirror',
    description: 'Concave aluminium mirror whose position can be adjusted to fine-tune the cavity length, ensuring that it remains resonant with the microwave frequency. A stepper motor controls its alignment, and the nozzle is mounted onto this mirror. Note that this collinear arrangement of the molecular beam and microwave radiation leads to a Doppler splitting of lines.',
    position: {
      top: '49.5%',
      left: '26.5%',
      width: '2.8%',
      height: '11.9%'
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
      top: '77%',
      left: '42%',
      width: '7.5%',
      height: '22.5%'
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-oval',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: '69%',
      left: '40.6%',
      width: '10.6%',
      height: '18%'
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
      top: '68%',
      left: '41.2%',
      width: '9.3%',
      height: '2.1%'
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-square',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: '78.5%',
      left: '48.5%',
      width: '4.2%',
      height: '8.5%'
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-rect1',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: '90.5%',
      left: '47.6%',
      width: '8.2%',
      height: '4%'
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-rect2',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: '82.5%',
      left: '55%',
      width: '2.2%',
      height: '9.7%'
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-tube',
    name: 'Diffusion pump flexible tube',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: '60%',
      left: '80%',
      width: '8%',
      height: '10%'
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
      top: '86%',
      left: '51.2%',
      width: '0.9%',
      height: '4.8%'
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg'
  },
  {
    id: 'diffusion-pump-triangle',
    name: 'Diffusion pump',
    description: 'High-vacuum pump that removes gas phase molecules from the chamber. It operates by directing a stream of hot oil vapor downward, which entrains gas molecules and carries them toward the backing (rotary) pump.',
    position: {
      top: '95.5%',
      left: '48.8%',
      width: '2%',
      height: '4%'
    },
    borderColor: 'green',
    svg: '/assets/svg/components/schematic/diffusion-pump.svg',
    shape: 'triangle',
    orientation: 'bottom-right'
  },
  {
    id: 'rotary-pump',
    name: 'Rotary pump',
    description: 'Mechanical vacuum pump that provides the initial evacuation of the sample chamber. It is used in combination with the diffusion pump to reach low pressures for spectroscopic measurements. The exhaust gas flows into the fume hood exhaust system.',
    position: {
      top: '88%',
      left: '67.5%',
      width: '8%',
      height: '10%'
    },
    borderColor: 'purple',
    svg: '/assets/svg/components/schematic/rotary-pump.svg'
  },
  {
    id: 'rotary-pump-long',
    name: 'Rotary pump',
    description: 'Mechanical vacuum pump that provides the initial evacuation of the sample chamber. It is used in combination with the diffusion pump to reach low pressures for spectroscopic measurements. The exhaust gas flows into the fume hood exhaust system.',
    position: {
      top: '98.5%',
      left: '67.3%',
      width: '9%',
      height: '1%'
    },
    borderColor: 'purple',
    svg: '/assets/svg/components/schematic/rotary-pump.svg'
  },
  {
    id: 'rotary-pump-small-long',
    name: 'Rotary pump',
    description: 'Mechanical vacuum pump that provides the initial evacuation of the sample chamber. It is used in combination with the diffusion pump to reach low pressures for spectroscopic measurements. The exhaust gas flows into the fume hood exhaust system.',
    position: {
      top: '90.5%',
      left: '72%',
      width: '5%',
      height: '7%'
    },
    borderColor: 'purple',
    svg: '/assets/svg/components/schematic/rotary-pump.svg'
  },
  {
    id: 'rotary-pump-small-rect',
    name: 'Rotary pump',
    description: 'Mechanical vacuum pump that provides the initial evacuation of the sample chamber. It is used in combination with the diffusion pump to reach low pressures for spectroscopic measurements. The exhaust gas flows into the fume hood exhaust system.',
    position: {
      top: '91%',
      left: '77%',
      width: '3.9%',
      height: '5.4%'
    },
    borderColor: 'purple',
    svg: '/assets/svg/components/schematic/rotary-pump.svg'
  },
  {
    id: 'rotary-pump-thin-rect',
    name: 'Rotary pump',
    description: 'Mechanical vacuum pump that provides the initial evacuation of the sample chamber. It is used in combination with the diffusion pump to reach low pressures for spectroscopic measurements. The exhaust gas flows into the fume hood exhaust system.',
    position: {
      top: '87.5%',
      left: '72.5%',
      width: '2%',
      height: '0.8%'
    },
    borderColor: 'purple',
    svg: '/assets/svg/components/schematic/rotary-pump.svg'
  },
  {
    id: 'rotary-pump-thin-rect-2',
    name: 'Rotary pump',
    description: 'Mechanical vacuum pump that provides the initial evacuation of the sample chamber. It is used in combination with the diffusion pump to reach low pressures for spectroscopic measurements. The exhaust gas flows into the fume hood exhaust system.',
    position: {
      top: '88.2%',
      left: '75%',
      width: '1%',
      height: '1.9%'
    },
    borderColor: 'purple',
    svg: '/assets/svg/components/schematic/rotary-pump.svg'
  },
  {
    id: 'lecture-bottle',
    name: 'Lecture bottle',
    description: 'Gas cylinder containing a prepared mixture of a target molecule (often around 1% concentration) diluted in an inert carrier gas like helium. The gas is pulsed into the spectrometer through a nozzle to create a cold supersonic expansion.',
    position: {
      top: '23%',
      left: '1.1%',
      width: '4.7%',
      height: '14.5%'
    },
    borderColor: 'purple',
    svg: '/assets/svg/components/schematic/lecture-bottle.svg'
  },
  {
    id: 'lecture-bottle-oval',
    name: 'Lecture bottle',
    description: 'Gas cylinder containing a prepared mixture of a target molecule (often around 1% concentration) diluted in an inert carrier gas like helium. The gas is pulsed into the spectrometer through a nozzle to create a cold supersonic expansion.',
    position: {
      top: '20%',
      left: '1.1%',
      width: '4.7%',
      height: '5%'
    },
    borderColor: 'purple',
    svg: '/assets/svg/components/schematic/lecture-bottle.svg',
    shape: 'oval'
  },
  {
    id: 'lecture-bottle-long-rect',
    name: 'Lecture bottle',
    description: 'Gas cylinder containing a prepared mixture of a target molecule (often around 1% concentration) diluted in an inert carrier gas like helium. The gas is pulsed into the spectrometer through a nozzle to create a cold supersonic expansion.',
    position: {
      top: '16%',
      left: '2.7%',
      width: '1.3%',
      height: '20%'
    },
    borderColor: 'purple',
    svg: '/assets/svg/components/schematic/lecture-bottle.svg'
  },
  {
    id: 'ion-gauge',
    name: 'Ion gauge',
    description: 'Vacuum gauge that measures very low pressures in the spectrometer chamber (down to 10⁻¹¹ bar). It works by ionizing residual gas molecules and detecting the resulting ion current.',
    position: {
      top: '5%',
      left: '54%',
      width: '6.8%',
      height: '6%'
    },
    borderColor: 'orange',
    svg: '/assets/svg/components/schematic/ion-gauge.svg'
  },
  {
    id: 'ion-gauge-long',
    name: 'Ion gauge',
    description: 'Vacuum gauge that measures very low pressures in the spectrometer chamber (down to 10⁻¹¹ bar). It works by ionizing residual gas molecules and detecting the resulting ion current.',
    position: {
      top: '5%',
      left: '58.2%',
      width: '1.5%',
      height: '10.5%'
    },
    borderColor: 'orange',
    svg: '/assets/svg/components/schematic/ion-gauge.svg'
  }
];

export default instrumentClickables; 