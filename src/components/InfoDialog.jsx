import React from 'react';
import '../style/InfoDialog.css';

const InfoDialog = ({ open, onClose, title, content, image, customComponent, imageFallback, onImageError }) => {
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

  // Check if this is the Fabry-Pérot Cavity
  const isCavity = title === 'Fabry-Pérot Cavity';

  // Process the content to preserve special characters and formatting
  let formattedContent = content
    ? content
        .replace(/νres/g, '<span class="subscript">ν<sub>res</sub></span>')
        .replace(/Γ/g, '<span class="variable">Γ</span>')
    : '';

  // Create the table HTML for Fabry-Pérot Cavity dialog
  let tableHtml = '';
  if (isCavity) {
    tableHtml = `
    <div class="cavity-table-container">
      <table class="cavity-table">
        <thead>
          <tr>
            <th style="width:8%">Band</th>
            <th style="width:18%">Freq range (GHz)</th>
            <th style="width:18%">λs in cavity</th>
            <th style="width:30%">Mirror distance (cm)</th>
            <th style="width:26%">Antenna length (cm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S</td>
            <td>2-4</td>
            <td>4</td>
            <td>60-30</td>
            <td>5</td>
          </tr>
          <tr>
            <td>C</td>
            <td>4-8</td>
            <td>8</td>
            <td>60-30</td>
            <td>2.5</td>
          </tr>
          <tr>
            <td>X</td>
            <td>8-12</td>
            <td>12</td>
            <td>45-30</td>
            <td>1.5</td>
          </tr>
          <tr>
            <td>Ku</td>
            <td>12-18</td>
            <td>18</td>
            <td>45-30</td>
            <td>1</td>
          </tr>
          <tr>
            <td>K</td>
            <td>18-26.5</td>
            <td>26</td>
            <td>43.3-29.4</td>
            <td>0.667</td>
          </tr>
          <tr>
            <td>Ka</td>
            <td>26.5-40</td>
            <td>40</td>
            <td>45.25-30</td>
            <td>0.451</td>
          </tr>
        </tbody>
      </table>
    </div>
    `;
  }

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div 
        className={`dialog-content ${isAnimationOnly || isCustomComponent ? 'animation-only' : ''} ${isFullWidthComponent ? 'full-width-component' : ''} ${isCavity ? 'cavity-dialog' : ''}`} 
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
        
        {/* Display full text at the top for Fabry-Pérot Cavity */}
        {isCavity && content && (
          <div className="dialog-description">
            <p dangerouslySetInnerHTML={{ __html: formattedContent }}></p>
          </div>
        )}
        
        {/* Display custom component if available */}
        {isCustomComponent && (
          <div 
            className={`custom-component-container ${isFullWidthComponent ? 'full-width' : ''}`}
            style={{
              padding: isFullWidthComponent ? '0' : '15px',
              backgroundColor: 'transparent'
            }}
          >
            {customComponent}
          </div>
        )}

        {/* For Fabry-Pérot Cavity, display image after text */}
        {isCavity && image && (
          <div className="dialog-image-container">
            {imageFallback || (
              <img 
                src={image} 
                alt={title} 
                className="dialog-image"
                onError={onImageError}
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '300px', 
                  display: 'block', 
                  margin: '0 auto'
                }}
              />
            )}
          </div>
        )}
        
        {/* For Fabry-Pérot Cavity, show table after the image */}
        {isCavity && (
          <>
            <div className="dialog-description">
              <p>The distance between the mirrors is sensitive to the frequency range and the desired number of wavelengths between them. The following table outlines key cavity characteristics for different microwave bands. It assumes a radius of curvature of the mirrors equal to 38.4 cm:</p>
            </div>
            <div 
              className="cavity-table-section" 
              dangerouslySetInnerHTML={{ __html: tableHtml }}
            />
          </>
        )}
        
        {/* For all other components, use the standard layout */}
        {!isCavity && (
          <>
            {image && !isCustomComponent && (
              <div className={`dialog-image-container ${isAnimationOnly ? 'animation-only-container' : ''}`}>
                {imageFallback || (
                  <img 
                    src={image} 
                    alt={title} 
                    className={isAnimation ? "dialog-animation" : "dialog-image"}
                    onError={onImageError}
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
                )}
              </div>
            )}
            
            {/* Regular content for all other dialogs */}
            {content && !isCavity && (
              <p 
                className="dialog-description" 
                dangerouslySetInnerHTML={{ __html: formattedContent }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default InfoDialog;
