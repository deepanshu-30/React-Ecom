import React from 'react'
import { Badge, ButtonBase, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from './store/cartSlice'
const Img = styled('img')({
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '16px',
});

const CartProductDisplayGrids = () => {

    const dispatch = useDispatch()
    const removeProduct = (id) => {
        console.log(id)
        dispatch(remove(id))
    }

    const products = useSelector((state) => state.cart)
    console.log(products.length)
    return (
        <>
            {
                products.map((product, index) => (
                    <Grid container key={product.id}
                        direction="row"
                        display={'flex'}
                        justifyContent={"center"}
                        sx={{
                            mx: 'auto',
                            mt: 6,
                        }}>
                        <Grid xs={3} md={3} item
                            display='flex'
                            justifyContent='center'
                            alignItems="center"
                            sx={{
                                mx: 'auto',
                            }}
                        >
                            <ButtonBase sx={{ width: 'auto', height: 80 }}>
                                <Img alt="complex" src={product.images[0]} />
                            </ButtonBase>
                        </Grid>
                        <Grid xs={5} md={7} item container
                            display='flex'
                            direction="column"
                            justifyContent='center'
                            alignItems="center"
                            sx={{
                                mx: 'auto'
                            }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    mx: 2,
                                    textAlign: 'center',
                                    fontWeight: 400
                                }}

                            >
                                {product.title}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 200 }} color="text.secondary">
                                {product.price}
                            </Typography>
                        </Grid>
                        <Grid xs={3} md={1} item
                            sx={{
                                mx: 'auto'

                            }}>
                            <IconButton size="large" color="inherit" sx={{
                                mt: -1,
                                mx: 3,
                            }}>
                                <Badge color="error">
                                    <DeleteIcon onClick={() => { removeProduct(product.id) }} sx={{ fontSize: 35 }} />
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}

export default CartProductDisplayGrids
