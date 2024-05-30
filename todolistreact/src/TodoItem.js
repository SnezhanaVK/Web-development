import React, { useState } from 'react';

function TodoItem({ task, index, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(index, editedText);
    setIsEditing(false);
  };

  return (
    <li>
      <div className="container">
        <input type="checkbox" className="Checkbox" />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <label className="text">{task.text}</label>
        )}
        <input
          className="styled"
          type="button"
          value="X"
          onClick={() => deleteTask(index)}
        />
        {isEditing ? (
          <input
            className="styled"
            type="button"
            value="Save"
            onClick={handleSave}
          />
        ) : (
          <input
            className="edit-button"
            type="button"
            value="Edit"
            onClick={handleEdit}
          />
        )}
        <br />
        <label className="data"><sub>{task.date}</sub></label>
      </div>
    </li>
  );
}

export default TodoItem;