import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

export default function HabitCard({ habit, days, onConfirm, onBreakRule, onDelete }) {
    const { name, emoji, type } = habit;

    return (
        <Card variant="outlined" style={{ margin: '20px 0', border: 'none', boxShadow: 'none' }}>
            <CardContent>
                <Typography variant="h5" component="h2" style={{ fontSize: '8rem' }}>
                    {days}
                </Typography>
                <Typography color="textSecondary" style={{ fontSize: '2rem' }}>
                    days of {name.toLowerCase()} {emoji}
                </Typography>
                {type === 'continuous' ? (
                    <Button 
                    variant="secondary" 
                    style={{ color: "red" }}
                    onClick={() => onBreakRule(habit)}
                    >
                        Broke the Habit
                    </Button>
                ) : (
                    <Button 
                        variant="secondary" 
                        style={{ 
                            color: habit.lastConfirmed === new Date().toDateString() ? "grey" : "green",
                            backgroundColor: habit.lastConfirmed === new Date().toDateString() ? "#e0e0e0" : "", // Optional: change background color if needed
                        }}
                        onClick={() => onConfirm(habit)}
                        disabled={habit.lastConfirmed === new Date().toDateString()}
                    >
                        Confirm today
                    </Button>
                )}
                <Button 
                    variant="secondary" 
                    style={{ color: "red" }}
                    onClick={() => onDelete(habit)}
                >
                    Delete habit
                </Button>
            </CardContent>
        </Card>
    );
}
