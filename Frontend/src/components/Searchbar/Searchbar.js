import React, { useState, useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

export default function Searchbar() {
    const [personName, setPersonName] = useState("");

    const handleChange = (event) => {
        setPersonName(event.target.value)
    };
    
	return (
        <FormControl sx={{ m: 1, width: 250 }}>
            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                style={{ borderRadius: '30px' }}
            >
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
	);
};