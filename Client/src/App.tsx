import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormA, {FormData} from './components/FormA';

function App(){
const onSubmit=async ( data:FormData)=> { 
  let response = await fetch('http://localhost:3001', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
    mode:'no-cors'

  });
  console.log("Receiver data", data);
}
  return <><FormA onSubmit={onSubmit}/> </>;
}
export default App;