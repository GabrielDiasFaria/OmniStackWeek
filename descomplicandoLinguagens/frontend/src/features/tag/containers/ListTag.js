import React from 'react'
import { FiTrash, FiEdit } from 'react-icons/fi'

export default function ListTag({
    tags,
    startEditRow,
    deleteTag,
    loading
}) {

    if (loading) {
        return (
            <div className="spinner"></div>
        )
    }

    return (
        <div>
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
                        tags.length > 0 ? (
                            tags.map(tag => (
                                <tr key={tag._id}>
                                    <td>{tag._id}</td>
                                    <td>{tag.name}</td>
                                    <td>{tag.description}</td>
                                    <td>{tag.slug}</td>
                                    <td>
                                        <button onClick={() => { startEditRow(tag) }} className="btn icon_default">
                                            <FiEdit size={16} />
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => { deleteTag(tag._id) }} className="btn icon_default">
                                            <FiTrash size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                                <tr>
                                    <td colSpan={3}>No tags</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}