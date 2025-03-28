import React from 'react';
import '../style/InfoDialog.css';

const InfoDialog = ({ open, onClose, title, content, image }) => {
  if (!open) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2 className="dialog-title">{title}</h2>
        {image && (
          <div className="dialog-image-container">
            <img 
              src={image} 
              alt={title} 
              className="dialog-image" 
              style={{ maxWidth: '100%', maxHeight: '380px', display: 'block', margin: '0 auto' }}
            />
          </div>
        )}
        <p className="dialog-description">{content}</p>
      </div>
    </div>
  );
};

export default InfoDialog;
