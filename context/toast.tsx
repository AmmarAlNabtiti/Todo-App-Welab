'use client';

import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { Alert } from '@mui/material';

interface ToastProviderProps {
  children: React.ReactNode;
}

interface ToastContextType {
  handleOpenToast: () => void;
  setAlertType: React.Dispatch<React.SetStateAction<AlertType>>;
}

interface AlertType {
  severity: 'error' | 'warning' | 'info' | 'success';
}

export const ToastContext = React.createContext<ToastContextType>({
  handleOpenToast: () => {},
  setAlertType: () => {},
});

const ToastContextProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [alertType, setAlertType] = React.useState<AlertType>({
    severity: 'success',
  });

  const handleOpenToast = () => {
    setTimeout(() => {
      setOpen(false);
    }, 6000);
    setOpen(true);
  };

  return (
    <>
      <ToastContext.Provider value={{ handleOpenToast, setAlertType }}>
        {children}

        <Snackbar open={open} autoHideDuration={6000}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert
              severity={alertType.severity}
              variant='filled'
              sx={{
                width: '100%',
                direction: 'rtl',
                display: 'flex',
                gap: '10px',
                fontFamily: 'inherit',
              }}
            >
              {alertType.severity === 'success' && 'تم إضافة المهمة بنجاح!'}
              {alertType.severity === 'warning' && ' تم حذف المهمة بنجاح!'}
              {alertType.severity === 'info' && ' تم تعديل المهمة بنجاح!'}
              {alertType.severity === 'error' && 'عدد الحروف اقل من حرفين'}
            </Alert>
          </Stack>
        </Snackbar>
      </ToastContext.Provider>
    </>
  );
};
export default ToastContextProvider;
