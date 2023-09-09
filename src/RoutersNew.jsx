import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './ecomComponent/Cart'
import HomePage from './ecomComponent/HomePage'
import Thankyou from './ecomComponent/Thankyou'
import { Provider } from 'react-redux'
import store from './ecomComponent/store/store'

const RoutersNew = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/complete" element={<Thankyou />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default RoutersNew
