import TextField from '@mui/material/TextField';
import React from 'react';

import './MultilineInput.css';


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
            multiline
            rows={rows}
            autoComplete="none"
            size="large"
        />
    )
}