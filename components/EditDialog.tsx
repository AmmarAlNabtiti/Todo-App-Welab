import React from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';

interface EditDialogProps {
  open: boolean;
  onClose: () => void;
  editedTask: string;
  setEditedTask: React.Dispatch<React.SetStateAction<string>>;
  editedDetails: string | undefined;
  setEditedDetails: React.Dispatch<React.SetStateAction<string | undefined>>;
  onConfirm: () => void;
}

const EditDialog: React.FC<EditDialogProps> = ({
  open,
  onClose,
  editedTask,
  setEditedTask,
  editedDetails,
  setEditedDetails,
  onConfirm,
}) => {

  return (
    <Dialog
      style={{ direction: 'rtl' }}
      open={open}
      onClose={onClose}
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
        <Button onClick={onConfirm} autoFocus>
          حفظ التعديلات
        </Button>
        <Button onClick={onClose}>إلغاء</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
