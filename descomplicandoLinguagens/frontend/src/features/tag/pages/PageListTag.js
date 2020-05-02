import React, { useState, Fragment, useEffect } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import api from '../../../services/api'
import globalConfig from '../../../utils/globalConfig'
import Pagination from '../../../components/Pagination'

import Menu from '../../../components/menu/Menu'
import ListTag from '../containers/ListTag'
import NewTag from '../containers/NewTag'
import EditTag from '../containers/EditTag'

import '../styles/style_tag.css'

export default function PageListTag() {

    const initialFormState = { _id: 0, name: '', description: '', slug: '' }

    const [tags, setTags] = useState([])
    const [currentTag, setCurrentTag] = useState(initialFormState)
    const [editing, setEditing] = useState(false)
    const [adding, setAdding] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [boolAlert, setBoolAlert] = useState(false)
    const [txtButton, setTxtButton] = useState('Adicionar')
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchTag = async () => {
            setLoading(true)
            const response = await api.get('tags')
            setTags(response.data)
            setLoading(false)
        }
        fetchTag()
    }, [editing, adding, deleting])

    const indexOfLastPost = currentPage * globalConfig.maxPageRegisters
    const indexOfFirstPost = indexOfLastPost - globalConfig.maxPageRegisters
    const currentTags = tags.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    /** Delete Tag */
    const deleteTag = async id => {
        setDeleting(true)
        await api.delete(`tags/${id}`).then((response) => {
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

    /** End New */
    const endAddTag = async tag => {
        await api.post('tags', tag).then((response) => {
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
    const startEditRow = tag => {
        setEditing(true)
        setCurrentTag(tag)
        setTxtButton('Voltar')
    }

    /** End Edit */
    const endEditRow = async (id, updatedTag) => {
        await api.put(`tags/${id}`, updatedTag).then((response) => {
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
                                    <button type="button" className="btn btn-round btn-warning tagAddBtn" onClick={startAddTag}>
                                        {txtButton}
                                    </button>
                                </span>
                            </header>
                            <div className="panel-body">
                                {
                                    editing ? (
                                        <Fragment>
                                            <EditTag
                                                currentTag={currentTag}
                                                endEditRow={endEditRow}
                                            />
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
                                            <ListTag
                                                tags={currentTags}
                                                startEditRow={startEditRow}
                                                deleteTag={deleteTag}
                                                loading={loading}
                                            />
                                            <Pagination
                                                linesPerPage={globalConfig.maxPageRegisters}
                                                totalLines={tags.length}
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
