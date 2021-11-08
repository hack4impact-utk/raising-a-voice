import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'
import { Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent } from '@syncfusion/ej2-react-schedule'
import Calendar from 'react-calendar'
import '../styles/Calendar.css'
import Searchbar from '../components/Searchbar/Searchbar';

const CalendarPage = () => {
  return (
    <div className='calendar-container' style={{ marginLeft: 64 }}>
      {/* <ScheduleComponent currentView='Month'>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent> */}
      <div className='search-bar' style={{ marginBottom: 64 }}>
        <Searchbar />
      </div>
      <Grid container spacing={2}>
        <Grid
          item xs={6}
          md={8}
          direction="column"
          alignItems="flex-end"
        >
          Test
        </Grid>
        <Grid item xs={6} md={8}>
          <Calendar />
        </Grid>
      </Grid>
    </div>
  );
}
export default CalendarPage;