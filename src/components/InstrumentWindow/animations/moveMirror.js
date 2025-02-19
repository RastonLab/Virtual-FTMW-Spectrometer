/**
 * Function that moves the mirror and necessary components left and right.
 */
export function moveMirror() {
    const mirror = document.getElementById("movable-mirror");
    const nozzle = document.getElementById("nozzle");
    const smoothSpacer = document.getElementById("attachment-and-smooth-spacer");
    const insideSmoothSpacer = document.getElementById("inside-smooth-spacer");
    const threadedSpacer = document.getElementById("attachment-and-threaded-spacer");
    const insideThreadedSpacer = document.getElementById("inside-threaded-spacer");
    const wireAndBellows = document.getElementById("wire-and-bellows");
  
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
    wireAndBellows.style.transformOrigin = "160px 80px";

    // timing options for the mirror animation and necessary components
    const timing = {
        duration: 2000,
        iterations: 2,
        easing: easing,
    };

    const bellowsTiming = {
        duration: 2000,
        iterations: 2,
        easing: easing,
    };
  
    mirror.addEventListener("click", () => {
        mirror.animate(mirrorAnimation, timing); 
        nozzle.animate(mirrorAnimation, timing);
        smoothSpacer.animate(smoothSpacerAnimation, timing);
        insideSmoothSpacer.animate(mirrorAnimation, timing);
        threadedSpacer.animate(threadedSpacerAnimation, timing);
        insideThreadedSpacer.animate(threadedSpacerAnimation, timing);
        wireAndBellows.animate(bellowAnimation, bellowsTiming);
    });
}