import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'
import { Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent } from '@syncfusion/ej2-react-schedule'
import Calendar from 'react-calendar'
import '../styles/Calendar.css'
import Searchbar from '../components/Searchbar/Searchbar';

const tasks = [
  "Test 1",
  "Test 2",
  "Test 3",
  "Test 4",
  "Test 5",
  "Test 6",
  "Test 7",
  "Test 8"
]

const CalendarPage = () => {
  return (
    <div className='calendar-container' style={{ marginLeft: 64 }}>
      {/* <ScheduleComponent currentView='Month'>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent> */}
      {/* <div className='search-bar' style={{ marginBottom: 64 }}>
        <Searchbar />
      </div> */}
      <Grid container spacing={2}>
        <Grid item xs={6} md={4} style={{ marginLeft: '40px', marginTop: '10%' }}>
          <Calendar />
          <h1 id="ongoing-tasks-title">Ongoing Tasks</h1>
          <div className='ongoing-tasks'>
            {tasks.map((name) => {
              return (
                <h2 className='task'>{name}</h2>
              )
            })}
          </div>
        </Grid>
        <Grid item xs={6} md={7} style={{ marginTop: '10%' }}>
          <div className='scheduler-options'>
            <h1 id="h1-tmp">Oct 09-15</h1>
          </div>
          <ScheduleComponent cssClass='sheduler-component' currentView='Month' style={{ borderRadius: '25px' }}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </Grid>
      </Grid>
    </div>
  );
}
export default CalendarPage;