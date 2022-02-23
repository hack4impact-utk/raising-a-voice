import './Event.css';

import React from 'react';

export default function Input(props) {
    const {title, person, date, time, notes, createdBy, createdDate} = props;

    return (
        <>
        {// create and return event object with props passed in
}
        <div className="container">
            <div className='title'>
                {title}
            </div>
            <div className="personField">
                with <span className="personName">{person}</span>
            </div>
            <div className="dateField">
                <strong>Date</strong> <span className="date">{date}</span>
            </div>
            <div className="timeField">
                <strong>Time</strong> <span className="time">{time}</span>
            </div>
            <div className="notesField">
                <em>Notes</em> 
                <div className="notes">{notes}</div>
            </div>
            <div className="createdBy">
                Created By {createdBy} on {createdDate}
            </div>
        </div>
        </>
    )
}