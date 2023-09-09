import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <AppBar container fixed sx={{
            display: { sm: 'none', md: 'flex' },
            flexGrow: 1,
            width: '55%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1
        }}
            position="fixed"
            style={{
                backgroundColor: 'black',
                top: 'auto',
                bottom: 0
            }}>
            <Container>
                <Toolbar>
                    <Typography variant="body1" color="inherit">
                        © {new Date().getFullYear()} Your Website Name
                    </Typography>
                    {/* Add more footer content here */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Footer;