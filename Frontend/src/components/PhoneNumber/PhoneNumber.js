import MuiPhoneNumber from 'material-ui-phone-number';
import React from 'react';

import './PhoneNumber.css';

export default function DatePicker(props) {
    const {name, label, value, onChange} = props;

    const convertToDefaultEventParameter = (name, value) => ({
        target: {
            name, value
        }
    });

    return (
        <MuiPhoneNumber
            className="phone-number"
            label={label}
            name={name}
            value={value}
            onChange={cellNumber => onChange(convertToDefaultEventParameter(name, cellNumber))}
            defaultCountry={'us'}
            variant="outlined"
        />
    )
}