import './Button.css';

import React from 'react';
import MuiButton from '@mui/material/Button';

export default function Button(props) {
    const {variant, size, onClick, text, ...other} = props;

    return (
        <MuiButton
            id={text}
            variant={variant}
            size={size}
            onClick={onClick}
            {...other}
        >
            {text}
        </MuiButton>
    )
}