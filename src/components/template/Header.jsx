import './Header.css'
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = props => {

    return(
        <header className='header mx-4'>
            <h1 className="mt-3">
                <i className={`fa fa-${props.icon}`}></i>{props.title}
            </h1>
        </header>
    )
}

export default Header
