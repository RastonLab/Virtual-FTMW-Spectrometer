import { Grid, Input, Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as experimentalSetupReducer from '../../redux/experimentalSetupSlice';
import "../../style/components/NumberInputs.css"
import FormLabel from '@mui/material/FormLabel';

/**
 * A component that contains a MUI Input for the number of cycle per step
 */
export default function NumCyclesInput({ min, max }) {
  const dispatch = useDispatch();
  const { numCyclesPerStep } = useSelector((store) => store.experimentalSetup);

  /**
   * Handles the slider change event
   */
  const handleSliderChange = (event, newValue) => {
    dispatch(experimentalSetupReducer.setNumCyclesPerStep(newValue));
  }

  /**
   * Sets the value depending on the input
   */
  const handleInputChange = (event) => {
    dispatch(
      experimentalSetupReducer.setNumCyclesPerStep(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  /**
   * Handles the blur event for the inputs
   */
  const handleBlur = () => {
    let value = parseFloat(numCyclesPerStep);

    if (value < min) value = min;
    if (value > max) value = max;

    dispatch(experimentalSetupReducer.setNumCyclesPerStep(value));
  };


  return (
    <div>
      <FormLabel>Number of Cycles per Step:</FormLabel>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Slider
            sx={{ minWidth: "200px" }}
            value={typeof numCyclesPerStep === "number" ? numCyclesPerStep : min}
            min={min}
            max={max}
            onChange={handleSliderChange}
            aria-labelledby={"input-slider"}
          />
        </Grid>
        <Grid item>
          <Input
            sx={{ minWidth: "75px", maxWidth: "75px" }}
            value={numCyclesPerStep}
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
