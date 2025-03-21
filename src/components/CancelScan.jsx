import { sleepID } from "./Fetch";
import { useDispatch, useSelector } from "react-redux";
import { setCancelFetch, setProgress } from "../redux/progressSlice";
import { setError } from "../redux/errorSlice";

/**
 * A component used in the MenuBar to stop the current scan's timer, spinner, and animation
 */
export default function CancelScan({
  buttonText,
  errorText,
  animationToggle
}) {
  const dispatch = useDispatch();

  const { fetching } = useSelector((store) => store.progress);

  const handleClick = () => {
    clearTimeout(sleepID);
    animationToggle();
    dispatch(setProgress(false, false, false));
    dispatch(setError([true, errorText]));
    dispatch(setCancelFetch(true));
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
