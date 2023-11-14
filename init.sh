#!/bin/bash

# Define directory variables
SRC_DIR="src"
COMPONENTS_DIR="${SRC_DIR}/components"
UTILITY_DIR="${SRC_DIR}/utility"

# Create directories if they don't exist
mkdir -p $COMPONENTS_DIR
mkdir -p $UTILITY_DIR

# Create component files with basic structure
echo "import React from 'react';

export default function HabitTrackerScreen() {
    return (
        <div>
            {/* Components go here */}
        </div>
    );
}" > $COMPONENTS_DIR/HabitTrackerScreen.js

echo "import React from 'react';

export default function HabitCard() {
    return (
        <div>
            {/* Habit card details */}
        </div>
    );
}" > $COMPONENTS_DIR/HabitCard.js

echo "import React from 'react';

export default function AddHabitForm() {
    return (
        <form>
            {/* Form elements go here */}
        </form>
    );
}" > $COMPONENTS_DIR/AddHabitForm.js

echo "import React from 'react';

export const Button = ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
);" > $UTILITY_DIR/Button.js

echo "import React from 'react';

export const Input = ({ type, value, onChange }) => (
    <input type={type} value={value} onChange={onChange} />
);" > $UTILITY_DIR/Input.js

echo "import React from 'react';

export const Select = ({ options, value, onChange }) => (
    <select value={value} onChange={onChange}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
);" > $UTILITY_DIR/Select.js

# Inform user of completion
echo "Component files have been initialized."
