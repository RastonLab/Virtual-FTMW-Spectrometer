import { C_BAND_KEYFRAMES, K_BAND_KEYFRAMES, KA_BAND_KEYFRAMES, Ku_BAND_KEYFRAMES, S_BAND_KEYFRAMES, X_BAND_KEYFRAMES } from "./mwBandKeyframes";

// Global timeout tracker used to cancel all timeouts when the animation is cancelled
let animationTimeouts = [];

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
  currentFrequency,
  frequencyMax,
  stepSize = 1,
  cyclesPerStep = 1,
  frequencyMin,
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
  
  const totalScanTime = ((frequencyMax - currentFrequency) / stepSize + 1) * cyclesPerStep * 50;
  const adjustedMin = Math.ceil(currentFrequency / 100) * 100;
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
  let availableKeys = Object.keys(bandKeyframes)
                              .map(Number)
                              .filter(freq => freq >= adjustedMin && freq <= adjustedMax)
                              .sort((a, b) => a - b)
                              .map(freq => freq.toString());
  
  const firstKey = availableKeys[0];

  // If the current frequency is the minimum frequency, then the animation is just starting
  // Otherwise, the animation is already in progress so we dont need bring the instrument back to the initial state
  if (currentFrequency === frequencyMin) {
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
  }
  else {
    const currentKeyIndex = availableKeys.findIndex((key) => Number(key) >= currentFrequency);
    availableKeys = availableKeys.slice(currentKeyIndex);
    const currentKey = availableKeys[currentKeyIndex];

    const jumpTimeout = setTimeout(() => {
      if (currentKey) {
        componentNames.forEach(name => {
          components[name].style.transform = bandKeyframes[currentKey][name].transform;
        });
      }
    }, firstSegmentDuration);
    animationTimeouts.push(jumpTimeout);
  }

  // If the current frequency is not the minimum frequency, then we dont need to have the 1200ms pauses
  const firstPause = currentFrequency !== frequencyMin ? 0 : firstSegmentDuration;
  const secondPause = currentFrequency !== frequencyMin ? 0 : extraPause;
  
  const radiationTimeout = setTimeout(() => {
    radiationGraphics[mwBand].style.display = "";

    const animateTimeout = setTimeout(() => {
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

      const endTimeout = setTimeout(() => {
        radiationGraphics[mwBand].style.display = "none";
        components.spectrumReady.style.display = "";
      }, totalScanTime);
      animationTimeouts.push(endTimeout);
    }, secondPause);
    animationTimeouts.push(animateTimeout);
  }, firstPause);
  animationTimeouts.push(radiationTimeout);
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

  // Cancel all timeouts
  animationTimeouts.forEach(clearTimeout);
  animationTimeouts = [];

  setSBandState();
  components.sBand.style.display = "none";
  components.cBand.style.display = "none";
  components.xBand.style.display = "none";
  components.kuBand.style.display = "none";
  components.kBand.style.display = "none";
  components.kaBand.style.display = "none";
}