import '../styles/MemberSearch.css';
import TESTDATA from "../MOCK_DATA.json";

import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { HiPlusSm } from "react-icons/hi";
import ButtonBase from '@mui/material/ButtonBase';

const axios = require('axios');

export default function ProfileSearch() {
    const [profiles, setProfiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    let history = useHistory();

    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
    }

    // function goToNewMember() {
    //     history.push("/newmember");
    // }

    // useEffect(() => {
    //     getProfiles();
    // }, []);

    // const getProfiles = async () => {
    //     try {
    //         const res = await axios.get('https://raising-a-voice.vercel.app/profile/getAll');
    //         console.log(res);
    //         setProfiles(res.data);
    //         console.log(profiles);
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    useEffect(() => {
        axios.get('https://raising-a-voice.vercel.app/profile/getAll') 
            .then(res => {
                console.log(res);
                setProfiles(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    console.log(profiles);

    return (
        <div className="whole-page">
            <div className="scrollable">
            {/* Button below to make new profile */}
            {/* <ButtonBase id="add-button" onClick={goToNewMember}>
                <HiPlusSm size={15} />
                <p className="button-text">Add New Member</p>
            </ButtonBase> */}
            <section className="title-and-search-section">
                <h1 className="title">Women Profiles</h1>
                <div className="search-bar">
                    <SearchIcon id="search-icon" />
                    <InputBase
                        id="search-text"
                        placeholder="search Name, Nickname or Identifier"
                        onChange={handleSearchChange}
                        variant="outlined"
                        autoComplete="none"
                    />
                </div>
            </section>
            <section className="num-profiles-section">
                <p className="num-profiles">{profiles.length}</p>
            </section>
            <section className="profiles-list-section">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Nickname</th>
                        <th>Identifier</th>
                    </tr>
                    {profiles.filter((profile) => {
                        if (searchTerm === "") {
                            return profile;
                        } else if (profile.legal_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return profile;
                        } else if (profile.nickname.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return profile;
                        }
                        }).map((profile, index) => {
                        if (index%2 == 0) {
                            return (
                                <tr className="content-row white-background">
                                    <td>{profile.legal_name}</td>
                                    <td>{profile.nickname}</td>
                                    <td>Identifier?</td>
                                </tr>
                            );
                        }
                        else {
                            return (
                                <tr className="content-row blue-background">
                                    <td>{profile.legal_name}</td>
                                    <td>{profile.nickname}</td>
                                    <td>Identifier?</td>
                                </tr>
                            );
                        }
                    })}
                </table>
            </section>              
            </div>
        </div>
    );
}