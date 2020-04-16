import React, { useState, Fragment } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import api from '../../../services/api'

import Menu from '../../../components/menu/Menu'
import ListTag from '../containers/ListTag'
import NewTag from '../containers/NewTag'
import EditTag from '../containers/EditTag'

import '../styles/style_tag.css'

export default function PageListTag() {

    const initialFormState = { _id: 0, name: '', description: '', slug: '' }

    const [_id, setId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [slug, setSlug] = useState('')
    const data = {
        _id,
        name,
        description,
        slug
    }

    const [tags, setTags] = useState([])
    const [currentTag, setCurrentTag] = useState(initialFormState)
    const [editing, setEditing] = useState(false)
    const [adding, setAdding] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [boolAlert, setBoolAlert] = useState(false)
    const [txtButton, setTxtButton] = useState('Adicionar')

    const fetchTag = async () => {
        const response = await api.get('tags')
        setTags(response.data)
        // setTags([
        //     { id: 1, name: 'SAP', description: 'Descrição aqui...', slug: 'SAP' },
        //     { id: 2, name: 'ABAP', description: 'Descrição aqui...', slug: 'ABAP' },
        //     { id: 3, name: 'ABAPS', description: 'Descrição aqui vai...', slug: 'ABAPS' }
        // ])
    }

    /** Delete Tag */
    const deleteTag = async id => {
        setEditing(false)
        // setTags(tags.filter(tag => tag.id !== id))
        const response = await api.delete(`tags/${id}`)

        setMsgAlert(`Tag (${id}) deletada com sucesso!`)
        showAlert()

        fetchTag()
    }

    /** End New */
    const endAddTag = async tag => {
        setAdding(false)
        const response = await api.post('tags', tag)

        setMsgAlert(`Tag (${tag.id}) criada com sucesso!`)
        showAlert()
        setTxtButton('Adicionar')

        fetchTag()
    }

    /** Start New */
    const startAddTag = () => {
        if (editing || adding) {
            setAdding(false)
            setEditing(false)
            setTxtButton('Adicionar')
        } else {
            setAdding(true)
            setTxtButton('Voltar')
        }
    }

    /** Start Edit */
    const startEditRow = tag => {
        setEditing(true)
        setCurrentTag(tag)
        setTxtButton('Voltar')
    }

    /** End Edit */
    const endEditRow = async (id, updatedTag) => {
        setEditing(false)
        // setTags(tags.map(tag => (tag.id === id ? updatedTag : tag)))
        const response = await api.put(`tags/${id}`, updatedTag)

        setMsgAlert(`Tag (${id}) modificada com sucesso!`)
        showAlert()
        setTxtButton('Adicionar')

        fetchTag()
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
                {<Menu activeOption="Tag" />}
            </header>

            <SweetAlert success show={boolAlert} title={msgAlert} onConfirm={hideAlert}>
            </SweetAlert>

            <section className="wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <section className="panel">
                            <header className="panel-heading">
                                Lista de Tags
                                <span className="tools pull-right">
                                    <button type="button" className="btn btn-round btn-primary tagAddBtn" onClick={startAddTag}>
                                        {txtButton}
                                    </button>
                                    <button type="button" className="btn btn-round btn-default tagAddBtn" onClick={fetchTag}>
                                        Pesquisar
                                    </button>
                                </span>
                            </header>
                            <div className="panel-body">

                                {
                                    editing ? (
                                        <Fragment>
                                            <EditTag currentTag={currentTag} endEditRow={endEditRow} />
                                        </Fragment>
                                    ) : (false)
                                }

                                {
                                    adding ? (
                                        <Fragment>
                                            <NewTag endAddTag={endAddTag} />
                                        </Fragment>
                                    ) : (false)
                                }

                                {
                                    !editing && !adding ? (
                                        <Fragment>
                                            <ListTag tags={tags} startEditRow={startEditRow} deleteTag={deleteTag} />
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












// <div className="default_container">
        //     {/* Menu Default */}
        //     <header>
        //         {Menu()}
        //     </header>

        //     {/* Page Tags */}
        //     <div>

        //         {/* Descrição da Page */}
        //         <DescriptionPage description="Tags" />

        //         <SweetAlert success show={boolAlert} title={msgAlert} onConfirm={hideAlert}>
        //         </SweetAlert>

        //         {/* <Link to="/Blog/new_tag" className="floatSquare">
        //             Adicionar
        //         </Link> */}
        //         <button className="floatSquare" onClick={startAddTag}>
        //             Adicionar
        //         </button>

        //         <hr />

        //         <div className="mTop45px">

        //             {
        //                 editing ? (
        //                     <Fragment>
        //                         <EditTag currentTag={currentTag} endEditRow={endEditRow} />
        //                     </Fragment>
        //                 ) : (false)
        //             }

        //             {
        //                 adding ? (
        //                     <Fragment>
        //                         <NewTag endAddTag={endAddTag} />
        //                     </Fragment>
        //                 ) : (false)
        //             }

        //             {
        //                 !editing && !adding ? (
        //                     <Fragment>
        //                         <ListTag tags={tags} startEditRow={startEditRow} deleteTag={deleteTag} />
        //                     </Fragment>
        //                 ) : (false)
        //             }

        //         </div>

        //     </div>
        // </div>