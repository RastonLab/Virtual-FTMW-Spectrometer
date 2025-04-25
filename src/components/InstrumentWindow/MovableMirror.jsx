import React from 'react';

const MovableMirror = ({ onClick }) => {
  return (
    <div className="movable-mirror-component" onClick={onClick}>
      <div className="clickable-overlay"></div>
    </div>
  );
};

export default MovableMirror; 