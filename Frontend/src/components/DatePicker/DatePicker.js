import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import React from 'react';

import './DatePicker.css';

export default function DatePicker(props) {
    const {name, label, value, onChange} = props;

    const convertToDefaultEventParameter = (name, value) => ({
        target: {
            name, value
        }
    });

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label={label}
                format="mm/dd/yyyy"
                name={name}
                value={value}
                onChange={date => onChange(convertToDefaultEventParameter(name, date))}
                renderInput={(params) => <TextField className="date-picker" {...params} />}
            />
        </LocalizationProvider>
    )
}