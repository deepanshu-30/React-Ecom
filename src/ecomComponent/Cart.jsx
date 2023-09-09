import * as React from 'react';
import Base from './Base'
import CartProductDisplayGrids from './CartProductDisplayGrids';
import Heading from './Heading';
import { CartButton } from './Buttons';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <Base>
            <Heading name={'Cart'} />
            <CartProductDisplayGrids />
            <Link to={'/complete'}><CartButton name='Buy Now' /></Link>



        </Base >

    )
}

export default Cart
