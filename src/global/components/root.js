// Root.js

import React, { useState } from 'react';
import Header from '../layout/header'; // Import your Header component
import '../../style/index.css'; // Import your global styles

const Root = () => {
  const [backgroundColor, setBackgroundColor] = useState('#181A2A');

  const handleBackgroundChange = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const appStyle = {
    backgroundColor: backgroundColor,
    height: '100%',
  };

  return (
    <div style={appStyle}>
      {/* Pass handleBackgroundChange function to Header */}
      <Header handleBackgroundChange={handleBackgroundChange} />
      {/* Other components of your application */}
    </div>
  );
};

export default Root;
