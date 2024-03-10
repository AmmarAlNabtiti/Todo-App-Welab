import React from 'react';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

interface ActionIconButtonProps {
  action: 'complete' | 'edit' | 'delete';
  onClick: () => void;
  isCompleted?: boolean;
}



const ActionIconButton: React.FC<ActionIconButtonProps> = ({
  action,
  onClick,
  isCompleted,
}) => {
  const renderIcon = () => {
    switch (action) {
      case 'complete':
        return <CheckIcon />;
      case 'edit':
        return <ModeEditOutlinedIcon />;
      case 'delete':
        return <DeleteOutlineOutlinedIcon />;
      default:
        return null;
    }
  };
  const style = {
    complete: {
      color: isCompleted ? '#fff' : '#8bc34a',
      backgroundColor: isCompleted ? '#8bc34a' : '#fff',
      border: '3px solid #8bc34a',
    },
    edit: {
      color: '#1769aa',
      backgroundColor: '#fff',
      border: '3px solid #1769aa',
    },
    delete: {
      color: '#b23c17',
      backgroundColor: '#fff',
      border: '3px solid #b23c17',
    },
  };
  return (
    <IconButton
      className='icon-btn'
      onClick={onClick}
      style={
        action === 'complete'
          ? style.complete
          : action === 'edit'
          ? style.edit
          : style.delete
      }
      aria-label={action}
    >
      {renderIcon()}
    </IconButton>
  );
};

export default ActionIconButton;
