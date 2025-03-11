import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as experimentalSetupReducer from '../../../redux/experimentalSetupSlice';
import { microwaveBand } from "../../../dictionaries/microwaveBand.js";

/**
 * A component that contains a MUI Select (dropdown) for the microwave band values
 */
export default function MicrowaveBand() {
  const dispatch = useDispatch();
  const { mwBand } = useSelector((store) => store.experimentalSetup)

  const handleChange = (event) => {
    dispatch(experimentalSetupReducer.setsMWBand(event.target.value));
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Microwave Band</InputLabel>
        <Select
          value={mwBand}
          label="Microwave Band"
          onChange={handleChange}
          sx={{ maxWidth: "120px" }}
        >
          {Object.keys(microwaveBand).map((option) => (
            <MenuItem key={option} value={option}>
              {microwaveBand[option]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}