import React from 'react'
import Main from '../template/Main'

const Home = (props) => {

    return(
        <Main icon='home' title="Inicio" >
            <div className="display-4">Bem vindo!</div>
            <hr/>
            <p className="mb-0">Sistema exemplo de um crud em react</p>
        </ Main> 
    )
}

export default Home

    