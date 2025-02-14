import { Grid, Input, Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as experimentalSetupReducer from '../../redux/experimentalSetupSlice';
import "../../style/components/NumberInputs.css"
import FormLabel from '@mui/material/FormLabel';
import { useEffect } from "react";
import { getMWBand } from "../../functions/getMWBand";

/**
 * A component that contains a MUI Slider and Inputs for the frequency range values
 */
export default function FrequencyRange({ min, max }) {
  const dispatch = useDispatch();
  const { frequencyMin, frequencyMax } = useSelector((store) => store.experimentalSetup);

  /**
   * Calls the helper method to get mw band value depending on the frequency range
   */
  useEffect(() => {
    const band = getMWBand(frequencyMin, frequencyMax);
  
    if (band) {
      dispatch(experimentalSetupReducer.setsMWBand(band));
    }
  }, [frequencyMin, frequencyMax]);

  /**
   * Sets the min and max value depending on the the slider
   */
  const handleSliderChange = (event, newValue) => {
    dispatch(experimentalSetupReducer.setFrequencyMin(newValue[0]));
    dispatch(experimentalSetupReducer.setFrequencyMax(newValue[1]));
  };

  /**
   * Sets the min value depending on the input
   */
  const handleInputChangeMin = (event) => {
    dispatch(
      experimentalSetupReducer.setFrequencyMin(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  /**
   * Sets the max value depending on the input
   */
  const handleInputChangeMax = (event) => {
    dispatch(
      experimentalSetupReducer.setFrequencyMax(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  /**
   * Handles the blur event for the inputs
   */
  const handleBlur = () => {
    let minFrequency = frequencyMin;
    let maxFrequency = frequencyMax;

    if (minFrequency > maxFrequency) {
      const temp = minFrequency;
      minFrequency = maxFrequency;
      maxFrequency = temp;
    }

    if (minFrequency < min) {
      minFrequency = min;
    }

    if (maxFrequency > max) {
      maxFrequency = max;
    }

    dispatch(experimentalSetupReducer.setFrequencyMin(minFrequency));
    dispatch(experimentalSetupReducer.setFrequencyMax(maxFrequency));
  };


  return (
    <div>
      <FormLabel>Frequency Range (GHz):</FormLabel>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Input
            sx={{ minWidth: "75px", maxWidth: "75px" }}
            value={frequencyMin}
            onChange={handleInputChangeMin}
            onBlur={handleBlur}
            inputProps={{
              min: min,
              max: max,
              type: "number",
            }}
          />
        </Grid>

        <Grid item>
          <Slider
            sx={{ minWidth: "250px" }}
            value={[
              frequencyMin === "" ? min : frequencyMin,
              frequencyMax === "" ? max : frequencyMax,
            ]}
            min={min}
            max={max}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>

        <Grid item>
          <Input
            sx={{ minWidth: "75px", maxWidth: "75px" }}
            value={frequencyMax}
            onChange={handleInputChangeMax}
            onBlur={handleBlur}
            inputProps={{
              min: min,
              max: max,
              type: "number",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
