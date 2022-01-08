import './PhoneNumber.css';

import React from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';

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