import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Cards from './Cards.jsx';


const BaseGrid = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid xs={2} sm={4} md={4} key={index}>
                        <Cards />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
export default BaseGrid;