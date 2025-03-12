import React from "react";
import { useDispatch } from "react-redux";
import { FormLabel, Grid, Slider, Input } from "@mui/material";

/**
 * A component that contains a MUI Slider and Input field
 */
export default function SliderComponent({
  min,
  max,
  value,
  setValueAction,
  label,
  disabled = false,
  stepSize = null,
}) {
  const dispatch = useDispatch();

  // Updates the value from the slider
  const handleSliderChange = (event, newValue) => {
    dispatch(setValueAction(newValue));
  };

  // Updates the value from the input field
  const handleInputChange = (event) => {
    const newValue = event.target.value === "" ? "" : event.target.value;
    dispatch(setValueAction(newValue));
  };

  // Ensures that the value remains within bounds on blur
  const handleBlur = () => {
    let newValue = parseFloat(value);
    if (newValue < min) newValue = min;
    if (newValue > max) newValue = max;
    dispatch(setValueAction(newValue));
  };

  return (
    <div>
      <FormLabel>{label}</FormLabel>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Slider
            sx={{ minWidth: "200px" }}
            value={typeof value === "number" ? value : min}
            min={min}
            max={max}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            disabled={disabled}
            step={stepSize ?? 1}
          />
        </Grid>
        <Grid item>
          <Input
            sx={{ minWidth: "75px", maxWidth: "75px" }}
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              min,
              max,
              type: "number",
            }}
            disabled={disabled}
          />
        </Grid>
      </Grid>
    </div>
  );
}
