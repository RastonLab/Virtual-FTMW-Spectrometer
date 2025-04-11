import React from "react";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";
import "../../style/components/Plotly.css";
import "../../style/routes/SpectraWindow.css";
import Spinner from '../Spinner';

/**
 * A function that downsamples data if it exceeds a certain threshold
 */
function downsample(data, threshold = 400000, factor = 10) {
  // Check if the dataset exceeds the threshold
  if (data.x.length > threshold) {
    return {
      x: data.x.filter((_, i) => i % factor === 0),
      y: data.y.filter((_, i) => i % factor === 0),
    };
  }
  return data;
}

/**
 * A component that uses Plotly.js to graph acquired spectrum data
 */
export default function AcquireSpectrumPlotly() {
  const { params, data, frequencyMin, frequencyMax } = useSelector((store) => store.acquireSpectrum);
  const { fetching } = useSelector((store) => store.progress);
  const { error, errorText } = useSelector((store) => store.error);

  // Set the x-axis range based on the acquisition type
  const xRange =
    params?.acquisitionType === "range"
      ? [frequencyMin - 25, frequencyMax + 25]
      : [params?.vres - 25, params?.vres + 25];

  // Memoize the processed data so it only recalculates when data changes
  const optimizedData = React.useMemo(() => {
    return data ? downsample(data, 400000, 10) : null;
  }, [data]);

  return (
    <div id="spectrum">
      {fetching ? (
        <Spinner variant="indeterminate" size={200} />
      ) : optimizedData ? (
        <Plot
          className="plotly"
          data={[
            {
              x: optimizedData.x,
              y: optimizedData.y,
              type: "scattergl",
              marker: { color: "#f50057" },
            },
          ]}
          layout={{
            title: { text: params.spectrumTitle },
            font: { family: "Roboto", color: "#000" },
            xaxis: {
              range: xRange,
              title: { text: "Frequency (MHz)" },
              rangeslider: {
                autorange: true,
                yaxis: { rangemode: "auto" },
              },
              type: "linear",
            },
            yaxis: {
              autorange: true,
              title: { text: "Intensity" },
              type: "linear",
              fixedrange: false,
              showticklabels: false,
            },
          }}
          useResizeHandler={true}
        />
      ) : error ? (
        <div id="graph-and-error" className="exp-col">
          <div id="error">
            <p style={{ fontSize: 30 }}>{errorText}</p>
          </div>
        </div>
      ) : (
        <div id="graph-and-error" className="exp-col">
          <h2>Please generate a Spectrum and return here</h2>
        </div>
      )}
    </div>
  );  
}
