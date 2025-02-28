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
    wireAndBellows: document.getElementById("wire-and-bellows")
});
  
/**
 * Function that moves the mirror and necessary components left and right.
 */
export function moveMirror() {
    const components = getComponents();
    const easing = "linear";

    // keyframes to move the mirror and necessary components left and right
    const mirrorAnimation = [
        { transform: "translate(0px, 0px)" },
        { transform: "translate(-22%)" },
        { transform: "translate(0px, 0px)" },
    ];

    // keyframes to move the smooth spacer left and right
    const smoothSpacerAnimation = [
        { transform: "matrix(-0.0378, 0, 0, 0.07767, 325.707, 30.124)" },
        { transform: "matrix(-0.0378, 0, 0, 0.07767, 168.707, 30.124)" },
        { transform: "matrix(-0.0378, 0, 0, 0.07767, 325.707, 30.124)" },
    ];

    // keyframes to move the mirror and necessary components left and right
    const threadedSpacerAnimation = [
        { transform: "translate(0px, 0px)" },
        { transform: "translate(4130px, 0px)" },
        { transform: "translate(0px, 0px)" },
    ];

    // keyframes to compress the bellows
    const bellowAnimation = [
        { transform: "scale(1, 1)" },
        { transform: "scale(0.03, 1)" },
        { transform: "scale(1, 1)" },
    ];

    // set the transform origin for the wire and bellows animation
    components.wireAndBellows.style.transformOrigin = "160px 80px";

    // timing options for the mirror animation and necessary components
    const timing = {
        duration: 3500,
        iterations: 5,
        easing: easing,
    };
  
    components.mirror.animate(mirrorAnimation, timing); 
    components.nozzle.animate(mirrorAnimation, timing);
    components.smoothSpacer.animate(smoothSpacerAnimation, timing);
    components.insideSmoothSpacer.animate(mirrorAnimation, timing);
    components.threadedSpacer.animate(threadedSpacerAnimation, timing);
    components.insideThreadedSpacer.animate(threadedSpacerAnimation, timing);
    components.wireAndBellows.animate(bellowAnimation, timing);
}

/**
 * Function that stops the current animation of the mirror and reset its location
 */
export function cancelMirrorMovement() {
    const components = getComponents();

    Object.values(components).forEach((component) => {
        if (component) {
            component.getAnimations().forEach((animation) => animation.cancel());
        }
    });
}

/**
 * Function that pauses the current animation of the mirror
 */
export function pauseMirrorMovement() {
    const components = getComponents();

    Object.values(components).forEach((component) => {
        if (component) {
            component.getAnimations().forEach((animation) => animation.pause());
        }
    });
}