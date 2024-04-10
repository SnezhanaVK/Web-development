import React from 'react';
import './Temperature.css';

const Temperature = ({ t }) => {
  let color;

  if (t < 0) {
    color = 'blue';
  } else {
    color = 'red';
  }

  return (
    <div className={`temperature ${color}`}>
      {t}
    </div>
  );
};

export default Temperature;