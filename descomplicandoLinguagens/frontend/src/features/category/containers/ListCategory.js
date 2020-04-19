import React from 'react'
import { FiTrash, FiEdit } from 'react-icons/fi'

export default function ListCategory(
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
        <table className="table table-hover table-striped" >
            <thead className="thead-color">
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Slug</th>
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
                                <td>{line.name}</td>
                                <td>{line.description}</td>
                                <td>{line.slug}</td>
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
    )
}