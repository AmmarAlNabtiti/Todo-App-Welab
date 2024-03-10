// import { revalidatePath } from 'next/cache';

// // GET TODOS
// export async function getTodos(): Promise<Itodo[]> {
//   const res = await fetch('http://localhost:3000/todos', { cache: 'no-cache' });

//   if (!res.ok) {
//     throw new Error('Something went wrong!');
//   }

//   const todos: Itodo[] = await res.json();
//   return todos;
// }

// // DELETE TODO
// export async function deleteTodo(todoId: string | number): Promise<void> {
//   const res = await fetch(`http://localhost:3000/todos/${todoId}`, {
//     method: 'DELETE',
//   });

//   if (!res.ok) {
//     throw new Error('Failed to delete todo');
//   }
// }

// // POST TODO
// export async function addTodo(newTodo: Itodo): Promise<Itodo> {
//   const res = await fetch('http://localhost:3000/todos', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newTodo),
//   });

//   if (!res.ok) {
//     throw new Error('Failed to add todo');
//   }

//   const addedTodo: Itodo = await res.json();
//   return addedTodo;
// }

// // EDIT TODO
// export async function editTodo(
//   todoId: string | number,
//   updatedTodo: Itodo['task'] | Itodo['details'] | Itodo['isCompleted']
// ): Promise<Itodo> {
//   const res = await fetch(`http://localhost:3000/todos/${todoId}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedTodo),
//   });

//   if (!res.ok) {
//     throw new Error('Failed to edit todo');
//   }

//   const editedTodo: Itodo = await res.json();
//   return editedTodo;
// }
