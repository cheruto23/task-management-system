import React, { useState, useEffect } from 'react';

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
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
