import React from 'react';
import { Link, Outlet, Route, Routes } from "react-router-dom"
import Layout from './Layout/Layout';
import Home from './pages/home';
import About from './pages/about';



function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='about' element={<About />}/>
            </Route>
        </Routes>
    )
}

export default App
