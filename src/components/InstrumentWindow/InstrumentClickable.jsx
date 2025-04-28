import React, { useState } from 'react';
import InfoDialog from '../InfoDialog';

/**
 * Reusable clickable component for instrument window
 * @param {Object} props - Component properties
 * @param {string} props.id - Unique identifier for the component
 * @param {string} props.name - Name of the instrument component
 * @param {string} props.description - Description of the instrument component
 * @param {Object} props.style - Style object for positioning and dimensions
 * @param {string} props.svg - Path to SVG image
 * @param {string} props.borderColor - Border color for the clickable area
 * @param {string} props.shape - Shape of the clickable area ('rectangle', 'oval', or 'triangle')
 * @param {string} props.orientation - For triangles: 'top-right', 'bottom-right', etc.
 * @param {string} props.customClass - Optional custom CSS class for special shapes
 * @param {Function} props.onDialogOpen - Optional callback for when dialog opens
 * @param {Function} props.onDialogClose - Optional callback for when dialog closes
 * @param {string} props.title - Title to be displayed on the clickable area
 */
const InstrumentClickable = ({ 
  id,
  name,
  description,
  style = {},
  svg,
  borderColor = 'red', 
  shape = 'rectangle',
  orientation = 'top-right',
  customClass = '',
  onDialogOpen,
  onDialogClose,
  title
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Display placeholder image if SVG fails to load
  const handleImgError = () => {
    console.error(`Failed to load image: ${svg}`);
    setImgError(true);
  };

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

  // Handle opening the dialog
  const handleOpenDialog = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setDialogOpen(true);
    if (onDialogOpen) onDialogOpen(id);
  };

  // Handle closing the dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
    if (onDialogClose) onDialogClose();
  };

  // Determine which classes to apply
  const componentClasses = [
    'instrument-clickable',
    shape === 'oval' ? 'oval-shape' : '',
    shape === 'triangle' ? 'triangle-shape' : '',
    shape === 'triangle' ? `triangle-${orientation}` : '',
    customClass
  ].filter(Boolean).join(' ');

  return (
    <>
      <div 
        className={componentClasses}
        onClick={handleOpenDialog} 
        id={id}
        style={{
          position: 'absolute',
          top: style.top,
          left: style.left,
          width: style.width,
          height: style.height,
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: borderColor,
          backgroundColor: shape === 'rectangle' ? `${borderColor}10` : 'transparent',
          clipPath: shape === 'triangle' ? getClipPath() : 'none',
          boxSizing: 'border-box',
          cursor: 'pointer',
          zIndex: 10,
          opacity: 0.5,
          transition: 'opacity 0.3s ease'
        }}
        title={title}
      />
      
      <InfoDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title={name}
        content={description}
        image={svg}
        imageFallback={
          imgError ? 
          <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', color: '#666' }}>
            Image not available
          </div> : null
        }
        onImageError={handleImgError}
        customComponent={null}
      />
    </>
  );
};

export default InstrumentClickable; 