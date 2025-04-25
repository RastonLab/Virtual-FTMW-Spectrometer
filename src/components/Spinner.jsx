import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setProgress } from '../redux/progressSlice';
import { setCurrentFrequency, setCurrentCycle } from '../redux/experimentalSetupSlice';

/**
 * The spinner component that shows the progress of the experiment
 */
export default function Spinner({ delay, ...otherProps }) {
  const { variant } = otherProps;
  const { timer } = useSelector((store) => store.timer);
  const { frequencyMin, frequencyMax, stepSize, acquisitionType, numCyclesPerStep } = useSelector((store) => store.experimentalSetup);

  const [elapsed, setElapsed] = useState(timer);
  const [stepsDone, setStepsDone] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  const dispatch = useDispatch();

  const totalSteps = (frequencyMax - frequencyMin) / stepSize + 1; 
  const totalTicks = totalSteps * numCyclesPerStep;
  const tickInterval = delay / totalTicks;
  
  // Updates the steps and cycles done
  useEffect(() => {
    if (!delay || totalSteps <= 0 || numCyclesPerStep <= 0) return;
  
    const interval = setInterval(() => {

      // Updates the cycle count used to update redux variable for current cycle
      setCycleCount(prev => {
        const nextCycle = prev + 1;
  
        if (nextCycle < numCyclesPerStep) {
          return nextCycle;
        }
        return 0;
      });
  
      // Uses cycle count to update redux variable for current cycle
      setCycleCount(current => {
        // If current is 0, set current cycle to 1, else increment by 1
        dispatch(setCurrentCycle(current === 0 ? 1 : current + 1)); 
        return current;
      });
  
      // Updates the steps done
      setCycleCount(current => {
        if (current === 0) {
          setStepsDone(step => {
            const nextStep = step + 1;
            if (nextStep >= totalSteps) {
              clearInterval(interval);
              dispatch(setProgress(false, false, false));
              return step;
            }
            return nextStep;
          });
        }
        return current;
      });
    }, tickInterval);
  
    return () => clearInterval(interval);
  }, [delay, totalSteps, numCyclesPerStep, cycleCount, tickInterval, dispatch]);

  // derive percent from steps
  useEffect(() => {
    const pct = (stepsDone / totalSteps) * 100;
    setElapsed(pct);

    if (acquisitionType === 'range') {
      dispatch(setCurrentFrequency({ stepsDone }));
    }
  }, [stepsDone, totalSteps, acquisitionType, dispatch]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 15 }}>
      <CircularProgress {...otherProps} value={elapsed} sx={{ "svg circle": { stroke: "url(#my_gradient)" } }} />
      {acquisitionType === "range" && variant !== "indeterminate" && (
        <Typography variant="caption" component="div" color="inherit" fontFamily="inherit" fontSize={20} fontWeight={650} sx={{ textAlign: "center" }}>
          {Math.round(elapsed)}%<br />Steps Complete: {stepsDone} / {totalSteps}
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
