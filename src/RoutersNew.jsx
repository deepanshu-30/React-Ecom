import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './ecomComponent/Cart'
import HomePage from './ecomComponent/HomePage'
import Thankyou from './ecomComponent/Thankyou'

const RoutersNew = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/complete" element={<Thankyou />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutersNew
