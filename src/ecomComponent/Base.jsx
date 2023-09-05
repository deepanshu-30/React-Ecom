import { Container } from '@mui/material'
import React from 'react'
import Nave from './Nave'

const Base = ({ children }) => {
    return (
        <Container fixed>
            <Nave />
            {children}
        </Container>
    )
}

export default Base
