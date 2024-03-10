import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog
      style={{ direction: 'rtl' }}
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        هل أنت متأكد من رغبتك في حذف المهمة؟
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          لا يمكنك التراجع عن الحذف بعد اكتماله.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} autoFocus>
          نعم، قم بالحذف
        </Button>
        <Button onClick={onClose}>إلغاء</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
