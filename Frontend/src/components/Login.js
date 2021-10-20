import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    }

    return (
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Stack spacing={2} alignItems="center">
                    <TextField 
                        required
                        label="Username"
                        value={email} 
                        margin="10"
                        variant="standard"
                        onChange={
                            (e) => setEmail(e.target.value)
                        }
                    />
                    <TextField
                        required
                        label="Pasword"
                        value={password}
                        variant="standard"
                        onChange={
                            (e) => setPassword(e.target.value)
                        }
                    />
                    <Button disabled={!validateForm()} variant="contained">Login</Button>
                </Stack>
            </form>
    );
}
