'use server';

import { revalidatePath } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';

export async function getTodos(filter: string = 'all'): Promise<Itodo[]> {
  let filterStr: String;
  if (filter === 'completed') {
    filterStr = '/?isCompleted=1';
  } else if (filter === 'uncomplete') {
    filterStr = '/?isCompleted=1';
  } else {
    filterStr = '/';
  }

  const res = await fetch(`http://localhost:3000/todos${filterStr}`, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const todos: Itodo[] = await res.json();
  return todos;
}

export const handleAddNewTask = async (formData: FormData) => {
  const todoTitle = formData.get('title');

  // Check if todoTitle is a string before accessing its length
  if (typeof todoTitle === 'string' && todoTitle.length > 1) {
    await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uuidv4(), 
        task: todoTitle,
        isCompleted: false,
      }),
    });
  }

  revalidatePath('/'); // Ensure revalidatePath is defined or imported
};

export const deleteTodo = async (todoId: string | number): Promise<void> => {
  const res = await fetch(`http://localhost:3000/todos/${todoId}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Failed to delete todo');
  }
  revalidatePath('/');
};

// EDIT TODO
export async function editTodo(
  todoId: string | number,
  updatedTodo: Partial<Itodo>
): Promise<Itodo> {
  const res = await fetch(`http://localhost:3000/todos/${todoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTodo),
  });

  if (!res.ok) {
    throw new Error('Failed to edit todo');
  }

  const editedTodo: Itodo = await res.json();
  revalidatePath('/');
  return editedTodo;
}
