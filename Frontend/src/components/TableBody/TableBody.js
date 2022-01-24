import React from 'react';
import TableEmpty from './TableEmpty/TableEmpty';
import TableNonempty from './TableNonempty/TableNonempty';

import './TableBody.css';


export default function TableBody(props) {
  const filteredProfiles = props.filteredProfiles;
  // if (filteredProfiles.length !== 0) {
  //   return <TableNonempty filteredProfiles={filteredProfiles} />
  // } else {
  //   return <TableEmpty filteredProfiles={filteredProfiles} />
  // }
  if (filteredProfiles.length === 0) {
    return <TableEmpty />
  } else {
    return <TableNonempty filteredProfiles={filteredProfiles} />
  }
}