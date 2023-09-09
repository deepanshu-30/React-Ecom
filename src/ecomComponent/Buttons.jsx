import React from 'react'
import { Button } from '@mui/material';

const cartButton = ({ name }) => {
    return (
        <>
            <Button variant="contained" sx={{
                mx: 'auto',
                mt: 4,
                float: 'right'
            }}>{name}</Button>
        </>
    )
}
const plpButton = ({ name, handleClick }) => {
    return (
        <>
            <Button onClick={handleClick} variant="contained" sx={{
                mx: 'auto',
                alignItems: 'center'
            }}>{name}</Button>
        </>
    )
}
const noItemButton = ({ name }) => {
    return (
        <>
            <Button variant="contained" sx={{
                alignItems: 'center'
            }}>{name}</Button>
        </>
    )
}

export { cartButton as CartButton, plpButton as PlpButton, noItemButton as NoItemButton };
