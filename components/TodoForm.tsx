import { v4 as uuidv4 } from 'uuid'; // Importing uuidv4 function from 'uuid' library for generating unique IDs
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

interface TodoFormProps {
  onSetTodo: any; // Prop type for onSetTodo function
}

// TodoForm component for adding new tasks
const TodoForm: React.FC<TodoFormProps> = ({ onSetTodo }) => {
  const [title, setTitle] = useState<string>(''); // State for storing input value

  // Function to handle adding a new task
  const handleAddNewTask = () => {
    if (title.trim().length > 2) {
      // Check if input value is valid
      const newTodo = { id: uuidv4(), task: title, isCompleted: false }; // Create new todo object
      // Update state with new todo
      onSetTodo((prevState: any) => {
        const updatedTodos = [...prevState, newTodo]; // Add new todo to previous state
        localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Store updated todos in local storage
        return updatedTodos; // Return updated state
      });
      setTitle(''); // Clear input field after adding todo
    }
  };

  return (
    <Grid
      style={{ marginTop: '50px', display: 'flex', alignItems: 'center' }} // Styling for grid container
      container
      spacing={2}
    >
      <Grid xs={8}>
        <TextField
          onChange={(e) => setTitle(e.target.value)} // Update input value on change
          id='outlined-basic'
          label='عنوان المهمة'
          variant='outlined' 
          style={{
            width: '100%',
            fontSize: '18px',
            fontFamily: 'inherit',
            color: 'red', 
          }}
          value={title} 
        />
      </Grid>

      <Grid xs={4}>
        <Button
          disabled={!(title.trim().length > 2)} // Disable button if input value is not valid
          onClick={handleAddNewTask} // Handle click event for adding new task
          style={{
            width: '100%',
            paddingBlock: '12px',
            fontSize: '18px',
            fontFamily: 'inherit',
          }}
          variant='contained' 
        >
          اضافة
        </Button>
      </Grid>
    </Grid>
  );
};

export default TodoForm; 
