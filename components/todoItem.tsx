import React, { useState, useContext } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { deleteTodo, editTodo } from '@/lib/actions';
import DeleteDialog from './DeleteDialog';
import EditDialog from './EditDialog';
import ActionIconButton from './ActionIconButton';
import { ToastContext } from '@/context/toast';

export interface TodoItemProps {
  todo: Itodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);
  const [editedDetails, setEditedDetails] = useState(todo.details);
  const { handleOpenToast, setAlertType } = useContext(ToastContext);


  const handleConfirmDelete = async () => {
    try {
      await deleteTodo(todo.id);
      setOpenDeleteDialog(false);
      setAlertType({ severity: 'warning' });
      handleOpenToast();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleConfirmEdit = async () => {
    await editTodo(todo.id, { task: editedTask, details: editedDetails });
    setOpenEditDialog(false);
    setAlertType({ severity: 'info' });
    handleOpenToast();
  };

  const toggleCompletion = async () => {
    await editTodo(todo.id, { isCompleted: !todo.isCompleted });
  };

  return (
    <>
      <Card
        className='todo-item'
        sx={{ minWidth: 275, backgroundColor: '#283593', color: '#fff' }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography
                sx={{
                  textAlign: 'right',
                  fontFamily: 'inherit',
                  textDecoration: todo.isCompleted ? 'line-through' : 'none',
                }}
                variant='h5'
              >
                {todo.task}
              </Typography>
              <Typography
                sx={{
                  textAlign: 'right',
                  color: '#bbb',
                  fontFamily: 'inherit',
                  textDecoration: todo.isCompleted ? 'line-through' : 'none',
                }}
                variant='h6'
              >
                {todo.details}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              display='flex'
              justifyContent='space-around'
              alignItems='center'
            >
              <ActionIconButton
                action='complete'
                onClick={toggleCompletion}
                isCompleted={todo.isCompleted}
              />
              <ActionIconButton
                action='edit'
                onClick={() => setOpenEditDialog(true)}
              />
              <ActionIconButton
                action='delete'
                onClick={() => setOpenDeleteDialog(true)}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Delete MODEL COMP */}
      <DeleteDialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
      />
      {/* EDIT MODEL COMP */}
      <EditDialog
        open={openEditDialog}
        onClose={() => setOpenEditDialog(false)}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
        editedDetails={editedDetails}
        setEditedDetails={setEditedDetails}
        onConfirm={handleConfirmEdit}
      />
    </>
  );
};

export default TodoItem;
