import MuiButton from '@mui/material/Button';
import React from 'react';

import './Button.css';

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