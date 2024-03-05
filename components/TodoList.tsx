import React from 'react';
import TodoItem from './todoItem';

interface TodoListProps {
  todoList: Itodo[];
  onSetTodo: any;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, onSetTodo }) => {
  // Check task as completed
  const completeTask = (id: any) => {
    let newTodoList = todoList.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(newTodoList));
    onSetTodo([...newTodoList]);
  };

  // Delete task from task list
  const deleteTask = (id: any) => {
    let newTodoList = todoList.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(newTodoList));
    onSetTodo([...newTodoList]);
  };

  // Update task
  const editTask = (id: any, newTask: string, newDetails: string) => {
    let newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.task = newTask;
        todo.details = newDetails;
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(newTodoList));
    onSetTodo([...newTodoList]);
  };

  return (
    <section
      style={{
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCompleteTask={completeTask}
          handleDeleteTask={deleteTask}
          handleEditTask={editTask}
        />
      ))}

      {todoList.length === 0 && (
        <h2 style={{ textAlign: 'center' }}>لم تقم باضافة اي مهمة جديدة بعد</h2>
      )}
    </section>
  );
};

export default TodoList;
