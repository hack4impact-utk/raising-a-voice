import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Grid from '@mui/material/Grid'
import { ScheduleComponent, Inject, Month, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule'
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
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CalendarPage = () => {
  const [cal_data, setCal_data] = useState([{}])
  const [month_offset, setMonth_offset] = useState(0)
  useEffect(() => {
    async function fetchData() {
      let curr_date = new Date()
      let cal_month = months[(curr_date.getMonth() + month_offset) % 12]
      let raw_data = await axios.get(`https://raising-a-voice.vercel.app/api/calendar/${cal_month}/2022`)
      let { data } = raw_data

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i][0].profile.length; j++) {
          let obj = data[i][0].profile[j]
          
          if (data[i][0].date == null) continue
          let date = data[i][0].date
          
          if (data[i][0].profile[0].startTime == null || data[i][0].profile[0].endTime == null) continue  /* comment this line out to test */
          let startTime = new Date(date)
          startTime.setDate(startTime.getDate() + 1)
          let time = data[i][0].profile[0].startTime
          let hours = time.split(':')[0]             /* comment this line out to test */
          let minutes = time.split(':')[1]           /* comment this line out to test */
          startTime.setHours(hours, minutes, 0)      /* comment this line out to test */
          let endTime = new Date(date)
          endTime.setDate(endTime.getDate() + 1)
          time = data[i][0].profile[0].endTime    /* comment this line out to test */
          hours = time.split(':')[0]              /* comment this line out to test */
          minutes = time.split(':')[1]            /* comment this line out to test */
          endTime.setHours(hours, minutes, 0)     /* comment this line out to test */

          // startTime.setHours(10, 0, 0)         /* uncomment this line to test */
          // endTime.setHours(12, 30, 0)          /* uncomment this line to test */

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
    
  }, [month_offset])

  window.onload = () => {
    const prev_arrow = document.getElementById('e-tbr-btn_0');
    prev_arrow.onclick = () => {
      console.log(month_offset - 1)
      setMonth_offset(month_offset - 1)
    }
    const next_arrow = document.getElementById('e-tbr-btn_1');
    next_arrow.onclick = () => {
      console.log(month_offset + 1)
      setMonth_offset(month_offset + 1)
    }
  }

  /* FOR TESTING NAV ARROWS */

  // function onNavigation() {
  //   console.log('nav')
  // }

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
          <ScheduleComponent height='550px' currentView = 'Month' navigating={onNavigation} eventSettings={{ dataSource: cal_data,
            fields: {
                subject: {name: 'Subject'},
                startTime: { name: 'StartTime' },
                endTime: { name: 'EndTime' }
            }
            }}>
            <ViewsDirective>
              <ViewDirective option='Month'/>
            </ViewsDirective>
            <Inject services={[Month]}/>
          </ScheduleComponent>
        </Grid>
      </Grid>
    </div>
  );
}
export default CalendarPage;