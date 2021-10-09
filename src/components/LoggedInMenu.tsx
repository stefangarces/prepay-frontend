import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import WelcomeName from "./WelcomeNameText";

export default function LoginMenu() {
    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <WelcomeName />
            <br/>
                <Button variant="contained" size="large">
                    Nytt objekt
                </Button>
                <br/>
                <Button variant="contained" size="large">
                    Transaktioner
                </Button>
                <br/>
                <Button variant="contained" size="large">
                    Mitt konto
                </Button>
            <br/>
            <Button color={"secondary"} variant="contained" size="large">
                Logga ut
            </Button>
        </Box>
    );
}
