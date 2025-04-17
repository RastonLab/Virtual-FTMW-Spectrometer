import React from 'react';

const FixedMirror = ({ onClick }) => {
  return (
    <div className="fixed-mirror-component" onClick={onClick}>
      <div className="clickable-overlay"></div>
    </div>
  );
};

export default FixedMirror; 