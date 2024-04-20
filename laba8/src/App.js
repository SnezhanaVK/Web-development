import React from 'react';
import Timer from './timer';
import TimerRun from './timerRun';
import PrimeNumbers from './primeNumber';
import Revert from './revert';


const App = () => {
  return (
    <div>
     
     <Timer /> {}
      <TimerRun />
     
      <PrimeNumbers />
      <Revert s="привет!" />
    </div>
    
  );
};

export default App;


