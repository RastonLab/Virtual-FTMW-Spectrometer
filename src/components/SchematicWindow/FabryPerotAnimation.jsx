import React from 'react';
import '../../style/FabryPerotAnimation.css';

const FabryPerotAnimation = () => {
  // Use PUBLIC_URL to reference assets in the public directory
  const animationGif = process.env.PUBLIC_URL + "/assets/animations/FTMW_2025.gif";
  
  return (
    <div className="animation-container">
      <img 
        src={animationGif} 
        alt="Fabry-Perot Cavity Animation" 
        className="animation-gif"
        draggable="false"
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default FabryPerotAnimation; 