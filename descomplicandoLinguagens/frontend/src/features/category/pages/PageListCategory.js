import React, { useState, Fragment, useEffect } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import api from '../../../services/api'
import globalConfig from '../../../utils/globalConfig'
import Pagination from '../../../components/Pagination'

import Menu from '../../../components/menu/Menu'
import ListCategory from '../containers/ListCategory'
import EditCategory from '../containers/EditCategory'
import NewCategory from '../containers/NewCategory'

import '../styles/style_category.css'

export default function PageListCategory() {

    const initialFormState = { _id: 0, name: '', description: '', slug: '' }

    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState(initialFormState)
    const [editing, setEditing] = useState(false)
    const [adding, setAdding] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [boolAlert, setBoolAlert] = useState(false)
    const [txtButton, setTxtButton] = useState('Adicionar')
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCategory = async () => {
            setLoading(true)
            const response = await api.get('categories')
            setCategories(response.data)
            setLoading(false)
        }
        fetchCategory()
    }, [editing, adding, deleting])

    const indexOfLastPost = currentPage * globalConfig.maxPageRegisters
    const indexOfFirstPost = indexOfLastPost - globalConfig.maxPageRegisters
    const currentCategories = categories.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    /** Delete */
    const deleteRegister = async id => {
        setDeleting(true)
        await api.delete(`categories/${id}`)

        setMsgAlert(`Categoria (${id}) deletada com sucesso!`)
        showAlert()
        setCurrentPage(1)
        setDeleting(false)
    }

    /** Start New */
    const startAddCategory = () => {
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
    const endAddCategory = async category => {
        await api.post('categories', category)

        setMsgAlert(`Categoria (${category.id}) criada com sucesso!`)
        showAlert()
        setTxtButton('Adicionar')
        setAdding(false)
    }

    /** Start Edit */
    const startEditRow = category => {
        setEditing(true)
        setCurrentCategory(category)
        setTxtButton('Voltar')
    }

    /** End Edit */
    const endEditRow = async (id, updatedCategory) => {
        await api.put(`categories/${id}`, updatedCategory)

        setMsgAlert(`Categoria (${id}) modificada com sucesso!`)
        showAlert()
        setTxtButton('Adicionar')
        setEditing(false)
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
                {<Menu activeOption="Category" />}
            </header>

            <SweetAlert success show={boolAlert} title={msgAlert} onConfirm={hideAlert}>
            </SweetAlert>

            <section className="wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <section className="panel">
                            <header className="panel-heading">
                                Lista de Categorias
                                <span className="tools pull-right">
                                    <button type="button" className="btn btn-round btn-primary tagAddBtn" onClick={startAddCategory}>
                                        {txtButton}
                                    </button>
                                </span>
                            </header>
                            <div className="panel-body">
                                {
                                    editing ? (
                                        <Fragment>
                                            <EditCategory
                                                currentRegister={currentCategory}
                                                endEditRow={endEditRow}
                                            />
                                        </Fragment>
                                    ) : (false)
                                }

                                {
                                    adding ? (
                                        <Fragment>
                                            <NewCategory endAddRegister={endAddCategory} />
                                        </Fragment>
                                    ) : (false)
                                }

                                {
                                    !editing && !adding ? (
                                        <Fragment>
                                            <ListCategory
                                                list={currentCategories}
                                                startEditRow={startEditRow}
                                                deleteRegister={deleteRegister}
                                                loading={loading}
                                            />
                                            <Pagination
                                                linesPerPage={globalConfig.maxPageRegisters}
                                                totalLines={categories.length}
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