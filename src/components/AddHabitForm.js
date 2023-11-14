import React, { useState } from 'react';
import { DialogContent, DialogTitle, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function AddHabitForm({ handleClose, addHabit }) {
    const [selectedEmoji, setSelectedEmoji] = useState('🙂');
    const [habitName, setHabitName] = useState('');
    const [habitType, setHabitType] = useState('continuous');

    const handleEmojiChange = (event) => {
        setSelectedEmoji(event.target.value);
    };

    const handleNameChange = (event) => {
        setHabitName(event.target.value);
    };

    const handleTypeChange = (event) => {
        setHabitType(event.target.value);
    };

    const handleSubmit = () => {
        addHabit({ emoji: selectedEmoji, name: habitName, type: habitType });
        handleClose();
    };

    return (
        <>
            <DialogTitle>Add New Habit</DialogTitle>
            <DialogContent>
                <TextField
                    label="Emoji"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={selectedEmoji}
                    onChange={handleEmojiChange}
                    inputProps={{ style: { textAlign: 'center', fontSize: '80px' } }}
                    InputProps={{
                        style: {
                            borderRadius: '50%',
                            width: '200px',
                            height: '200px',
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    }}
                />
                <TextField
                    label="Habit Name"
                    placeholder="e.g., Not Smoking, Going to the Gym"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={habitName}
                    onChange={handleNameChange}
                />

                    <FormControl fullWidth margin="normal">
                    <InputLabel id="habit-type-label">Habit Type</InputLabel>
                    <Select
                        labelId="habit-type-label"
                        value={habitType}
                        label="Habit Type"
                        onChange={handleTypeChange}
                    >
                        <MenuItem value="continuous">Continuous</MenuItem>
                        <MenuItem value="confirmable">Confirmable</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
                    Submit
                </Button>
            </DialogContent>
        </>
    );
}
