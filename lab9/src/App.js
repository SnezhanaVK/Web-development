
import './App.css';
import ListCity from './ListCity';
import Calculator from './Calculator';  
import CalculatorSystemNumber from './SystemNumber';
import CountSecondsSinceDate from './SecondCounter';
import NumberFilter from './NumberFilter';
import RegistrationForm from './RegistrationForm';
import ProfileForm from './ProfileForm';


function App() {
  return (
    <div className="App">
      <ListCity/>
      <Calculator/>
      <CalculatorSystemNumber/>
      <CountSecondsSinceDate/>
      <NumberFilter/>
      <RegistrationForm/>
      <ProfileForm/>
    </div>
  );
}

export default App;
