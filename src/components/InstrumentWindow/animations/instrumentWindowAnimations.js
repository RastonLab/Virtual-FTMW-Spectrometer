import { C_BAND_KEYFRAMES, K_BAND_KEYFRAMES, KA_BAND_KEYFRAMES, Ku_BAND_KEYFRAMES, S_BAND_KEYFRAMES, X_BAND_KEYFRAMES } from "./mwBandKeyframes";

/**
 * Function that returns the components that are necessary for the mirror animation.
 */
const getComponents = () => ({
  mirror: document.getElementById("movable-mirror"),
  nozzle: document.getElementById("nozzle"),
  smoothSpacer: document.getElementById("attachment-and-smooth-spacer"),
  insideSmoothSpacer: document.getElementById("inside-smooth-spacer"),
  threadedSpacer: document.getElementById("attachment-and-threaded-spacer"),
  insideThreadedSpacer: document.getElementById("inside-threaded-spacer"),
  wireAndBellows: document.getElementById("wire-and-bellows"),
  radiation: document.getElementById("radiation"),
  sBand: document.getElementById("s-band"),
  cBand: document.getElementById("c-band"),
  xBand: document.getElementById("x-band"),
  kuBand: document.getElementById("ku-band"),
  kBand: document.getElementById("k-band"),
  kaBand: document.getElementById("ka-band"),
  spectrumReady: document.getElementById("spectrum-ready"),
});

/**
 * Returns the S-band state (start)
 */
const sBandState = () => ({
  mirror: { transform: "translate(-27%)" },
  nozzle: { transform: "translate(-27%)" },
  smoothSpacer: { transform: "matrix(-0.0378, 0, 0, 0.07767, 197.807, 30.124)" },
  insideSmoothSpacer: { transform: "translate(-27%)" },
  threadedSpacer: { transform: "translate(3400px, 0px)" },
  insideThreadedSpacer: { transform: "translate(3400px, 0px)" },
  wireAndBellows: { transform: "scale(0.21, 1)" },
  radiation: { transform: "matrix(0.551, 0, 0, .17202, 448.287, 41.139)" },
});


/**
 * Sets the initial mw band state
 */
export function setSBandState() {
  const components = getComponents();
  let state = sBandState();

  components.wireAndBellows.style.transformOrigin = "160px 80px";

  Object.entries(state).forEach(([key, style]) => {
    if (components[key]) {
      Object.assign(components[key].style, style);
    }
  });

}

/**
 * Function that animates the mirror to the selected band
 */
export function animateToBand(
  mwBand,
  frequencyMin,
  frequencyMax,
  stepSize = 1,
  cyclesPerStep = 1,
  firstSegmentDuration = 1000,
  extraPause = 200
) {
  const components = getComponents();
  const componentNames = [
    "mirror",
    "nozzle",
    "smoothSpacer",
    "insideSmoothSpacer",
    "threadedSpacer",
    "insideThreadedSpacer",
    "wireAndBellows",
    "radiation"
  ];
  
  components.wireAndBellows.style.transformOrigin = "160px 80px";
  components.spectrumReady.style.display = "none";
  
  const totalScanTime = ((frequencyMax - frequencyMin) / stepSize + 1) * cyclesPerStep * 1000;
  const adjustedMin = Math.ceil(frequencyMin / 100) * 100;
  const adjustedMax = Math.ceil(frequencyMax / 100) * 100;
  
  // Object that maps the mw band to its keyframes
  // The keyframes are generated in the mwBandKeyframes.js file
  const bandKeyframesMapping = {
    S: S_BAND_KEYFRAMES,
    C: C_BAND_KEYFRAMES,
    X: X_BAND_KEYFRAMES,
    Ku: Ku_BAND_KEYFRAMES,
    K: K_BAND_KEYFRAMES,
    Ka: KA_BAND_KEYFRAMES
  };

  // Object that maps the mw band to its radiation graphics
  const radiationGraphics = {
    S: components.sBand,
    C: components.cBand,
    X: components.xBand,
    Ku: components.kuBand,
    K: components.kBand,
    Ka: components.kaBand
  };

  // Select the keyframes for the selected mw band
  const bandKeyframes = bandKeyframesMapping[mwBand] || S_BAND_KEYFRAMES;
  
  // Grabs the keyframes based on frequency range 
  const availableKeys = Object.keys(bandKeyframes)
                              .map(Number)
                              .filter(freq => freq >= adjustedMin && freq <= adjustedMax)
                              .sort((a, b) => a - b)
                              .map(freq => freq.toString());
  
  const firstKey = availableKeys[0];
  // Grabs the initial state of the instrument window
  const initialSState = sBandState();
  
  const firstTiming = {
    duration: firstSegmentDuration,
    easing: "linear",
    fill: "forwards"
  };
  
  // Animates the beginning of the scan
  componentNames.forEach(name => {
    components[name].animate(
      [
        { transform: initialSState[name].transform },
        { transform: bandKeyframes[firstKey][name].transform }
      ],
      firstTiming
    );
  });
  
  setTimeout(() => {  
    // Shows the radiation graphics for the selected mw band
    radiationGraphics[mwBand].style.display = "";
    setTimeout(() => {
      const secondTiming = {
        duration: totalScanTime,
        easing: "linear",
        fill: "forwards"
      };
      componentNames.forEach(name => {
        components[name].animate(
          availableKeys.map(key => ({
            transform: bandKeyframes[key][name].transform
          })),
          secondTiming
        );
      });
      setTimeout(() => {
        radiationGraphics[mwBand].style.display = "none";
        components.spectrumReady.style.display = "";
      }, totalScanTime);
    }, extraPause);
  }, firstSegmentDuration);
}

/**
 * Function that sets the display of the spectrum ready message
 */
export const setSpectrumReady = () => {
  const components = getComponents();
  components.spectrumReady.style.display = "";
}

/**
 * Function that stops the current animation of the mirror and reset its location
 */
export function cancelAnimation() {
  const components = getComponents();

  Object.values(components).forEach((component) => {
      if (component) {
          component.getAnimations().forEach((animation) => animation.cancel());
      }
  });

  setSBandState();
  components.sBand.style.display = "none";
  components.cBand.style.display = "none";
  components.xBand.style.display = "none";
  components.kuBand.style.display = "none";
  components.kBand.style.display = "none";
  components.kaBand.style.display = "none";
}