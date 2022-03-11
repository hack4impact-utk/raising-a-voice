import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'
import { Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent } from '@syncfusion/ej2-react-schedule'
import Calendar from 'react-calendar'
import '../styles/Calendar.css'
import Searchbar from '../components/Searchbar/Searchbar';
import axios from 'axios'

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
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CalendarPage = () => {
  const [cal_data, setCal_data] = useState([{}])
  const [month, setMonth] = useState('')
  useEffect(() => {
    async function fetchData() {
      let raw_data = await axios.get('https://raising-a-voice.vercel.app/api/calendar/Mar/2022')
      let { data } = raw_data

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i][0].profile.length; j++) {
          let obj = data[i][0].profile[j]
          let date = data[i][0].date

          let startTime = new Date(date)
          let endTime = new Date(date)

          startTime.setHours(10, 0, 0)
          endTime.setHours(12, 30, 0)
//          startTime: 10:00
//          endTime: 12:30

          obj['StartTime'] = startTime
          obj['EndTime'] = endTime

          obj['Subject'] = `Appointment for ${obj['name']} created by ${obj['author']}`


          delete obj['time']
          delete obj['duration']
          delete obj['author']
          delete obj['name']

          setCal_data(prev => [...prev, obj])
        }
      }
    }
    fetchData()
    
  }, [])

  return (
    <div className='calendar-container' style={{ marginLeft: 64 }}>
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
          {console.log(cal_data)}
           <ScheduleComponent height='550px' currentView = 'Month' eventSettings={{ dataSource: cal_data,
            fields: {
                subject: {name: 'Subject'},
                startTime: { name: 'StartTime' },
                endTime: { name: 'EndTime' }
            }
        }}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>;
        </Grid>
      </Grid>
    </div>
  );
}
export default CalendarPage;