import React from 'react'
import Footer from './Footer'
import Navebar from './Navebar'
import Container from '@mui/material/Container';

const Base = ({ children }) => {
    return (
        <Container fixed>
            <Navebar />
            {children}

        </Container>

    )
}

export default Base