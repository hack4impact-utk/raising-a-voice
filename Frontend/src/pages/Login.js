import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/Login.css' 

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    // I think this function will perform necessary API calls to check
    // the backend?
    function handleSubmit(event) {
        event.preventDefault();

        // something with fetch and post username info or params
    }

    return (
            <div className="page" >
                <h1>Admin Login</h1>
                <div className="container">
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <TextField className="input"
                            required
                            label="Username"
                            value={email} 
                            variant="outlined"
                            onChange={
                                (e) => setEmail(e.target.value)
                            }
                        />
                        <TextField className="input"
                            required
                            type="password"
                            label="Password"
                            value={password}
                            variant="outlined"
                            onChange={
                                (e) => setPassword(e.target.value)
                            }
                        />
                        <div className="right-align">
                            <a className="link" href="/"> Forgot Password?</a>
                        </div>
                        <Button id="loginButton" disabled={!validateForm()} variant="contained">Login</Button>
                    </form>
                </div>
            </div>
    );
}