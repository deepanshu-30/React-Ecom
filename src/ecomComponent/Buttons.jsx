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

export { cartButton as CartButton };
