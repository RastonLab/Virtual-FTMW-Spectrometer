import React from 'react';
import '../style/FabryPerotAnimation.css';
// 直接导入src目录下的GIF文件
import animationGif from '../assets/svg/components/schematic/FTMW_2025.gif';

const FabryPerotAnimation = () => {
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