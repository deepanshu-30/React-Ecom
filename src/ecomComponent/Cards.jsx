import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { PlpButton } from './Buttons';
import { add } from './store/cartSlice';
import { useDispatch } from 'react-redux';

const Cards = ({ data }) => {

    const dispatch = useDispatch()
    const addProduct = (data) => {
        dispatch(add(data))
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.images[0]}
                    alt="green iguana"
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {data.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <PlpButton handleClick={() => addProduct(data)} name={"Buy This"} />
            </CardActions>
        </Card>
    );
}

export default Cards
