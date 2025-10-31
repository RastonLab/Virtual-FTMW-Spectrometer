// A simple linear interpolation helper.
const lerp = (start, end, fraction) => start + fraction * (end - start);

/**
 * Generates keyframes for a microwave band.
 * 
 * @param {Object} options - The options for keyframe generation.
 * @param {number} options.startKey - The starting frequency.
 * @param {number} options.endKey - The ending frequency.
 * @param {number} options.steps - The number of interpolation steps.
 * @param {Object} options.transforms - An object mapping component names to functions.
 *                                      Each function receives a fraction (0 to 1) and returns a transform string.
 * @returns {Object} keyframes - An object mapping frequency keys to keyframe definitions.
 */
export function createBandKeyframes({ startKey, endKey, steps, transforms }) {
  const keyframes = {};
  const stepSize = (endKey - startKey) / steps;
  for (let i = 0; i <= steps; i++) {
    const key = startKey + i * stepSize;
    const fraction = (key - startKey) / (endKey - startKey);
    keyframes[key] = {};
    for (const component in transforms) {
      keyframes[key][component] = {
        transform: transforms[component](fraction)
      };
    }
  }
  return keyframes;
}

/**
 * Generates keyframes for the S-band microwave band.
 * Creates keyframes for 60-30 cm mirror distance.
 */
export const S_BAND_KEYFRAMES = createBandKeyframes({
  startKey: 2000,
  endKey: 4000,
  steps: 20,
  transforms: {
    mirror: fraction => `translate(${lerp(-27, 0, fraction).toFixed(2)}%)`,
    nozzle: fraction => `translate(${lerp(-27, 0, fraction).toFixed(2)}%)`,
    smoothSpacer: fraction => 
      `matrix(-0.0378, 0, 0, 0.07767, ${lerp(197.807, 325.707, fraction).toFixed(3)}, 30.124)`,
    insideSmoothSpacer: fraction => `translate(${lerp(-27, 0, fraction).toFixed(2)}%)`,
    threadedSpacer: fraction => `translate(${lerp(3400, 0, fraction).toFixed(0)}px, 0px)`,
    insideThreadedSpacer: fraction => `translate(${lerp(3400, 0, fraction).toFixed(0)}px, 0px)`,
    wireAndBellows: fraction => `scale(${lerp(0.21, 1, fraction).toFixed(3)}, 1)`,
    radiation: fraction =>
      `matrix(${lerp(0.551, 0.28034, fraction).toFixed(3)}, 0, 0, 0.17202, ${lerp(448.287, 459.287, fraction).toFixed(3)}, 41.139)`,
    fabryPerotCavity: fraction => `scale(${lerp(0.21, 1, fraction).toFixed(3)}, 1)`
  }
});

/**
 * Generates keyframes for the C-band microwave band.
 * Creates keyframes for 60-30 cm mirror distance.
 */
export const C_BAND_KEYFRAMES = createBandKeyframes({
  startKey: 4000,
  endKey: 8000,
  steps: 40,
  transforms: {
    mirror: fraction => `translate(${lerp(-27, 0, fraction).toFixed(2)}%)`,
    nozzle: fraction => `translate(${lerp(-27, 0, fraction).toFixed(2)}%)`,
    smoothSpacer: fraction => 
      `matrix(-0.0378, 0, 0, 0.07767, ${lerp(197.807, 325.707, fraction).toFixed(3)}, 30.124)`,
    insideSmoothSpacer: fraction => `translate(${lerp(-27, 0, fraction).toFixed(2)}%)`,
    threadedSpacer: fraction => `translate(${lerp(3400, 0, fraction).toFixed(0)}px, 0px)`,
    insideThreadedSpacer: fraction => `translate(${lerp(3400, 0, fraction).toFixed(0)}px, 0px)`,
    wireAndBellows: fraction => `scale(${lerp(0.21, 1, fraction).toFixed(3)}, 1)`,
    radiation: fraction => 
      `matrix(${lerp(0.551, 0.28034, fraction).toFixed(3)}, 0, 0, 0.17202, ${lerp(448.287, 459.287, fraction).toFixed(3)}, 41.139)`
  }
});

/**
 * Generates keyframes for the X-band microwave band.
 * Creates keyframes for 45-30 cm mirror distance.
 */
