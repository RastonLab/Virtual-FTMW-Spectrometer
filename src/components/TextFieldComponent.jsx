import { InputAdornment, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import "../style/components/NumberInputs.css"

/**
 * A dynamic text field component.
 *
 * @param {number} min - The minimum accepted value.
 * @param {number} max - The maximum accepted value.
 * @param {number} step - The amount the value is incremented or decremented.
 * @param {number|string} store - The current value entered by the user.
 * @param {string} label - The label to display on the TextField.
 * @param {string} [unit="Bar"] - The unit to display at the end of the input.
 * @param {function} reducer - The redux action to dispatch.
 */
export default function TextFieldComponent({ min, max, step, store, label, unit = "Bar", reducer }) {
  const dispatch = useDispatch();

  // Ensure the value stays within the specified range
  const checkRange = () => {
    let currentValue = store;
    if (currentValue < min) {
      currentValue = min;
    } else if (currentValue > max) {
      currentValue = max;
    }
    dispatch(reducer(currentValue));
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    dispatch(reducer(value === "" ? "" : Number(value)));
  };

  return (
    <div id="number-input">
      <TextField
        label={label}
        placeholder={`Enter ${label.toLowerCase()}`}
        type="number"
        value={store}
        onChange={handleTextChange}
        onBlur={checkRange}
        InputProps={{
          inputProps: { min, max, step },
          endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
        }}
      />
    </div>
  );
}
