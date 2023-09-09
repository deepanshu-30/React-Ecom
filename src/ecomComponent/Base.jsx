import { Container } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Nave from './Nave'

const Base = ({ children }) => {
    return (
        <Container fixed>
            <Nave />
            {children}
            <Footer />
        </Container>
    )
}

export default Base
