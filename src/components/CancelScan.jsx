import { useDispatch, useSelector } from "react-redux";
import { setProgress } from "../redux/progressSlice";
import { setError } from "../redux/errorSlice";
import { sleepID } from "./AcquireSpectrumFetch";
import { setTimer } from "../redux/timerSlice";

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
    dispatch(setTimer(0));
    dispatch(setError([true, "Scan canceled"]));
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
