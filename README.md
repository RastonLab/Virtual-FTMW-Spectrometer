# Virtual-FTMW-Spectrometer

The Virtual FTMW Spectrometer (FTMW-SIS) is a web-based educational tool designed to simulate the operation of a Fourier Transform Microwave (FTMW) spectrometer. Developed for academic use, this simulator enables students to explore rotational spectroscopy principles, generate molecular spectra, and interact with a virtual FTMW instrument, providing hands-on learning without physical hardware.

This project uses [React](https://github.com/facebook/react) for the frontend and [Flask](https://github.com/pallets/flask/) for the backend. The backend is located in a separate [repository](https://github.com/RastonLab/Virtual-FTMW-Functions).

## Installation

Information on how to run the front-end can be found in the repository's [wiki page](../../wiki).

## Usage

The intended audience for this application is undergraduate chemistry students studying spectroscopy. The following screenshots are not exhaustive but acknowledge most of the main features:

- Experimental Setup (Shows the spectrometer’s physical setup, including the vacuum chamber, molecular beam source, and microwave source )

![92f8e6051a238581799aaa5401ed3d2](https://github.com/user-attachments/assets/d977d334-f508-45af-9965-a1cad6ec2320)

- Instrument Window (top-down view of simplified spectrometer)

![89359ed31104801a0a964bf63a59ac4](https://github.com/user-attachments/assets/ad4e1413-cc19-47a6-a296-640854873c43)

- Schematic Window (Displays a block diagram of the FTMW spectrometer with clickable components to learn their functions.)
  
![a9e31cbf3f1a5e8f9c79c907bdd8e85](https://github.com/user-attachments/assets/e4f36e7d-f878-4c9a-9a82-8c213d6fb477)
  
- Spectrum Window (plotted Spectrum)

![e360da974fe071992d28449ad85a1aa](https://github.com/user-attachments/assets/19376c36-2857-46d9-8e0c-b0235498905c)

- Find Peaks (Highlights spectral peaks in a table or plot, allowing analysis of rotational transitions)

![00ab5a06228b7083301decd80201d9d](https://github.com/user-attachments/assets/a9b4cfeb-487a-4b0c-abfe-5867c68a02b5)


## Additional Information

Additional information regarding the FTMW-SIS can be found in the repository's [wiki page](../../wiki). This information includes Redux Toolkit, SVG diagrams, SVG optimization, SVG interactivity, and SVG animation.

## Contributing

Upkeep of this project is intended for recruited undergraduate students, but pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

See [LICENSE](LICENSE)

**Relevant third-party tools and resources we depend on:**

- [GitHub Pages Deploy Action](https://github.com/JamesIves/github-pages-deploy-action): GitHub Action used to automate deployment of web applications to GitHub Pages (Licensed [MIT](https://github.com/JamesIves/github-pages-deploy-action/blob/dev/LICENSE))

- [MUI](https://mui.com/): React user interface component library (Licensed [MIT](https://github.com/mui/material-ui/blob/master/LICENSE))

- [Plotly.js](https://github.com/plotly/plotly.js): JavaScript data visualization library (Licensed [MIT](https://github.com/plotly/plotly.js/blob/master/LICENSE))

- [Radis](https://radis.github.io/): Spectra generation (Licensed [LGPL-3.0](https://github.com/radis/radis/blob/develop/LICENSE))

- [React](https://react.dev/): JavaScript library for building user interfaces (Licensed [MIT](https://github.com/facebook/react/blob/main/LICENSE))

- [React CSV](https://github.com/react-csv/react-csv): React components to build CSV files on the fly (Licensed [MIT](https://github.com/react-csv/react-csv/blob/master/LICENSE.txt))

- [React Router](https://github.com/remix-run/react-router): Declarative routing for React (Licensed [MIT](https://github.com/remix-run/react-router/blob/main/LICENSE.md))

- [React to Print](https://github.com/gregnb/react-to-print): React components for printing in the browser (Licensed [MIT](https://github.com/gregnb/react-to-print/blob/master/LICENSE))

- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit): Library for updating and managing application state (Licensed [MIT](https://github.com/reduxjs/redux-toolkit/blob/master/LICENSE))

- [SVGO](https://github.com/svg/svgo): Node.js tool for optimizing SVG files (Licensed [MIT](https://github.com/svg/svgo/blob/main/LICENSE))

- [SVGOMG](https://github.com/jakearchibald/svgomg): Web GUI for SVGO (Licensed [MIT](https://github.com/jakearchibald/svgomg/blob/main/LICENSE.md))

- [SVGR](https://github.com/gregberge/svgr): Tool for transforming SVGs into React components (Licensed [MIT](https://github.com/gregberge/svgr/blob/main/LICENSE))

**Inspiration from:**

- [Make a README](https://www.makeareadme.com/): Inspiration for README.md template (Licensed [MIT](https://github.com/dguo/make-a-readme/blob/main/LICENSE))

- [Radis app](https://www.radis.app/): Inspiration for user interface components like the dual slider for the wavenumber range (Licensed [LGPL-3.0](https://github.com/suzil/radis-app/blob/main/LICENSE))
