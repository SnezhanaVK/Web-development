import React, { useState, useEffect } from 'react';

const CountSecondsSinceDate = () => {
  const [secondsPassed, setSecondsPassed] = useState(0);
  const [userDate, setUserDate] = useState(null);

  const handleInputChange = (event) => {
    setUserDate(new Date(event.target.value));
  };

  useEffect(() => {
    let intervalId;

    if (userDate) {
      const currentDate = new Date();
      const timeDifference = currentDate - userDate;
      const secondsDifference = Math.floor(timeDifference / 1000);

      setSecondsPassed(secondsDifference);

      intervalId = setInterval(() => {
        setSecondsPassed((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [userDate]);

  return (
    <div>
      <label>
        Введите дату:
        <input type="date" onChange={handleInputChange} />
      </label>
      {userDate && (
        <p>С момента введенной даты прошло {secondsPassed} секунд.</p>
      )}
    </div>
  );
};

export default CountSecondsSinceDate;