import * as React from 'react';
import Box from '@mui/material/Box';
import RG from './BaseGrid';
import Typography from '@mui/material/Typography';
import Base from './Base';

export default function Event() {
    return (
        <Base>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                mx: 'auto',
                my: 'auto'
            }}>
                <Typography
                    variant="h3"
                    noWrap
                    component="h2"
                    href="/"
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        fontSize: 90,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        mx: 'auto',
                        mt: 4,
                        textTransform: 'uppercase'
                    }}
                >
                    Services
                </Typography>
                <Typography
                    variant="h5"
                    noWrap
                    component="h2"
                    href="/"
                    sx={{
                        mx: 'auto',
                        display: { xs: 'flex', md: 'none' },
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        fontSize: 40,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        mt: 4

                    }}
                >
                    Services
                </Typography>
                <RG />
            </Box >
        </Base>


    );
}