'use server';

import { revalidatePath } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';

// Env Var
process.env.NEXT_PUBLIC_PORT;

export async function getTodos(filter: string = 'all'): Promise<Itodo[]> {
  let filterStr: String;
  if (filter === 'completed') {
    filterStr = '/?isCompleted=1';
  } else if (filter === 'uncomplete') {
    filterStr = '/?isCompleted=1';
  } else {
    filterStr = '/';
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_PORT}/todos${filterStr}`
  );

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const todos: Itodo[] = await res.json();
  return todos;
}

export const handleAddNewTask = async (formData: FormData) => {
  const todoTitle = formData.get('title');

  if (typeof todoTitle === 'string' && todoTitle.length > 1) {
    await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_PORT}/todos`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: uuidv4(),
          task: todoTitle,
          isCompleted: false,
        }),
      }
    );
  }

  revalidatePath('/');
};

export const deleteTodo = async (todoId: string | number): Promise<void> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_PORT}/todos/${todoId}`,
    {
      method: 'DELETE',
    }
  );

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_PORT}/todos/${todoId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    }
  );

  if (!res.ok) {
    throw new Error('Failed to edit todo');
  }

  const editedTodo: Itodo = await res.json();
  revalidatePath('/');
  return editedTodo;
}
