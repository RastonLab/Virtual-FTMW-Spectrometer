import React from 'react';

/**
 * Reusable clickable component for instrument window
 * @param {Object} props - Component properties
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.borderColor - Border color for the clickable area
 * @param {string} props.id - Unique identifier for the component
 * @param {string} props.shape - Shape of the clickable area ('rectangle', 'oval', or 'triangle')
 * @param {string} props.orientation - For triangles: 'top-right', 'bottom-right', etc.
 */
const InstrumentClickable = ({ 
  onClick, 
  borderColor = 'red', 
  id,
  shape = 'rectangle',
  orientation = 'top-right'
}) => {
  // For triangle shape, use clip-path to create the triangle
  const getClipPath = () => {
    if (shape === 'triangle') {
      switch(orientation) {
        case 'top-right':
          return 'polygon(0 0, 100% 0, 100% 100%)';
        case 'bottom-right':
          return 'polygon(100% 0, 100% 100%, 0 100%)';
        case 'top-left':
          return 'polygon(0 0, 100% 0, 0 100%)';
        case 'bottom-left':
          return 'polygon(0 0, 100% 100%, 0 100%)';
        default:
          return 'polygon(0 0, 100% 0, 100% 100%)';
      }
    }
    return 'none';
  };

  return (
    <div 
      className={`instrument-clickable-component ${shape === 'oval' ? 'oval-shape' : ''}`} 
      onClick={onClick} 
      id={id}
      style={{
        clipPath: shape === 'triangle' ? getClipPath() : 'none'
      }}
    >
      <div 
        className={`clickable-overlay ${shape === 'oval' ? 'oval-shape' : ''}`} 
        style={{ 
          borderColor,
          clipPath: shape === 'triangle' ? getClipPath() : 'none'
        }}
      ></div>
    </div>
  );
};

export default InstrumentClickable; 