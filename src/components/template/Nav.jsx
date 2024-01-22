import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {

    return(
        <aside className="menu-area ">
            <Link to="/" >
                <i className="fa fa-home"></i>Inicio
            </Link>
            <Link to="/users" >
                <i className="fa fa-users"></i>Usuários
            </Link>
        </aside>
    )
}

export default Nav
