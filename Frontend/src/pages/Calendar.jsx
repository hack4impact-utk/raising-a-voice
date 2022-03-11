import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [cal_data, setCal_data] = useState([{}])

  useEffect(async () => {
    let raw_data = await axios.get('https://raising-a-voice.vercel.app/api/calendar/Mar/2022')
    let { data } = raw_data
    for (let i = 0 ; i < data.length; i++) {

      for (let j = 0; j < data[i][0].profile.length; j++) {
        let obj = data[i][0].profile[j]
        let current_date = data[i][0].date
     
        console.log(current_date)
        let start_time = new Date(2022, 3, 3, 10, 0)
        start_time.setMonth(start_time.getMonth() - 1)
        let end_time = new Date(2022, 3, 3, 12, 30)
        end_time.setMonth(end_time.getMonth() - 1)
        console.log(start_time, end_time)
        obj['StartTime'] = start_time
        obj['EndTime'] = end_time
        console.log(obj)
        setCal_data(obj)
      }
    }
    
  }, [])

  const test = [{
    Id: 2,
    Subject: 'Meeting',
    StartTime: new Date(2022, 2, 3, 10, 0),
    EndTime: new Date(2022, 2, 3, 12, 30),
    IsAllDay: false,
    Status: 'Completed',
    Priority: 'High'
  }];
  return (
    <div className='calendar-container' style={{ marginLeft: 64 }}>
      {/* <ScheduleComponent currentView='Month'>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent> */}
      {/* <div className='search-bar' style={{ marginBottom: 64 }}>
        <Searchbar />
      </div> */}
      <Grid container spacing={8}>
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
          {/* <ScheduleComponent cssClass='sheduler-component'  style={{ borderRadius: '25px' }}  eventSettings={{ dataSource: test,
            fields: {
                id: 'Id',
                subject: { name: 'Subject' },
                isAllDay: { name: 'IsAllDay' },
                startTime: { name: 'StartTime' },
                endTime: { name: 'EndTime' }
            }
            }}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent> */}

          <ScheduleComponent height='550px'  selectedDate={new Date(2022, 2, 3)} eventSettings={{ dataSource: test }}>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
        </Grid>
      </Grid>
    </div>
  );
}
export default CalendarPage;