import React from "react";
import { FormControl, FormLabel, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { styled, Switch } from "@mui/material";
import { pink, blue } from "@mui/material/colors";

/**
 * A component that contains custom style elements for a MUI Switch
 */
const SwitchStyle = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      color: pink[400],
      "& + .MuiSwitch-track": {
        backgroundColor: pink[300],
      },
    },
    color: blue[700],
    "& + .MuiSwitch-track": {
      backgroundColor: blue[600],
    },
  },
}));

/**
 * A component that contains a MUI Switch for the two values
 */
export default function SwitchComponent({
  leftOptionData,
  rightOptionData,
  value,
  setValueAction,
  fieldLabel,
  leftOptionLabel,
  rightOptionLabel,
  switchProps = {},
}) {
  const dispatch = useDispatch();

  /**
   * Updates the value from the switch
   */
  const handleChange = (event, newAlignment) => {
    dispatch(setValueAction(newAlignment ? rightOptionData : leftOptionData));
  };

  const ariaLabel = { inputProps: { "aria-label": fieldLabel } };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{fieldLabel}</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>{leftOptionLabel}</Typography>
        <SwitchStyle
          {...ariaLabel}
          onChange={handleChange}
          checked={value === rightOptionData}
          {...switchProps}
        />
        <Typography>{rightOptionLabel}</Typography>
      </Stack>
    </FormControl>
  );
}
