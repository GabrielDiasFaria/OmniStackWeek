import React, { useState, Fragment } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import Menu from '../../../components/menu/Menu'
import ListUser from '../containers/ListUser'
import '../styles/style_user.css'

export default function PageListUser() {

    const listUsers = [
        { id: 1, avatar: '', name: 'Gabriel', function: 'ABAP Developer', profile: 'Desenvolvedor', email: 'gabriel@descomplicandolinguagens.com.br' },
        { id: 2, avatar: '', name: 'Rayane', function: 'MKT Digital', profile: 'Analista', email: 'rayane@descomplicandolinguagens.com.br' },
    ]
    const initialFormState = { id: 0, avatar: '', name: '', funcao: '', profile: '', email: '' }
    const [users, setUsers] = useState(listUsers)
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const [boolAlert, setBoolAlert] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [txtButton, setTxtButton] = useState('Adicionar')
    const [editing, setEditing] = useState(false)
    const [adding, setAdding] = useState(false)

    const hideAlert = () => {
        setBoolAlert(false)
    }

    const showAlert = () => {
        setBoolAlert(true)
    }

    /** Start Edit */
    const startEditRow = user => {
        setEditing(true)
        setCurrentUser(user)
        setTxtButton('Voltar')
    }

    /** Delete */
    const deleteRegister = id => {
        setEditing(false)
        setUsers(users.filter(user => user.id !== id))

        setMsgAlert(`Usuário (${id}) deletado com sucesso!`)
        showAlert(true)
    }

    return (
        <section id="main-content">
            <header>
                {<Menu />}
            </header>

            <SweetAlert success show={boolAlert} title={msgAlert} onConfirm={hideAlert}>
            </SweetAlert>

            <section className="wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <section className="panel">
                            <header className="panel-heading">
                                Lista de Usuários
                                <span className="tools pull-right">
                                    <button type="button" className="btn btn-round btn-primary tagAddBtn" onClick="">
                                        {txtButton}
                                    </button>
                                </span>
                            </header>
                            <div className="panel-body">
                                {
                                    !editing && !adding ? (
                                        <Fragment>
                                            <ListUser list={users} startEditRow={startEditRow} deleteRegister={deleteRegister} />
                                        </Fragment>
                                    ) : (false)
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </section>

        </section>
    )
}