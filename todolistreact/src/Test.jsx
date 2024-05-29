import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Your Title/i); // Замените "Your Title" на реальный текст заголовка
    expect(titleElement).toBeInTheDocument();
  });

  test('renders correct number of buttons', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(3); // Проверяем количество кнопок, если их 3
  });

  test('renders input fields', () => {
    render(<App />);
    const inputFields = screen.getAllByRole('textbox');
    expect(inputFields.length).toBe(1); // Проверяем количество полей ввода
  });

  test('renders placeholder for empty task list', () => {
    render(<App />);
    const placeholderElement = screen.getByText(/No tasks yet/i); // Замените "No tasks yet" на реальный текст заглушки
    expect(placeholderElement).toBeInTheDocument();
  });
});