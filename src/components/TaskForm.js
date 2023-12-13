// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: '', description: '', dueDate: '' });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
        <div className="mb-3">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            type="text"
            placeholder="Task title"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Task description"
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="dueDate">
            Due Date
          </label>
          <input
            className="form-control"
            id="dueDate"
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
