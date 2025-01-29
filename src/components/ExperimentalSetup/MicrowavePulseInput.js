import { Grid, Input, Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as experimentalSetupReducer from '../../redux/experimentalSetupSlice';
import "../../style/components/NumberInputs.css"
import FormLabel from '@mui/material/FormLabel';

/**
 * A component that contains a MUI Input for the number of cycle per step
 */
export default function MicrowavePulseInput({ min, max }) {
  const dispatch = useDispatch();
  const { microwavePulseWidth } = useSelector((store) => store.experimentalSetup);

  /**
   * Sets the value depending on the slider
   */
  const handleSliderChange = (event, newValue) => {
    dispatch(experimentalSetupReducer.setMicrowavePulseWidth(newValue));
  }

  /**
   * Sets the value depending on the input
   */
  const handleInputChange = (event) => {
    dispatch(
      experimentalSetupReducer.setMicrowavePulseWidth(event.target.value === "" ? "" : (event.target.value))
    );
  };

  /**
   * Handles the blur event for the inputs
   */
  const handleBlur = () => {
    let value = parseFloat(microwavePulseWidth);

    if (value < min) value = min;
    if (value > max) value = max;

    dispatch(experimentalSetupReducer.setMicrowavePulseWidth(value));
  };


  return (
    <div>
      <FormLabel>Microwave Pulse Width (μs):</FormLabel>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Slider
            sx={{ minWidth: "200px" }}
            value={typeof microwavePulseWidth === "number" ? microwavePulseWidth : min}
            min={min}
            max={max}
            onChange={handleSliderChange}
            aria-labelledby={"input-slider"}
          />
        </Grid>
        <Grid item>
          <Input
            sx={{ minWidth: "75px", maxWidth: "75px" }}
            value={microwavePulseWidth}
            onChange={handleInputChange}
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
