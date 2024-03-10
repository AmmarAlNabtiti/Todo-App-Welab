import React from 'react';
import { getTodos } from '@/lib/actions';
import AllTodos from './AllTodos';

const TodoList = async () => {
  let todos = await getTodos('all');

  return (
    <>
      <section
        style={{
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <AllTodos todos={todos} />
      </section>
    </>
  );
};

export default TodoList;
