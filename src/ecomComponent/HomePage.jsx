import React from 'react'
import BaseGrid from './BaseGrid'
import Base from './Base'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomePage = () => {
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
                    Products
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
                    Products
                </Typography>
                <BaseGrid />
            </Box>

        </Base >



    )
}

export default HomePage
