import React from 'react';

class ListCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: 'Рио-де-Жанейро'
    };
  }

  handleChange = (event) => {
    this.setState({ selectedCity: event.target.value });
  }

  render() {
    return (
      <div>
        <select value={this.state.selectedCity} onChange={this.handleChange}>
          <option value="Рио-де-Жанейро">Рио-де-Жанейро</option>
          <option value="Москва">Москва</option>
          <option value="Лондон">Лондон</option>
          <option value="Нью-Йорк">Нью-Йорк</option>
        </select>
        {this.state.selectedCity !== 'Рио-де-Жанейро' && (
          <p>Нет, это не Рио-де-Жанейро!</p>
        )}
      </div>
    );
  }
}

export default ListCity;