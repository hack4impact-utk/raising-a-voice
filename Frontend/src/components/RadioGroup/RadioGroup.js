import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import React, {useState, useEffect} from 'react';

import './RadioGroup.css';

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
        <FormControl>
            <FormLabel className="legend" component="legend">{label}</FormLabel>
            <MuiRadioGroup
                className="radio-group"
                column={true}
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