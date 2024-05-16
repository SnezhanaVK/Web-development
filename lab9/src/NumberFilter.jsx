import React, { useState, useEffect } from 'react';

const NumberFilter = () => {
  const [numbers, setNumbers] = useState([]);
  const [filter, setFilter] = useState('all');
  const [input, setInput] = useState('');

  const addNumber = () => {
    const newNumbers = input.split(',').map(num => parseInt(num.trim()));
    setNumbers([...numbers, ...newNumbers]);
    setInput('');
  };

  useEffect(() => {
    if (filter === 'even') {
      setNumbers(numbers.filter(num => num % 2 === 0));
    } else if (filter === 'odd') {
      setNumbers(numbers.filter(num => num % 2 !== 0));
    } else {
      setNumbers(numbers);
    }
  }, [filter, numbers]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Введите числа через запятую"
      />
      <button onClick={addNumber}>[+]</button>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="all">Все</option>
        <option value="even">Четные</option>
        <option value="odd">Нечетные</option>
      </select>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberFilter;