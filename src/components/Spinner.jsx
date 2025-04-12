import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setProgress } from '../redux/progressSlice';
import { setTimer } from '../redux/timerSlice';
import { setCurrenFrequency } from '../redux/experimentalSetupSlice';

export default function Spinner({ delay, ...otherProps }) {
  const { timer } = useSelector((store) => store.timer);
  const { frequencyMin, frequencyMax, stepSize, acquisitionType, currentFrequency } = useSelector((store) => store.experimentalSetup);

  const [elapsed, setElapsed] = useState(timer);
  const [stepsDone, setStepsDone] = useState(0);

  const dispatch = useDispatch();

  const totalSteps = (frequencyMax - frequencyMin) / stepSize + 1;

  useEffect(() => {
    if (delay) {
      const interval = setInterval(() => {
        if (elapsed >= 100) {
          dispatch(setProgress(false, false, false));
        }

        setElapsed((prev) => 
          prev >= 100 ? 0 : prev + 1
        );
      }, delay / 100);

      dispatch(setTimer(elapsed));

      if (elapsed >= (stepsDone * 100) / totalSteps) {
        setStepsDone(stepsDone + 1);
      }

      return () => clearInterval(interval);
    }
  }, [delay, dispatch, elapsed, stepsDone, totalSteps]);

  useEffect(() => {
    if (acquisitionType === "range" && stepsDone > 0 && currentFrequency < frequencyMax) {
      const STEPS_DONE = stepsDone - 1;
      dispatch(setCurrenFrequency({ stepsDone: STEPS_DONE }));
    }
  }, [dispatch, stepsDone, acquisitionType, currentFrequency, frequencyMax]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 15 }}>
      <CircularProgress {...otherProps} value={elapsed} sx={{ "svg circle": { stroke: "url(#my_gradient)" } }} />
      {acquisitionType === "range" && (
        <Typography variant="caption" component="div" color="inherit" fontFamily="inherit" fontSize={20} fontWeight={650} sx={{ textAlign: "center" }}>
          {Math.round(elapsed)}%<br />Steps Complete: {stepsDone - 1} / {totalSteps}
        </Typography>
      )}
      <svg>
        <defs>
          <linearGradient id="my_gradient" x1="80%" y1="0%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="rgba(255, 0, 0, 1)" />
            <stop offset="10%" stopColor="rgba(255, 165, 0, 1)" />
            <stop offset="30%" stopColor="rgba(255, 255, 0, 1)" />
            <stop offset="50%" stopColor="rgba(0, 170, 0, 1)" />
            <stop offset="70%" stopColor="rgba(0, 221, 255, 1)" />
            <stop offset="90%" stopColor="rgba(0, 0, 255, 1)" />
            <stop offset="100%" stopColor="rgba(147, 1, 205, 1)" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
}
