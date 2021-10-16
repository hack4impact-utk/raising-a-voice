import React, { useEffect, useState } from 'react';
import { Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent } from '@syncfusion/ej2-react-schedule'

export default function RAVCalendar() {
  return (
    <div>
      <ScheduleComponent currentView='Month'>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}