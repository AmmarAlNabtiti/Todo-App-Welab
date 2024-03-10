import React, { Suspense } from 'react';
import { getTodos } from '@/lib/actions';
import AllTodos from './AllTodos';

const TodoList = async () => {
  let todos = await getTodos('all');

  return (
    <section
      style={{
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Suspense fallback={<h1>Loading...</h1>}>
        <AllTodos todos={todos} />
      </Suspense>
    </section>
  );
};

export default TodoList;
