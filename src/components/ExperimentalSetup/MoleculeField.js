import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as experimentalSetupReducer from '../../redux/experimentalSetupSlice';
import { molecules } from '../../dictionaries/molecule';

/**
 * A component that contains a MUI Select (dropdown) for the molecule values
 *
 * @param {object} dictionary - The key-value pairs (value, label).
 */
export default function Molecule() {
  const dispatch = useDispatch();
  const { molecule } = useSelector((store) => store.experimentalSetup)

  const handleChange = (event) => {
    dispatch(experimentalSetupReducer.setMolecule(event.target.value));
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Molecule</InputLabel>
        <Select
          value={molecule}
          label="Molecule"
          onChange={handleChange}
          sx={{ maxWidth: "120px" }}
        >
          {Object.keys(molecules).map((option) => (
            <MenuItem key={option} value={option}>
              {molecules[option]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}