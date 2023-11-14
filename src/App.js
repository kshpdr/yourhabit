import React, { useState, useEffect } from 'react';
import { Container, Button, Typography, Dialog } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddHabitForm from './components/AddHabitForm';
import HabitCard from './components/HabitCard';

function App() {
  const [open, setOpen] = useState(false);
  const [habits, setHabits] = useState([]);

  const calculateDayDifference = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    const differenceInTime = today.getTime() - start.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays;
  };

  const addHabit = (newHabit) => {
    const habitWithDays = { ...newHabit, days: 0, lastConfirmed: null };

    const updatedHabits = [...habits, habitWithDays];
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  const handleDelete = (habitToDelete) => {
    const updatedHabits = habits.filter(habit => habit !== habitToDelete);
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  const handleBreakRule = (habitToBreak) => {
    const updatedHabits = habits.map(habit => {
        if (habit === habitToBreak && habit.type === 'continuous') {
            return { ...habit, days: 0, lastConfirmed: new Date().toDateString() };
        }
        return habit;
    });

    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  const handleConfirm = (habitToConfirm) => {
    const today = new Date().toDateString();

    const updatedHabits = habits.map(habit => {
        if (habit === habitToConfirm && habit.type === 'confirmable') {
            if (habit.lastConfirmed !== today) {
                return { ...habit, days: habit.days + 1, lastConfirmed: today };
            }
        }
        return habit;
    });

    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
      const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
      setHabits(storedHabits);
  }, []);

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Your hab.it
      </Typography>
      {habits.map((habit, index) => {
          const daysDifference = habit.type === 'continuous' 
              ? calculateDayDifference(habit.lastConfirmed || new Date()) 
              : habit.days;

          return (
              <HabitCard 
                key={index} 
                habit={habit}
                days={daysDifference}
                onConfirm={handleConfirm} 
                onBreakRule={handleBreakRule} 
                onDelete={handleDelete}
              />
          );
      })}
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleOpen}
        style={{ width: '90%', margin: '20px 0', padding: '10px' }}/>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <AddHabitForm handleClose={handleClose} addHabit={addHabit} />
      </Dialog>
    </Container>
  );
}

export default App;
