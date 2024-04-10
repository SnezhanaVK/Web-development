import React from 'react';

const EvenNumbers = ({ arr }) => {
  const Numbers = arr.filter(num => num % 2 === 0);
  
  return (
    <div>
      {Numbers.map(num => (
        <span key={num}>{num}, </span>
      ))}
    </div>
  );
};

export default EvenNumbers;