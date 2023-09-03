import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route

} from "react-router-dom";
import AboutUs from './component/AboutUs';
import Event from './component/Event';
import HomePage from './component/HomePage';


const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<Event />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
        </Router>
    )
}

export default Routers
