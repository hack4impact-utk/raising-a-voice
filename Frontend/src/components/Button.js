import '../styles/Button.css';

import React from 'react';
import MuiButton from '@mui/material/Button';

export default function Button(props) {
    const {variant, size, color, onClick, text, ...other} = props;

    return (
        <MuiButton
            variant={variant}
            size={size}
            color={color}
            onClick={onClick}
            {...other}
        >
            {text}
        </MuiButton>
    )
}