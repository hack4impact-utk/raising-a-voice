import '../styles/ProfileSearch.css';
import TESTDATA from "../MOCK_DATA.json";

import React, {useState, useEffect} from 'react';
import InputBase from '@mui/material/InputBase';
import { HiOutlineSearch } from "react-icons/hi";

export default function ProfileSearch() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
    }

    return (
        <div>
            <h1>Search Member Database</h1>
            <div className="search-bar">
                <HiOutlineSearch size={30} />
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