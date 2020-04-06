import React, { useState, Fragment } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import Menu from '../../../components/menu/Menu'
import NewPost from '../containers/NewPost'
import EditorPost from '../containers/EditPost'
import ListCategory from '../containers/ListPost'


export default function PageListPost() {

    const listPosts = [
        { id: 1, description: 'Tabela SM30', tag: 'SAP, ABAP', category: 'SAP', html: '<h1>Ae&nbsp;</h1><p> Teste</p>' },
    ]
    const initialFormState = { id: 0, description: '', tag: '', category: '', html: '' }

    const [posts, setPosts] = useState(listPosts)
    const [currentPost, setCurrentPost] = useState(initialFormState)

    // const [post, setPost] = useState('<h1>Ae&nbsp;</h1><p> Teste</p>')
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

    /** Delete */
    const deleteRegister = id => {
        setEditing(false)
        setPosts(posts.filter(post => post.id !== id))

        setMsgAlert(`Post (${id}) deletado com sucesso!`)
        showAlert(true)
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
    const endAddPost = post => {
        setAdding(false)
        post.id = 0
        setPosts([...posts, post])

        setMsgAlert(`Post (${post.id}) criadao com sucesso!`)
        showAlert(true)
        setTxtButton('Adicionar')
    }

    /** Start Edit */
    const startEditRow = post => {
        setEditing(true)
        setCurrentPost(post)
        setTxtButton('Voltar')
    }

    /** End Edit */
    const endEditRow = (id, updatedPost) => {
        setEditing(false)
        setPosts(posts.map(post => (post.id === id ? updatedPost : post)))

        setMsgAlert(`Post (${id}) modificado com sucesso!`)
        showAlert(true)
        setTxtButton('Adicionar')
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
                                            <EditorPost post={currentPost} endEditRow={endEditRow} />
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
                                            <ListCategory list={posts} startEditRow={startEditRow} deleteRegister={deleteRegister} />
                                        </Fragment>
                                    ) : (false)
                                }
                                {/* <EditorPost post={post} setPost={setPost} /> */}
                            </div>
                        </section>
                    </div>
                </div>
            </section>

        </section>
    )
}