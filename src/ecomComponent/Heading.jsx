import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Heading = ({ children, name }) => {
    return (
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
                    mt: 5,
                    my: 1,
                    textTransform: 'uppercase'
                }}
            >
                {name}
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
                    fontSize: 30,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    mt: 4

                }}
            >
                {name}
            </Typography>
            {children}
        </Box>
    )
}

export default Heading
