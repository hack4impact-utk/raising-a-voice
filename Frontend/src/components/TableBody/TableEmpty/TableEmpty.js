import React from 'react';

import './TableEmpty.css'

export default function TableEmpty() {
  return (
    <tr className="empty-content-row transparent-background">
      <td>No matching Profiles</td>
    </tr>
  )
}