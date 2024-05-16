import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';

const CalculatorSystemNumber = () => {
  const [inputValue, setInputValue] = useState('');
  const [system, setSystem] = useState('10');
  const [outputValue, setOutputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSystemChange = (e) => {
    setSystem(e.target.value);
  };

  const handleCalculate = () => {
    let result = parseInt(inputValue, system);
    setOutputValue(result.toString());
  };

  return (
    <div>
      <h1>Калькулятор систем счисления</h1>
      <div>
        <label>Исходное число:</label>
        <NumericFormat value={inputValue} onChange={handleChange} />
      </div>
      <div>
        <label>Систечисления:</label>
        <select value={system} onChange={handleSystemChange}>
          <option value="10">10-чная</option>
          <option value="2">2-чная</option>
          {/* другие системы счисления */}
        </select>
      </div>
      <button onClick={handleCalculate}>Посчитать</button>
      <div>
        <label>Результат:</label>
        <NumericFormat value={outputValue} displayType={'text'} />
      </div>
    </div>
  );
};

export default CalculatorSystemNumber;