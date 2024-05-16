import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      result: '',
      action: '+'
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  calculate = () => {
    const { number1, number2, action } = this.state;
    let result = 0;

    if (action === '+') {
      result = parseFloat(number1) + parseFloat(number2);
    } else if (action === '-') {
      result = parseFloat(number1)+ parseFloat(number2);
    } else if (action === '*') {
      result = parseFloat(number1) * parseFloat(number2);
    } else if (action === '/') {
      result = parseFloat(number1) / parseFloat(number2);
    }

    this.setState({
      result: result.toString()
    });
  }

  render() {
    return (
      <div>
        <input type="number" name="number1" onChange={this.handleChange} />
        <select name="action" onChange={this.handleChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" name="number2" onChange={this.handleChange} />
        <button onClick={this.calculate}>Calculate</button>
        <p>{this.state.number1} {this.state.action} {this.state.number2} = {this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;