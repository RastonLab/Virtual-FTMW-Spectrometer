import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setProgress } from '../redux/progressSlice';
import { setCurrentFrequency, setCurrentCycle } from '../redux/experimentalSetupSlice';
import { scanEnded } from '../redux/scanSlice';

/**
 * Spinner that tracks a running FTMW scan.
 */
export default function Spinner({ delay, noPadding = false, ...otherProps }) {
  const { variant } = otherProps;

  const { frequencyMin, frequencyMax, stepSize, acquisitionType, numCyclesPerStep } = useSelector((store) => store.experimentalSetup);
  const { scanActive, startTime, durationMs } = useSelector((store) => store.scan);

  const totalSteps = (frequencyMax - frequencyMin) / stepSize + 1;
  const totalTicks = totalSteps * numCyclesPerStep;
  const guardDuration = durationMs || delay || 1;
  const tickInterval = guardDuration / totalTicks;

  const [stepsDone, setStepsDone] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const dispatch = useDispatch();

  const { prefetch } = useSelector((store) => store.progress);

  //console.log("scan active = " + scanActive);

  // Set the initial state for the spinner
  useEffect(() => {
    if (!scanActive) return;

    // Calculate how much time has already passed since scan started
    const elapsedMs = Date.now() - startTime;

    // Estimate how many ticks have occurred based on elapsed time
    const ticksSoFar = Math.min(
      Math.floor(elapsedMs / tickInterval),
      totalTicks - 1
    );

    // Break the total ticks into step and cycle positions
    const initSteps = Math.floor(ticksSoFar / numCyclesPerStep);
    const initCycles = ticksSoFar % numCyclesPerStep;
    const initPct = (initSteps / totalSteps) * 100;

    // Set internal state for resuming progress
    setStepsDone(initSteps);
    setElapsed(initPct);

    // Push cycle and frequency state into Redux
    dispatch(setCurrentCycle(initCycles === 0 ? 1 : initCycles + 1));
    if (acquisitionType === 'range') {
      dispatch(setCurrentFrequency({ stepsDone: initSteps }));
    }
  }, [scanActive, startTime, tickInterval, totalTicks, numCyclesPerStep, totalSteps, dispatch, acquisitionType]);

  // Set up the interval to update the spinner
  useEffect(() => {
    if (!scanActive || totalSteps <= 0 || numCyclesPerStep <= 0) return;

    let cycleCount = 0;

    const interval = setInterval(() => {
      cycleCount++;

      // If a full cycle set is complete, increment the step
      if (cycleCount >= numCyclesPerStep) {
        cycleCount = 0;

        setStepsDone((step) => {
          const nextStep = step + 1;
          if (nextStep >= totalSteps) {
            clearInterval(interval);
            setTimeout(() => {
              console.log("set progress spinner: prefetch = false");
              dispatch(setProgress([false, false, false]));
              dispatch(scanEnded());
            }, 0);
            return step;
          }
          return nextStep;
        });
      }

      // Update cycle count in Redux
      dispatch(setCurrentCycle(cycleCount + 1));
    }, tickInterval);

    return () => clearInterval(interval);
  }, [scanActive, totalSteps, numCyclesPerStep, tickInterval, dispatch, prefetch]);

  // Recalculate percent complete and update Redux frequency
  useEffect(() => {
    const pct = (stepsDone / totalSteps) * 100;
    setElapsed(pct);

    if (acquisitionType === 'range') {
      dispatch(setCurrentFrequency({ stepsDone }));
    }
  }, [stepsDone, totalSteps, acquisitionType, dispatch]);

  //if (!scanActive) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: noPadding ? 0 : 15 }}>
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
