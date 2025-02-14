/**
 * Gets the microwave band based on the frequency range
 */
export const getMWBand = (frequencyMin, frequencyMax) => {
    const band =
      frequencyMin >= 2 && frequencyMax <= 4 ? "S" :
      frequencyMin >= 4 && frequencyMax <= 8 ? "C" :
      frequencyMin >= 8 && frequencyMax <= 12 ? "X" :
      frequencyMin >= 12 && frequencyMax <= 18 ? "Ku" :
      frequencyMin >= 18 && frequencyMax <= 26.5 ? "K" :
      frequencyMin >= 26.5 && frequencyMax <= 40 ? "Ka" :
      "";
    return band;
}