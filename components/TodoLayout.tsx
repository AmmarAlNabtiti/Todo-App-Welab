'use client';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import TodoList from '../components/TodoList';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Card from '@mui/material/Card';

// TodoLayout component managing todo list layout and state
const TodoLayout = () => {
  const [todos, setTodos] = useState<Itodo[]>([]); // State for storing todos
  const [filterType, setFilterType] = useState<
    'all' | 'completed' | 'incomplete'
  >('all'); // State for filter type

  // Effect hook to load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(
      localStorage.getItem('todos') || '[]'
    ) as Itodo[]; // Retrieve todos from local storage
    setTodos(storedTodos); // Set todos state
  }, []);

  // Filter todos based on selected filter type
  const filteredTodos = todos.filter((todo) => {
    if (filterType === 'completed') {
      return todo.isCompleted; // Return completed todos
    } else if (filterType === 'incomplete') {
      return !todo.isCompleted; // Return incomplete todos
    } else {
      return true; // Return all todos
    }
  });

  return (
    <React.Fragment>
      <Container maxWidth='md'>
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            {/* Header component for filter selection */}
            <Header filterType={filterType} setFilterType={setFilterType} />
            {/* TodoList component to display filtered todos */}
            <TodoList todoList={filteredTodos} onSetTodo={setTodos} />
            {/* TodoForm component for adding new todos */}
            <TodoForm onSetTodo={setTodos} />
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default TodoLayout;
