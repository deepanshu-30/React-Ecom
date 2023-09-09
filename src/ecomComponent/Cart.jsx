import * as React from 'react';
import Base from './Base'
import CartProductDisplayGrids from './CartProductDisplayGrids';
import Heading from './Heading';
import { CartButton, NoItemButton } from './Buttons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const Cart = () => {
    const products = useSelector((state) => state.cart)
    return (
        <Base>
            {products.length == 0 ?
                (<Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
                    No products in the cart.
                    Want to shop !!!!!
                    <br />
                    <br />
                    <Link to={'/'}><NoItemButton name='Press Here For Shopping' /></Link>
                </Typography>
                ) : (
                    <>
                        <Heading name={'Cart'} />
                        <CartProductDisplayGrids />
                        <Link to={'/complete'}><CartButton name='Buy Now' /></Link>
                    </>
                )}

        </Base >

    )
}

export default Cart
