import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import WelcomeName from "./WelcomeNameText";

export default function SellOrPay() {
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
                Sälj
            </Button>
            <br/>
            <Button color={"secondary"} variant="contained" size="large">
                Betala
            </Button>
        </Box>
    );
}
