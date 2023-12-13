import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Home from './components/Home';
import TaskForm from './components/TaskForm';

function HomePage() {
  return <Home />;
}

function AddTask() {
  return <TaskForm />;
}

function App() {
  return (
    <Router>
      <Container>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/home">Task Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/addTask">Add Task</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/addTask" element={<AddTask />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
