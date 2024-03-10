import React from 'react';

import Header from '../components/Header';
import TodoList from '../components/TodoList';
import TodoFormLayout from '../components/TodoFromLayout';

import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import ToastContextProvider from '@/context/toast';

// TodoLayout component managing todo list layout and state
const TodoLayout = () => {
  return (
    <React.Fragment>
      <Container maxWidth='md'>
        <Card sx={{ minWidth: 200 }}>
          <ToastContextProvider>
            <CardContent>
              {/* Header component for filter selection */}
              <Header />
              {/* TodoList component to display filtered todos */}
              <TodoList />
              {/* TodoForm component for adding new todos */}
              <TodoFormLayout />
            </CardContent>
          </ToastContextProvider>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default TodoLayout;
