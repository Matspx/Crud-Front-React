import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Logo from '../components/template/Logo'
import Routes from './Routes'

const App = () => {

    return(
        <BrowserRouter>
            <div className='app'>
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>   
    )
}

export default App
    