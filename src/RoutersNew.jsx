import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './ecomComponent/HomePage'

const RoutersNew = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutersNew
