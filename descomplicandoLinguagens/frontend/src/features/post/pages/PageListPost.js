import React, { useState, Fragment, useEffect } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import api from '../../../services/api'
import globalConfig from '../../../utils/globalConfig'
import Pagination from '../../../components/Pagination'

import Menu from '../../../components/menu/Menu'
import ListPost from '../containers/ListPost'
import NewPost from '../containers/NewPost'
import EditorPost from '../containers/EditPost'

export default function PageListPost() {

    // const listPosts = [
    //     { id: 1, description: 'Tabela SM30', tag: 'SAP, ABAP', category: 'SAP', html: '<h1>Ae&nbsp;</h1><p> Teste</p>' },
    // ]
    const initialFormState = { id: 0, description: '', tag: '', category: '', html: '' }

    const [posts, setPosts] = useState([])
    const [currentPost, setCurrentPost] = useState(initialFormState)
    const [boolAlert, setBoolAlert] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [editing, setEditing] = useState(false)
    const [adding, setAdding] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [txtButton, setTxtButton] = useState('Adicionar')
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchTag = async () => {
            setLoading(true)
            const response = await api.get('posts')
            setPosts(response.data)
            setLoading(false)
        }
        fetchTag()
    }, [editing, adding, deleting])

    const indexOfLastPost = currentPage * globalConfig.maxPageRegisters
    const indexOfFirstPost = indexOfLastPost - globalConfig.maxPageRegisters
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    /** Delete */
    const deleteRegister = async id => {
        setDeleting(true)
        await api.delete(`posts/${id}`)

        setMsgAlert(`Post (${id}) deletado com sucesso!`)
        showAlert()
        setCurrentPage(1)
        setDeleting(false)
    }

    /** Start New */
    const startAddPost = () => {
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
    const endAddPost = async post => {
        await api.post('posts', post, {
            headers: { Authorization: '1' }
        })

        setMsgAlert(`Post (${post.id}) criadao com sucesso!`)
        showAlert()
        setTxtButton('Adicionar')
        setAdding(false)
    }

    /** Start Edit */
    const startEditRow = post => {
        setEditing(true)
        setCurrentPost(post)
        setTxtButton('Voltar')
    }

    /** End Edit */
    const endEditRow = async (id, updatedPost) => {
        await api.put(`posts/${id}`, updatedPost)

        setMsgAlert(`Post (${id}) modificado com sucesso!`)
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
                {<Menu activeOption="Post" />}
            </header>

            <SweetAlert success show={boolAlert} title={msgAlert} onConfirm={hideAlert}>
            </SweetAlert>

            <section className="wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <section className="panel">
                            <header className="panel-heading">
                                Lista de Post
                                <span className="tools pull-right">
                                    <button type="button" className="btn btn-round btn-primary tagAddBtn" onClick={startAddPost}>
                                        {txtButton}
                                    </button>
                                </span>
                            </header>
                            <div className="panel-body">

                                {
                                    editing ? (
                                        <Fragment>
                                            <EditorPost
                                                post={currentPost}
                                                endEditRow={endEditRow}
                                            />
                                        </Fragment>
                                    ) : (false)
                                }

                                {
                                    adding ? (
                                        <Fragment>
                                            <NewPost endAddRegister={endAddPost} />
                                        </Fragment>
                                    ) : (false)
                                }

                                {
                                    !editing && !adding ? (
                                        <Fragment>
                                            <ListPost
                                                list={currentPosts}
                                                startEditRow={startEditRow}
                                                deleteRegister={deleteRegister}
                                                loading={loading}
                                            />
                                            <Pagination
                                                linesPerPage={globalConfig.maxPageRegisters}
                                                totalLines={posts.length}
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