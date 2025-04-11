import React from "react";
import { FixedSizeList as List } from "react-window";

/**
 * Virtualized list component to display peaks
 */
const PeakList = React.memo(({ peaks }) => {
  const keys = Object.keys(peaks);
  const Row = ({ index, style }) => {
    const key = keys[index];
    return (
      <div style={style} key={key}>
        <div className="find-peaks-text" style={{ padding: "10px" }}>
          {`Peak: ${key}`}
          <br/>
          {`Intensity: ${peaks[key]}`}
        </div>
      </div>
    );
  };

  return (
    <List
      height={600}
      itemCount={keys.length}
      itemSize={50} 
      width={"100%"}
    >
      {Row}
    </List>
  );
});

export default PeakList;
