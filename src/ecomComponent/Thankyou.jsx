import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Thankyou = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 2000);
    }, [])

    return (

        <Box
            sx={{

                // textAlign: 'center',
                // mx: { sm: 10, xs: 5, lg: 45 },
                // mt: { xs: 40, sm: 50, md: 50 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                '&:hover': {
                    backgroundColor: 'primary.dark',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
            <Typography
                variant="h3"
                // noWrap
                // component="h2"
                href="/"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: 40,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    mx: 5,
                    mt: 4,

                }}
            >"Thanks for Shoping with US Our Team Will Connect you Soon"</Typography>
            <Typography
                variant="h5"
                // noWrap
                // component="h2"
                href="/"
                sx={{
                    mx: 'auto',
                    display: { xs: 'flex', md: 'none' },
                    fontFamily: 'Roboto',
                    fontWeight: 600,
                    fontSize: 18,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    mt: 4,
                    p: 2

                }}
            >
                "Thanks for Shoping with US.<br />
                Our Team Will Connect you Soon"
            </Typography>

        </Box >

    )
}

export default Thankyou
