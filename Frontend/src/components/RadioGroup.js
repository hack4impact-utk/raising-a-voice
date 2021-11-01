import '../styles/RadioGroup.css';

import React, {useState, useEffect} from 'react';
import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioGroup(props) {
    const {label, name, value, onChange, items} = props;

    function getWindowWidth() {
        return window.innerWidth;
    }
      
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());
    
    useEffect(() => {
        function handleResize() {
            setWindowWidth(getWindowWidth());
    }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <FormControl className="box">
            <FormLabel component="legend">{label}</FormLabel>
            <MuiRadioGroup
                row={windowWidth > 500 ? true : false}
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
                            control={<Radio id="test"/>}
                            label={item.title}
                        /> 
                    )
                )
            }
            </MuiRadioGroup>
        </FormControl>
    )
}