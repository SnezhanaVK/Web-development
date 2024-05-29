import React, { useState } from 'react';
import './index.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() === '') {
      alert('Введите текст задачи!');
      return;
    }
    const newTask = {
      id: Date.now(),
      text: taskText,
      date: new Date().toLocaleDateString()
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const sortByDate = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.date.localeCompare(b.date));
    setTasks(sortedTasks);
  };

  return (
    <div>
      <input
        id="str"
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      />
      <button onClick={addTask}>Добавить задачу</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <label>
              <input type="checkbox" className="Checkbox" />
              <span className="text">{task.text}</span>
              <input
                className="styled"
                type="button"
                value="X"
                onClick={() => deleteTask(task.id)}
              />
              <br />
              <span className="data">{task.date}</span>
              <br />
            </label>
          </li>
        ))}
      </ul>
      <button onClick={sortByDate}>Сортировать по дате</button>
    </div>
  );
};

export default TaskList;