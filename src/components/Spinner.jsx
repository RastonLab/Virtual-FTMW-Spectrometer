import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setProgress } from '../redux/progressSlice';
import { setTimer } from '../redux/timerSlice';

export default function Spinner({ frequencyMin, frequencyMax, stepSize, numCyclesPerStep, acquisitionType, timer: timerProp, ...otherProps }) {
  const totalSteps = ((frequencyMax - frequencyMin) / stepSize) + 1;
  const totalTime = totalSteps * numCyclesPerStep * 1000;
  const { timer } = useSelector((store) => store.timer);
  const [elapsed, setElapsed] = useState(timer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timerProp) {
      const interval = setInterval(() => {
        if (elapsed >= totalTime) {
          dispatch(setProgress(false, false, false));
        }
        setElapsed((prev) => {
          const next = prev + 100;
          if (next >= totalTime) {
            clearInterval(interval);
            return totalTime;
          }
          return next;
        });
      }, 100);
      dispatch(setTimer(elapsed));
      return () => clearInterval(interval);
    }
  }, [totalTime, timerProp, dispatch, elapsed]);

  const progress = Math.min((elapsed / totalTime) * 100, 100);
  const stepsDone = Math.floor((elapsed / totalTime) * totalSteps);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 15 }}>
      <CircularProgress {...otherProps} value={progress} sx={{ "svg circle": { stroke: "url(#my_gradient)" } }} />
      {acquisitionType === "range" && (
        <Typography variant="caption" component="div" color="inherit" fontFamily="inherit" fontSize={20} fontWeight={650} sx={{ textAlign: "center" }}>
          {Math.round(progress)}%<br />Steps Complete: {stepsDone} / {totalSteps}
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
