'use client';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { handleAddNewTask } from '@/lib/actions';
import { useContext, useRef } from 'react';
import { ToastContext } from '@/context/toast';

// TodoForm component for adding new tasks
const TodoForm = () => {
  const fromEl = useRef<HTMLFormElement>(null);
  const { handleOpenToast, setAlertType } = useContext(ToastContext);
  return (
    <form
      ref={fromEl}
      action={async (formData) => {
        fromEl.current?.reset();
        await handleAddNewTask(formData);
        setAlertType({ severity: 'success' });
        formData.get('title') && handleOpenToast();
      }}
    >
      <Grid
        style={{ marginTop: '50px', display: 'flex', alignItems: 'center' }}
        container
        spacing={2}
      >
        <Grid xs={8}>
          <TextField
            id='outlined-basic'
            label='عنوان المهمة'
            name='title'
            variant='outlined'
            style={{
              width: '100%',
              fontSize: '18px',
              fontFamily: 'inherit',
              color: 'red',
            }}
          />
        </Grid>

        <Grid xs={4}>
          <Button
            type='submit'
            style={{
              width: '100%',
              paddingBlock: '12px',
              fontSize: '18px',
              fontFamily: 'inherit',
            }}
            variant='contained'
          >
            إضافة المهمة
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TodoForm;
