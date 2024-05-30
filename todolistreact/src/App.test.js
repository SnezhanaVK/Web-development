import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const headingElement = screen.getByText(/Список дел/i);
  expect(headingElement).toBeInTheDocument();
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
  const createButton = screen.getByText(/Создать/i);
  expect(createButton).toBeInTheDocument();
  const sortButton = screen.getByText(/Сортировать по дате/i);
  expect(sortButton).toBeInTheDocument();
  const listElement = screen.getByRole('list');
  expect(listElement).toBeEmptyDOMElement();
});

test('adds a task', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  const createButton = screen.getByText(/Создать/i);
  fireEvent.change(input, { target: { value: 'New task' } });
  fireEvent.click(createButton);
  const taskElements = screen.queryAllByRole('listitem');
  expect(taskElements.length).toBe(1);
  expect(screen.getByText('New task')).toBeInTheDocument();
});

test('renders filled list correctly', () => {
  const tasks = [
    { text: 'Task 1', date: '2023-01-01' },
    { text: 'Task 2', date: '2023-01-02' }
  ];
  jest.spyOn(React, 'useState').mockReturnValueOnce([tasks, expect.any(Function)])
    .mockReturnValueOnce(['', expect.any(Function)])
    .mockReturnValueOnce([true, expect.any(Function)]);

  render(<App />);
  const taskElements = screen.queryAllByRole('listitem');
  expect(taskElements.length).toBe(2);
  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 2')).toBeInTheDocument();
});

test('sorts tasks by date correctly', () => {
  const tasks = [
    { text: 'Task 1', date: '2023-01-02' },
    { text: 'Task 2', date: '2023-01-01' }
  ];
  jest.spyOn(React, 'useState').mockReturnValueOnce([tasks, expect.any(Function)])
    .mockReturnValueOnce(['', expect.any(Function)])
    .mockReturnValueOnce([true, expect.any(Function)]);

  render(<App />);
  const sortButton = screen.getByText(/Сортировать по дате/i);
  fireEvent.click(sortButton);
  const taskElements = screen.queryAllByRole('listitem');
  expect(taskElements.length).toBe(2);
  expect(screen.getByText('Task 2')).toBeInTheDocument();
  expect(screen.getByText('Task 1')).toBeInTheDocument();
});