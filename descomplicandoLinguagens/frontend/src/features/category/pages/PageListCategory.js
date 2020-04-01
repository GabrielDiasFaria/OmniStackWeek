import React, { useState, Fragment } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import Menu from '../../../components/menu/Menu'
import ListCategory from '../containers/ListCategory'
import EditCategory from '../containers/EditCategory'
import NewCategory from '../containers/NewCategory'
import '../styles/style_category.css'

export default function PageListCategory() {

    const listCategories = [
        { id: 1, name: 'SAP', description: 'Descrição aqui...', slug: 'SAP' },
        { id: 2, name: 'ABAP', description: 'Descrição aqui...', slug: 'ABAP' },
        { id: 3, name: 'ABAPS', description: 'Descrição aqui vai...', slug: 'ABAPS' }
    ]
    const initialFormState = { id: 0, name: '', description: '', slug: '' }

    const [categories, setCategories] = useState(listCategories)
    const [currentCategory, setCurrentCategory] = useState(initialFormState)

    const [boolAlert, setBoolAlert] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [editing, setEditing] = useState(false)
    const [adding, setAdding] = useState(false)
    const [txtButton, setTxtButton] = useState('Adicionar')

    const hideAlert = () => {
        setBoolAlert(false)
    }

    const showAlert = () => {
        setBoolAlert(true)
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
    const endAddCategory = category => {
        setAdding(false)
        category.id = 0
        setCategories([...categories, category])

        setMsgAlert(`Categoria (${category.id}) criada com sucesso!`)
        showAlert(true)
        setTxtButton('Adicionar')
    }

    /** Delete */
    const deleteRegister = id => {
        setEditing(false)
        setCategories(categories.filter(category => category.id !== id))

        setMsgAlert(`Categoria (${id}) deletada com sucesso!`)
        showAlert(true)
    }

    /** Start Edit */
    const startEditRow = category => {
        setEditing(true)
        setCurrentCategory(category)
        setTxtButton('Voltar')
    }

    /** End Edit */
    const endEditRow = (id, updatedCategory) => {
        setEditing(false)
        setCategories(categories.map(category => (category.id === id ? updatedCategory : category)))

        setMsgAlert(`Categoria (${id}) modificada com sucesso!`)
        showAlert(true)
        setTxtButton('Adicionar')
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
                                            <EditCategory currentRegister={currentCategory} endEditRow={endEditRow} />
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
                                            <ListCategory list={categories} startEditRow={startEditRow} deleteRegister={deleteRegister} />
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