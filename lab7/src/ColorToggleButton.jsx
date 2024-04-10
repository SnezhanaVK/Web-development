import React, { useState } from 'react';

const ColorToggleButton = () => {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor(color === 'red' ? 'green' : 'red');
  };

  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {color === 'red' ? 'Нажми' : 'Нажми'}
    </button>
  );
};

export default ColorToggleButton;