import React from 'react';
import ColorToggleButton from './ColorToggleButton';

import Temperature from './Temperature';

const App = () => {
  return (
    <div>
     
      <ColorToggleButton/>
      <Temperature t={-30} />
      <Temperature t={10} />
    </div>
    
  );
};

export default App;
/*
 

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

const App = () => {
  return (
    <div>
      <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
    </div>
  );

};
export default App;
*/


