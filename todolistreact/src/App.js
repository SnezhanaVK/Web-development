import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [sortAscending, setSortAscending] = useState(true);

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, date: new Date().toLocaleDateString() }]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  const sortTasksByDate = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (sortAscending) {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setTasks(sortedTasks);
    setSortAscending(!sortAscending);
  };

  return (
    <div className="App">
      <h1>Список дел</h1>
      <div className="center">
        <input
          className="v"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Создать</button>
        <button onClick={sortTasksByDate}>Сортировать по дате</button>
        <ul id="taskList">
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              index={index}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;