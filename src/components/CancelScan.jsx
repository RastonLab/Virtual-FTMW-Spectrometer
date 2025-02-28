import { sleepID } from "./Fetch";
import { useDispatch, useSelector } from "react-redux";
import { setProgress } from "../redux/progressSlice";
import { setTimer } from "../redux/timerSlice";
import { setError } from "../redux/errorSlice";

/**
 * A component used in the MenuBar to stop the current scan's timer, spinner, and animation
 */
export default function CancelScan({
  buttonText,
  animationToggle
}) {
  const dispatch = useDispatch();

  const { fetching } = useSelector((store) => store.progress);

  const handleClick = () => {
    clearTimeout(sleepID);
    animationToggle();
    dispatch(setProgress(false, false, false));
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
