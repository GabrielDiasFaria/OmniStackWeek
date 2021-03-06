import React, { useState, Fragment, useEffect } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import api from '../../../services/api'
import globalConfig from '../../../utils/globalConfig'
import Pagination from '../../../components/Pagination'

import Menu from '../../../components/menu/Menu'
import ListUser from '../containers/ListUser'
import NewUser from '../containers/NewUser'
import EditUser from '../containers/EditUser'

import '../styles/style_user.css'

export default function PageListUser() {

    const initialFormState = {
        id: 0,
        avatar: '',
        name: '',
        funcao: '',
        profile: '',
        email: '',
        permission: {
            posts: { create: false, update: false, view: true },
            tags: { create: false, update: false, view: true },
            categories: { create: false, update: false, view: false },
            users: { create: false, update: false, view: true }
        }
    }

    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const [boolAlert, setBoolAlert] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [txtButton, setTxtButton] = useState('Adicionar')
    const [editing, setEditing] = useState(false)
    const [adding, setAdding] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
            const response = await api.get('users')
            setUsers(response.data)
            setLoading(false)
        }
        fetchUser()
    }, [editing, adding, deleting])

    const indexOfLastPost = currentPage * globalConfig.maxPageRegisters
    const indexOfFirstPost = indexOfLastPost - globalConfig.maxPageRegisters
    const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    /** Delete */
    const deleteRegister = async id => {
        setDeleting(true)
        await api.delete(`users/${id}`).then((response) => {
            setMsgAlert(response.data.message)
            showAlert()

            if (!response.data.errors) {
                setCurrentPage(1)
                setDeleting(false)
            }
        }).catch((e) => {
            setMsgAlert(e.errors.message)
            showAlert()
        })

    }

    const resetPassword = async id => {
        let response = await api.put(`resetUserPass/${id}`).then((response) => {
            setMsgAlert(response.data.message)
            showAlert()

            if (!response.data.errors) {
                setCurrentPage(1)
                setEditing(false)
            }
        }).catch((e) => {
            setMsgAlert(e.errors.message)
            showAlert()
        })
    }

    /** Start New */
    const startAddUser = () => {
        if (editing || adding) {
            setAdding(false)
            setEditing(false)
            setTxtButton('Adicionar')
        } else {
            setAdding(true)
            setTxtButton('Voltar')
        }
    }

    /** End New */
    const endAddUser = async user => {
        await api.post('users', user).then((response) => {
            setMsgAlert(response.data.message)
            showAlert()

            if (!response.data.errors) {
                setTxtButton('Adicionar')
                setAdding(false)
            }
        }).catch((e) => {
            setMsgAlert(e.errors.message)
            showAlert()
        })
    }

    /** Start Edit */
    const startEditRow = user => {
        setEditing(true)
        setCurrentUser(user)
        setTxtButton('Voltar')
    }

    /** End Edit */
    const endEditRow = async (id, updatedUser) => {
        await api.put(`users/${id}`, updatedUser).then((response) => {
            setMsgAlert(response.data.message)
            showAlert()

            if (!response.data.errors) {
                setTxtButton('Adicionar')
                setEditing(false)
            }
        }).catch((e) => {
            setMsgAlert(e.errors.message)
            showAlert()
        })
    }

    const hideAlert = () => {
        setBoolAlert(false)
    }

    const showAlert = () => {
        setBoolAlert(true)
    }

    return (
        <section id="main-content">
            <header>
                {<Menu activeOption="User" />}
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
                                    <button type="button" className="btn btn-round btn-warning tagAddBtn" onClick={startAddUser}>
                                        {txtButton}
                                    </button>
                                </span>
                            </header>
                            <div className="panel-body">
                                {
                                    editing ? (
                                        <Fragment>
                                            <EditUser
                                                currentUser={currentUser}
                                                endEditRow={endEditRow}
                                                resetPassword={resetPassword}
                                            />
                                        </Fragment>
                                    ) : (false)
                                }

                                {
                                    adding ? (
                                        <Fragment>
                                            <NewUser endAddUser={endAddUser} />
                                        </Fragment>
                                    ) : (false)
                                }

                                {
                                    !editing && !adding ? (
                                        <Fragment>
                                            <ListUser
                                                list={currentUsers}
                                                startEditRow={startEditRow}
                                                deleteRegister={deleteRegister}
                                                loading={loading}
                                            />
                                            <Pagination
                                                linesPerPage={globalConfig.maxPageRegisters}
                                                totalLines={users.length}
                                                paginate={paginate}
                                            />
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