import axios from 'axios'
import React, { useState } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: "Crud",
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: ''},
    list: []
}

const User = () => {

    const [initiate, setInitiate] = useState(false);
    const [user, setUser] = useState(initialState.user)
    const [list, setList] = useState(initialState.list)

    const componentDidMount = () =>{
        if(initiate) return
        else {
            axios(baseUrl)
            .then(resp =>{
                setList(resp.data)
            })
        }
        setInitiate(true)
    }
    
    componentDidMount()

    const clear = (e) => {
        setUser( initialState.user )
    }

    const save = (e) => {
        const newUser = {...user}
        const method = newUser.id ? 'put' : 'post'
        const url = newUser.id ? `${baseUrl}/${newUser.id}` : baseUrl
        axios[method](url,newUser)
            .then(resp => {
                const list = updateList(resp.data)
                setUser(initialState.user)
                setList(list)
            })
    }

    const load = (user) => {
        setUser(user)
    }

    const remove = (user) =>{
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                const newList = updateList(user,false)
                setList(newList)
            })
    }

    const updateList = (user, add=true) =>{
        const newList = list.filter(u => u.id !== user.id)
        if(add) newList.push(user)

        return newList
    }

    const updateField = (e) => {
        const newUser = {...user}
        newUser[e.target.name] = e.target.value
        setUser(newUser)
    }

    const renderForm = () => {

        return(
            <div className="form mx-4">
                <div className="row">
                    <div className="col-12 ">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" 
                                name='name'
                                value={user.name}
                                onChange={e => updateField(e)}
                                placeholder='Digite seu nome'
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" 
                                name='email'
                                value={user.email}
                                onChange={e => updateField(e)}
                                placeholder='Digite seu e-mail'
                            />
                        </div>
                    </div>
                </div>
                <div className="row  my-2">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => save(e)}
                        >
                            Salvar
                        </button>
                        <button className="btn btn-secondary"
                            onClick={e => clear(e)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const renderTable = () =>{

        return(
            <div className="row">
                <table className="table mx-4">
                    <thead >
                        <tr >
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th className='d-flex justify-content-end mx-2' >Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
            
        )
    }

    const renderRows = () =>{

        return list.map(user => {

            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className='d-flex justify-content-end' >
                        <button className="btn btn-warning"
                            onClick={() => load(user)}
                        >
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => remove(user)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <Main {...headerProps}>
            { renderForm() }
            { renderTable() }
        </Main>
    )
}

export default User
