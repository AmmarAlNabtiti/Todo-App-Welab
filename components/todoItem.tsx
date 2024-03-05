import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
interface TodoProps {
  todo: Itodo;
  handleCompleteTask: any;
  handleDeleteTask: any;
  handleEditTask: any;
}

// TodoItem component representing a single todo item
const TodoItem: React.FC<TodoProps> = ({
  todo,
  handleCompleteTask,
  handleDeleteTask,
  handleEditTask,
}) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // State for delete confirmation dialog
  const [openEditDialog, setOpenEditDialog] = useState(false); // State for edit dialog
  const [editedTask, setEditedTask] = useState(todo.task); // State for edited task
  const [editedDetails, setEditedDetails] = useState(todo.details); // State for edited details

  // Function to open delete confirmation dialog
  const handleDeleteOpen = () => setOpenDeleteDialog(true);

  // Function to close delete confirmation dialog
  const handleDeleteClose = () => setOpenDeleteDialog(false);

  // Function to confirm delete action
  const handleConfirmDelete = () => handleDeleteTask(todo.id);

  // Function to open edit dialog and initialize edited task and details
  const handleEditOpen = () => {
    setEditedTask(todo.task);
    setEditedDetails(todo.details);
    setOpenEditDialog(true);
  };

  // Function to close edit dialog
  const handleEditClose = () => setOpenEditDialog(false);

  // Function to confirm edit action
  const handleConfirmEdit = () => {
    handleEditTask(todo.id, editedTask, editedDetails);
    setOpenEditDialog(false);
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
                  textDecoration: todo.isCompleted ? 'line-through' : 'none', // Apply line-through style if the task is completed
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
                  textDecoration: todo.isCompleted ? 'line-through' : 'none', // Apply line-through style if the task is completed
                }}
                variant='h6'
              >
                {todo.details}
              </Typography>
            </Grid>
            <Grid
              display='flex'
              justifyContent='space-around'
              alignItems='center'
              item
              xs={4}
            >
              <IconButton
                onClick={() => handleCompleteTask(todo.id)}
                className='icon-btn'
                style={{
                  color: todo.isCompleted ? '#fff' : '#8bc34a',
                  backgroundColor: todo.isCompleted ? '#8bc34a' : '#fff',
                  border: '3px solid #8bc34a',
                }}
                aria-label='check'
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                className='icon-btn'
                onClick={handleEditOpen}
                style={{
                  color: '#1769aa',
                  backgroundColor: '#fff',
                  border: '3px solid #1769aa',
                }}
                aria-label='edit'
              >
                <ModeEditOutlinedIcon />
              </IconButton>
              <IconButton
                className='icon-btn'
                onClick={handleDeleteOpen}
                style={{
                  color: '#b23c17',
                  backgroundColor: '#fff',
                  border: '3px solid #b23c17',
                }}
                aria-label='delete'
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Delete confirmation dialog */}
      <Dialog
        style={{ direction: 'rtl' }}
        open={openDeleteDialog}
        onClose={handleDeleteClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle style={{ fontFamily: 'inherit' }} id='alert-dialog-title'>
          هل أنت متأكد من رغبتك في حذف المهمة؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{ fontFamily: 'inherit' }}
            id='alert-dialog-description'
          >
            لا يمكنك التراجع عن الحذف بعد اكتماله.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ fontFamily: 'inherit' }}
            onClick={handleConfirmDelete}
            autoFocus
          >
            نعم، قم بالحذف
          </Button>
          <Button style={{ fontFamily: 'inherit' }} onClick={handleDeleteClose}>
            إلغاء
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit dialog */}
      <Dialog
        style={{ direction: 'rtl' }}
        open={openEditDialog}
        onClose={handleEditClose}
        aria-labelledby='edit-dialog-title'
      >
        <DialogTitle id='edit-dialog-title'>تعديل المهمة</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='task'
            label='تعديل المهمة'
            type='text'
            fullWidth
            variant='standard'
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <TextField
            margin='dense'
            id='details'
            label='تعديل التفاصيل'
            type='text'
            fullWidth
            variant='standard'
            value={editedDetails}
            onChange={(e) => setEditedDetails(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{ fontFamily: 'inherit' }}
            onClick={handleConfirmEdit}
            autoFocus
          >
            حفظ التعديلات
          </Button>
          <Button style={{ fontFamily: 'inherit' }} onClick={handleEditClose}>
            إلغاء
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TodoItem;
