import TextField from '@mui/material/TextField';
import React from 'react';

import './Input.css';

export default function Input(props) {
    const {label, name, value, onChange, rows} = props;

    return (
        <TextField
            className="text-field"
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete="none"
            size="large"
        />
    )
}