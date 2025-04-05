import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

/**
 * A component that contains an MUI Progress (spinner) to display loading/waiting to the user
 */
export default function Spinner(props) {
  // Access props
  const frequencyMin = props.frequencyMin;
  const frequencyMax = props.frequencyMax;
  const stepSize = props.stepSize;
  const numCyclesPerStep = props.numCyclesPerStep;

  // Calculate total scans as number of keyframes
  const totalScans = ((frequencyMax - frequencyMin) / stepSize) * numCyclesPerStep * 1000 + 1;
  // Calculate total animation time (ms): each scan is 1000ms plus an extra 1200ms delay
  const totalTime = totalScans + 1200;

  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 100;
        if (next >= totalTime) {
          clearInterval(interval);
          return totalTime;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [totalTime]);

  // Calculate progress percentage and scan count
  const progress = Math.min((elapsed / totalTime) * 100, 100);
  const scansDone = Math.floor((elapsed / totalTime) * totalScans);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 15,
      }}
    >
      <CircularProgress {...props} value={progress} sx={{ "svg circle": { stroke: "url(#my_gradient)" } }} />
      {(props.acquisitionType === "range") && (
        <Typography
          variant="caption"
          component="div"
          color="inherit"
          fontFamily="inherit"
          fontSize={20}
          fontWeight={650}
          sx={{ textAlign: "center" }}
        >
          {Math.round(progress)}%<br />
          Steps Complete: {scansDone} / {totalScans}
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
