import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch, useSelector } from 'react-redux';
import { setStepSize } from '../../../redux/experimentalSetupSlice';

/**
 * A component that contains a MUI RadioGroup for the step size values
 */
export default function StepSizeOptions() {
  const dispatch = useDispatch();
  const stepSize = useSelector((store) => store.experimentalSetup.stepSize);

  /**
   * Handles changing the step size For the Frequency Range
   */
  const handleChange = (event, data) => {
    dispatch(setStepSize(parseFloat(data)));
  }

  return (
    <FormControl>
      <FormLabel>Step Size (MHz):</FormLabel>
      <RadioGroup
        row
        value={stepSize}
        onChange={handleChange}
      >
        <FormControlLabel value={0.1} control={<Radio />} label="0.1" />
        <FormControlLabel value={0.2} control={<Radio />} label="0.2" />
        <FormControlLabel value={0.5} control={<Radio />} label="0.5" />
        <FormControlLabel value={1.0} control={<Radio />} label="1.0" />
        <FormControlLabel value={2.0} control={<Radio />} label="2.0" />
        <FormControlLabel value={5.0} control={<Radio />} label="5.0" />
      </RadioGroup>
    </FormControl>
  );
}