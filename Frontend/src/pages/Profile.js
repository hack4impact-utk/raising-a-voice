import "../styles/Profile.css";
import React, {useEffect } from 'react';
import Event from '../components/Event/Event';

export default function Profile() {

        useEffect( () => {
            const axios = require('axios');
            axios.get('https://raising-a-voice.vercel.app/api/profile/getAll')
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        },[]);

        const profileValues = {
            legalName : "Jane Doe",
            nickname: "Jane",
            identifier: "Blond, Tall",
            age: 16,
            DOB: "02/22/1976",
            hometown: "Knoxville",
            residencyStatus: "TN",
            employment: "Unemployed",
            maritalStatus: "Single",
            address: "1823 Nice Town Street",
            cell: "875-908-7621",
            sex: "Female",
            SNAP: "",
            birthCert: "",
            ID: "054-86-9821",
            SSN: ""
        }
        // connect to backend to populate profileValues

        const eventValues = {
            title: "Housing Resource Arrangement",
            person: "Lina Blond",
            date: "October 10, 2021",
            time: "3PM",
            notes: "Picking up Sara at Starbucks on Magnolia and MLK Blvd",
            createdBy: "Sara"
        }

    return (
        <>
            <div className="profile">
                <div className="left">
                    <div className="name">{profileValues.legalName}</div>
                    <div className="heading">General</div>
                    <div className="container">
                        <div className="line">
                            <div className="field">Nickname</div>
                            <div className="data">{profileValues.nickname}</div>
                        </div>
                        <div className="line">
                            <div className="field">Identifier</div>
                            <div className="data">{profileValues.identifier}</div>
                        </div>
                        <div className="line">
                            <div className="field">Age</div>
                            <div className="data">{profileValues.age}</div>
                        </div>
                        <div className="line">
                            <div className="field">DOB</div>
                            <div className="data">{profileValues.DOB}</div>
                        </div>
                        <div className="line">
                            <div className="field">Hometown</div>
                            <div className="data">{profileValues.hometown}</div>
                        </div>
                        <div className="line">
                            <div className="field">Residency Status</div>
                            <div className="data">{profileValues.residencyStatus}</div>
                        </div>
                        <div className="line">
                            <div className="field">Employment</div>
                            <div className="data">{profileValues.employment}</div>
                        </div>
                        <div className="line">
                            <div className="field">Marital Status</div>
                            <div className="data">{profileValues.maritalStatus}</div>
                        </div>
                        <div className="line">
                            <div className="field">Address</div>
                            <div className="data">{profileValues.address}</div>
                        </div>
                        <div className="line">
                            <div className="field">Cell</div>
                            <div className="data">{profileValues.cell}</div>
                        </div>
                    </div>
                    <div className="heading">Statuses</div>
                    <div className="container">
                        <div className="line">
                            <div className="field">SNAP</div>
                            <div className="data">{profileValues.SNAP}</div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="line">
                            <div className="field">Birth Certificate</div>
                            <div className="data">{profileValues.SNAP}</div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="line">
                            <div className="field">ID</div>
                            <div className="data">{profileValues.SNAP}</div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="line">
                            <div className="field">SSN Card</div>
                            <div className="data">{profileValues.SNAP}</div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="heading">Upcoming Events</div>
                    {/* loop over events array and create events with values here*/}
                    <Event
                        title={eventValues.title}
                        person={eventValues.person}
                        date={eventValues.date}
                        time={eventValues.time}
                        notes={eventValues.notes}
                        createdBy={eventValues.createdBy}
                    />
                    <div className="container">
                        <div className="eventTitle">Event Title</div>
                        <div className="with"></div>
                        <div className="line">
                            <div className="field">Date</div>
                            <div className="eventData">{eventValues.date}</div>
                        </div>
                        <div className="time"></div>
                        <div className="notes"></div>
                        <div className="createdBy"></div>
                    </div>
                    <div className="heading">Past Events</div>
                    <div className="container">
                        <div className="eventTitle">Event Title</div>
                        <div className="with"></div>
                        <div className="date"></div>
                        <div className="time"></div>
                        <div className="notes"></div>
                        <div className="createdBy"></div>
                    </div>
                </div>
            </div>
        </>
    );
}