import React, { useState, useEffect } from 'react';

const PrimeNumbers = () => {
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(2);

  const isPrime = (num) => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPrime(currentNumber)) {
        setPrimeNumbers([...primeNumbers, currentNumber]);
      }
      setCurrentNumber(currentNumber + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentNumber, primeNumbers]);

  return (
    <div>
      <h1>Prime Numbers: {primeNumbers.join(', ')}</h1>
    </div>
  );
};
export default PrimeNumbers;