export const X_BAND_KEYFRAMES = createBandKeyframes({
  startKey: 8000,
  endKey: 12000,
  steps: 60,
  transforms: {
    mirror: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    nozzle: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    smoothSpacer: fraction =>
      `matrix(-0.0378, 0, 0, 0.07767, ${lerp(242.572, 325.707, fraction).toFixed(3)}, 30.124)`,
    insideSmoothSpacer: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    threadedSpacer: fraction => `translate(${lerp(2210, 0, fraction).toFixed(0)}px, 0px)`,
    insideThreadedSpacer: fraction => `translate(${lerp(2210, 0, fraction).toFixed(0)}px, 0px)`,
    wireAndBellows: fraction => `scale(${lerp(0.486, 1, fraction).toFixed(3)}, 1)`,
    radiation: fraction =>
      `matrix(${lerp(0.456, 0.28034, fraction).toFixed(3)}, 0, 0, 0.17202, ${lerp(452.137, 459.287, fraction).toFixed(3)}, 41.139)`
  }  
});

/**
 * Generates keyframes for the Ku-band microwave band.
 * Creates keyframes for 45-30 cm mirror distance.
 */
export const Ku_BAND_KEYFRAMES = createBandKeyframes({
  startKey: 12000,
  endKey: 18000,
  steps: 60,
  transforms: {
    mirror: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    nozzle: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    smoothSpacer: fraction =>
      `matrix(-0.0378, 0, 0, 0.07767, ${lerp(242.572, 325.707, fraction).toFixed(3)}, 30.124)`,
    insideSmoothSpacer: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    threadedSpacer: fraction => `translate(${lerp(2210, 0, fraction).toFixed(0)}px, 0px)`,
    insideThreadedSpacer: fraction => `translate(${lerp(2210, 0, fraction).toFixed(0)}px, 0px)`,
    wireAndBellows: fraction => `scale(${lerp(0.486, 1, fraction).toFixed(3)}, 1)`,
    radiation: fraction =>
      `matrix(${lerp(0.456, 0.28034, fraction).toFixed(3)}, 0, 0, 0.17202, ${lerp(452.137, 459.287, fraction).toFixed(3)}, 41.139)`,
    fabryPerotCavity: fraction => `scale(${lerp(0.85, 1, fraction).toFixed(3)}, 1)`
  }  
});

/**
 * Generates keyframes for the K-band microwave band.
 * Creates keyframes for 43.3 - 29.4 cm mirror distance.
 */
export const K_BAND_KEYFRAMES = createBandKeyframes({
  startKey: 18000,
  endKey: 26500,
  steps: 85,
  transforms: {
    mirror: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    nozzle: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    smoothSpacer: fraction =>
      `matrix(-0.0378, 0, 0, 0.07767, ${lerp(242.572, 325.707, fraction).toFixed(3)}, 30.124)`,
    insideSmoothSpacer: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    threadedSpacer: fraction => `translate(${lerp(2210, 0, fraction).toFixed(0)}px, 0px)`,
    insideThreadedSpacer: fraction => `translate(${lerp(2210, 0, fraction).toFixed(0)}px, 0px)`,
    wireAndBellows: fraction => `scale(${lerp(0.486, 1, fraction).toFixed(3)}, 1)`,
    radiation: fraction =>
      `matrix(${lerp(0.456, 0.28034, fraction).toFixed(3)}, 0, 0, 0.17202, ${lerp(452.137, 459.287, fraction).toFixed(3)}, 41.139)`
  }  
});

/**
 * Generates keyframes for the Ka-band microwave band.
 * Creates keyframes for 45.25 - 30 cm mirror distance.
 */
export const KA_BAND_KEYFRAMES = createBandKeyframes({
  startKey: 26500,
  endKey: 40000,
  steps: 145,
  transforms: {
    mirror: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    nozzle: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    smoothSpacer: fraction =>
      `matrix(-0.0378, 0, 0, 0.07767, ${lerp(242.572, 325.707, fraction).toFixed(3)}, 30.124)`,
    insideSmoothSpacer: fraction => `translate(${lerp(-17.55, 0, fraction).toFixed(2)}%)`,
    threadedSpacer: fraction => `translate(${lerp(2210, 0, fraction).toFixed(0)}px, 0px)`,
    insideThreadedSpacer: fraction => `translate(${lerp(2210, 0, fraction).toFixed(0)}px, 0px)`,
    wireAndBellows: fraction => `scale(${lerp(0.486, 1, fraction).toFixed(3)}, 1)`,
    radiation: fraction =>
      `matrix(${lerp(0.456, 0.28034, fraction).toFixed(3)}, 0, 0, 0.17202, ${lerp(452.137, 459.287, fraction).toFixed(3)}, 41.139)`
  }  
});