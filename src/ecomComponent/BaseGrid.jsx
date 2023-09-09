import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Cards from './Cards.jsx';
import { useSelector } from 'react-redux';


const BaseGrid = () => {
    let products = useSelector((state) => state.product)
    products = products[0].products

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map((product, index) => (
                    <Grid xs={2} sm={4} md={4} key={product.id}>
                        <Cards data={product} />
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}
export default BaseGrid;