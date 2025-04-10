import React from 'react';
import '../style/InfoDialog.css';

const InfoDialog = ({ open, onClose, title, content, image, customComponent }) => {
  // If dialog is not open, don't render anything
  if (!open) return null;

  // Check if the image is a GIF animation
  const isAnimation = image && image.toLowerCase().endsWith('.gif');
  
  // Check if there's only an animation (no text content)
  const isAnimationOnly = isAnimation && !content;
  
  // Check if we're using a custom component
  const isCustomComponent = customComponent !== null && customComponent !== undefined;
  
  // If it's a custom component, make it full-width with no title
  const isFullWidthComponent = isCustomComponent && !content;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div 
        className={`dialog-content ${isAnimationOnly || isCustomComponent ? 'animation-only' : ''} ${isFullWidthComponent ? 'full-width-component' : ''}`} 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: isFullWidthComponent ? '85vh' : 'auto',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
        }}
      >
        <button className="close-button" onClick={onClose}>×</button>
        
        {/* Only show title if not a full-width component */}
        {!isFullWidthComponent && <h2 className="dialog-title">{title}</h2>}
        
        {/* Custom component takes precedence over images */}
        {isCustomComponent ? (
          <div 
            className={`custom-component-container ${isFullWidthComponent ? 'full-width' : ''}`}
            style={{
              padding: isFullWidthComponent ? '0' : '15px',
              backgroundColor: 'transparent'
            }}
          >
            {customComponent}
          </div>
        ) : image ? (
          <div className={`dialog-image-container ${isAnimationOnly ? 'animation-only-container' : ''}`}>
            <img 
              src={image} 
              alt={title} 
              className={isAnimation ? "dialog-animation" : "dialog-image"}
              style={{ 
                maxWidth: '100%', 
                maxHeight: isAnimationOnly ? '550px' : isAnimation ? '450px' : '380px', 
                display: 'block', 
                margin: '0 auto',
                // Center the animation and make it more prominent
                ...(isAnimation && { 
                  objectFit: 'contain',
                  border: '1px solid #eee',
                  borderRadius: '4px',
                  padding: '5px'
                }),
                ...(isAnimationOnly && {
                  padding: '10px',
                  boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
                })
              }}
            />
          </div>
        ) : null}
        
        {content && <p className="dialog-description">{content}</p>}
      </div>
    </div>
  );
};

export default InfoDialog;
