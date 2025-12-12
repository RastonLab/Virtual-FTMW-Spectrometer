// A simple linear interpolation helper.
const lerp = (start, end, fraction) => start + fraction * (end - start);

let move = 45;

/**for gas cloud.

 @param {Object} options - The options for keyframe generation.
 @param {number} options.startKey - The starting frequency.
 @param {number} options.endKey -
 * Generates keyframes The ending frequency.
 * @param {number} options.steps - The number of interpolation steps.
 * @param {Object} options.transforms - An object mapping component names to functions.
 *                                      Each function receives a fraction (0 to 1) and returns a transform string.
 * @returns {Object} keyframes - An object mapping frequency keys to keyframe definitions.
 */
export function createCloudKeyframes({startKey, endKey, steps, transforms, opacityChange}) {
    const keyframes = {};
    const stepSize = (endKey - startKey) / steps;
    for (let i = 0; i <= steps; i++) {
        const key = startKey + i * stepSize;
        const fraction = (key - startKey) / (endKey - startKey);
        keyframes[key] = {
            cloud: {
                transform: transforms["cloud"](fraction),
                opacity: opacityChange["cloud"](fraction)
            }
        };
    }
    return keyframes;
}

export function createBandCloudKeyframes ({startKey, endKey, steps, transforms}) {
    const keyframes = {};
    const stepSize = (endKey - startKey) / steps;
    for (let i = 0; i <= steps; i++) {
        const key = startKey + i * stepSize;
        const fraction = (key - startKey) / (endKey - startKey);
        keyframes[key] = {
            cloud: {
                transform: transforms["cloud"](fraction)
            }
        };
    }
    return keyframes;
}

export const CLOUD_KEYFRAMES = createCloudKeyframes({
    startKey: 2000,
    endKey: 4000,
    steps: 20,
    transforms: {
        cloud: fraction => `translate(${lerp(move, 100+move, fraction).toFixed(2)}px, 0px)
            scale(${lerp(1, 5, fraction).toFixed(2)})`
    },
    opacityChange: {
        cloud: fraction => lerp(1, 0, fraction).toFixed(2)
    }
});

export const Ku_CLOUD_KEYFRAMES = createBandCloudKeyframes({
    startKey: 2000,
    endKey: 4000,
    steps: 20,
    transforms: {
        cloud: fraction => `translate(${lerp(0, 45, fraction).toFixed(2)}px, 0px)`
    }
});