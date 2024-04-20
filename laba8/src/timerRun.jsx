import React, { useState, useEffect } from 'react';

const TimerRun = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div>
      <h1>Time: {time}</h1>
      <button onClick={toggle}>▶</button>
    </div>
  );
};

export default TimerRun;