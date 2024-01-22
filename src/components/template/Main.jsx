import './Main.css'
import React from 'react'
import Header from './Header'

const Main = props => {
    
    return(
        <React.Fragment>
            <Header {...props}/>
            <main className="conteudo mx-4" >
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Main
