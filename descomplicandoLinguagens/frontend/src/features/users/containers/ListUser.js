import React from 'react'
import { FiTrash, FiEdit } from 'react-icons/fi'
import globalConfig from '../../../utils/globalConfig'

export default function ListUser(
    {
        list,
        startEditRow,
        deleteRegister,
        loading
    }) {

    if (loading) {
        return (
            <div className="spinner"></div>
        )
    }

    return (
        <section id="unseen">
            <table className="table table-hover table-striped table-condensed" >
                <thead className="thead-color">
                    <tr>
                        <th>#</th>
                        <th>Avatar</th>
                        <th>Nome</th>
                        <th>Função</th>
                        <th>Resumo Perfil</th>
                        <th>Email</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.length > 0 ? (
                            list.map(line => (
                                <tr key={line._id}>
                                    <td>{line._id}</td>
                                    <td><img src={globalConfig.baseURL + '/images/' + line.avatar} alt="User Img" width="50" height="50" /></td>
                                    <td>{line.name}</td>
                                    <td>{line.function}</td>
                                    <td>{line.profile}</td>
                                    <td><p>{line.email}</p></td>
                                    <td>
                                        <button onClick={() => { startEditRow(line) }} className="btn icon_default">
                                            <FiEdit size={16} />
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => { deleteRegister(line._id) }} className="btn icon_default">
                                            <FiTrash size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                                <tr>
                                    <td colSpan={3}>No Registers</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </section>
    )
}