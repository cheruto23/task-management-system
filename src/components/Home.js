import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    
    fetch('api')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));

    
    const sampleTasks = [
      { id: 1, title: 'Task 1', description: 'Description 1', dueDate: '2023-12-31' },
      { id: 2, title: 'Task 2', description: 'Description 2', dueDate: '2023-12-19' },
    ];

    setTasks(sampleTasks);
  }, []); 

  return (
    <div>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>
              <Button variant="success">Edit</Button>{' '}
              <Button variant="danger">Delete</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
