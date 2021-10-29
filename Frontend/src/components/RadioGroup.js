import '../styles/RadioGroup.css';

import React from 'react';
import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioGroup(props) {
    const {label, name, value, onChange, items} = props;

    return(
        <FormControl className="box">
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup
                row
                name={name}
                value={value}
                onChange={onChange}
            >
            {
                items.map(
                    (item, index) => (
                        <FormControlLabel
                            key={item.id}
                            value={item.id}
                            control={<Radio />}
                            label={item.title}
                        />
                    )
                )
            }
            </MuiRadioGroup>
        </FormControl>
    )
}