import './Button.css';

import React from 'react';
import MuiButton from '@mui/material/Button';

export default function Button(props) {
    const {variant, size, color, onClick, text, ...other} = props;

    return (
        <MuiButton
            id={text}
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