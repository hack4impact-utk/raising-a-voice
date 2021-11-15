import '../styles/MemberSearch.css';
import TESTDATA from "../MOCK_DATA.json";

import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import { HiPlusSm } from "react-icons/hi";
import SearchIcon from '@mui/icons-material/Search';
import ButtonBase from '@mui/material/ButtonBase';

export default function ProfileSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    let history = useHistory();

    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        /* Get the data from the backend whe the page is initially loaded */
        /* Right now, I am using TESTDATA to test with */
    });

    function goToNewMember() {
        history.push("/newmember");
    }

    return (
        <div style={{ marginLeft: 64 }}>
            <ButtonBase id="add-button" onClick={goToNewMember}>
                <HiPlusSm size={15} />
                <p className="button-text">Add New Member</p>
            </ButtonBase>
            <h1 className="title">Search Member Database</h1>
            <div className="search-bar">
                <SearchIcon id="search-icon" />
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