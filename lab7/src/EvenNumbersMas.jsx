import React from 'react';

const OnlyEven = ({ arr }) => {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  
  return (
    <div>
      {evenNumbers.map(num => (
        <span key={num}>{num}, </span>
      ))}
    </div>
  );
};