import { useDispatch, useSelector } from "react-redux";
import { setProgress } from "../redux/progressSlice";
import { setError } from "../redux/errorSlice";
import { sleepID } from "./AcquireSpectrumFetch";
import { scanEnded } from "../redux/scanSlice";
import { setCurrentCycle } from "../redux/experimentalSetupSlice";

/**
 * A component used in the MenuBar to stop the current scan's timer, spinner, and animation
 */
export default function CancelScan({
  buttonText,
  errorText,
}) {
  const dispatch = useDispatch();

  const { fetching } = useSelector((store) => store.progress);

  const handleClick = () => {
    clearTimeout(sleepID);
    dispatch(setProgress(false, false, false));
    dispatch(setError([true, errorText]));
    dispatch(scanEnded())
    dispatch(setError([true, "Scan canceled"]));
    dispatch(setCurrentCycle(1));
  };

  return (
    <button
      id={"cancel-scan-button"}
      onClick={handleClick}
      disabled={!fetching}
    >
      {buttonText}
    </button>
  );
}
