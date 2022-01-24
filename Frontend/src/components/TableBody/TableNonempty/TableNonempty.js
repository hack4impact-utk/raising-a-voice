import React from 'react';

import './TableNonempty.css';

export default function TableNonempty(props) {
  const filteredProfiles = props.filteredProfiles;
  return (
    <>
      {filteredProfiles.map((profile, index) => {
        if (index%2 === 0) {
            return (
              <tr className="nonempty-content-row white-background">
                <td>{profile.legal_name}</td>
                <td>{profile.nickname}</td>
                <td>Identifier?</td>
              </tr>
            );
        }
        else {
            return (
              <tr className="nonempty-content-row blue-background">
                <td>{profile.legal_name}</td>
                <td>{profile.nickname}</td>
                <td>Identifier?</td>
              </tr>
            );
          }
        })
      }
    </>
  )
}

