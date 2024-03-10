'use client';
import { useSearchParams } from 'next/navigation';
import TodoItem from './todoItem';
import { Suspense } from 'react';
import Loader from './Loader';

interface AllTodosProps {
  todos: Itodo[];
}
const AllTodos = ({ todos }: AllTodosProps) => {
  let filterKey = useSearchParams().get('filter');

  const filteredTodos = todos.filter((todo) => {
    if (filterKey === 'completed') {
      return todo.isCompleted === true;
    } else if (filterKey === 'uncomplete') {
      return todo.isCompleted === false;
    } else {
      return true;
    }
  });

  return (
    <>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      {todos.length === 0 && (
        <h2 style={{ textAlign: 'center' }}> لم تقم باضافة اي مهام بعد</h2>
      )}
    </>
  );
};

export default AllTodos;
