import React from 'react';

const Square = ({ n }) => {
  return (
    <div>
      <h2>Квадрат числа {n}:</h2>
      <p>{n} * {n} = {n * n}</p>
    </div>
  );
};

export default Square;