import React, { useState, Fragment, useEffect } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import api from '../../../services/api'
import globalConfig from '../../../utils/globalConfig'
import Pagination from '../../../components/Pagination'

import Menu from '../../../components/menu/Menu'
import ListMidia from '../containers/ListMidia'
import UploadMidia from '../containers/UploadMidia'

export default function PageListMidia() {

    const [midias, setMidias] = useState([])
    const [boolAlert, setBoolAlert] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [txtButton, setTxtButton] = useState('Adicionar')
    const [adding, setAdding] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchMidia = async () => {
            setLoading(true)
            const response = await api.get('midias')
            setMidias(response.data)
            setLoading(false)
        }
        fetchMidia()
    }, [adding, deleting])

    const indexOfLastPost = currentPage * globalConfig.maxPageRegisters
    const indexOfFirstPost = indexOfLastPost - globalConfig.maxPageRegisters
    const currentMidias = midias.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    /** Delete */
    const deleteRegister = async id => {
        setDeleting(true)
        await api.delete(`midias/${id}`)

        setMsgAlert(`Midia (${id}) deletada com sucesso!`)
        showAlert()
        setCurrentPage(1)
        setDeleting(false)
    }

    /** Start New */
    const startAddMidia = () => {
        if (adding) {
            setAdding(false)
            setTxtButton('Adicionar')
        } else {
            setAdding(true)
            setTxtButton('Voltar')
        }
    }

    /** End New */
    const endAddMidia = () => {
        setMsgAlert(`Mídia criada com sucesso!`)
        showAlert()
        setTxtButton('Adicionar')
        setCurrentPage(1)
        setAdding(false)
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
                <section className="panel">
                    <header className="panel-heading">
                        Lista de Mídias
                        <span className="tools pull-right"></span>
                    </header>
                    <div className="panel-body">
                        <div className="btn-group pull-right">
                            <button type="button" className="btn btn-warning btn-sm" onClick={startAddMidia}>{txtButton}</button>
                        </div>
                        {
                            adding ? (
                                <Fragment>
                                    <UploadMidia endAddMidia={endAddMidia} />
                                </Fragment>
                            ) : (false)
                        }
                        {
                            !adding ? (
                                <Fragment>
                                    <ListMidia
                                        list={currentMidias}
                                        deleteRegister={deleteRegister}
                                        loading={loading}
                                    />
                                    <Pagination
                                        linesPerPage={globalConfig.maxPageRegisters}
                                        totalLines={midias.length}
                                        paginate={paginate}
                                    />
                                </Fragment>
                            ) : (false)
                        }

                    </div>
                </section>

            </section>
        </section>
    )
}