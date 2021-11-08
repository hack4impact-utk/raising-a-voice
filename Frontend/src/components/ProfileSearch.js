import '../styles/ProfileSearch.css';
import TESTDATA from "../MOCK_DATA.json";

import React, {useState, useEffect} from 'react';
import InputBase from '@mui/material/InputBase';
import { HiOutlineSearch, HiPlusSm } from "react-icons/hi";
import ButtonBase from '@mui/material/ButtonBase';

export default function ProfileSearch() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        /* Get the data from the backend whe the page is initially loaded */
        /* Right now, I am using TESTDATA to test with */
    });

    return (
        <div>
            <ButtonBase id="add-button" >
                <HiPlusSm size={15} />
                <p className="button-text">Add New Member</p>
            </ButtonBase>
            <p className="title">Search Member Database</p>
            <div className="search-bar">
                <HiOutlineSearch size={20} color="#a2a2a2"/>
                <InputBase
                    id="search-text"
                    placeholder="Search by name"
                    onChange={handleSearchChange}
                    variant="outlined"
                    autoComplete="none"
                />
            </div>
            {TESTDATA.filter((profile) => {
                if (searchTerm === "") {
                    return;
                } else if (profile.legalName.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return profile;
                }
            }).map((profile, index) => {
                return (
                    <p>{profile.legalName}</p>
                );
            })}
        </div>
    );
}