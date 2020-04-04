import React from 'react'
import { FiTrash, FiEdit } from 'react-icons/fi'

import logoAvatar from '../../../_assets/img/avatar.jpg'

export default function ListPost({ list, startEditRow, deleteRegister }) {
    return (
        <section id="unseen">
            <table className="table table-hover table-striped table-condensed" >
                <thead className="thead-color">
                    <tr>
                        <th>#</th>
                        <th>Avatar</th>
                        <th>Descrição</th>
                        <th>Tag</th>
                        <th>Categoria</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.length > 0 ? (
                            list.map(line => (
                                <tr key={line.id}>
                                    <td>{line.id}</td>
                                    <td><img src={logoAvatar} alt="Post Img" /></td>
                                    <td>{line.description}</td>
                                    <td>{line.tag}</td>
                                    <td>{line.category}</td>
                                    <td>
                                        <button onClick={() => { startEditRow(line) }} className="btn icon_default">
                                            <FiEdit size={16} />
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => { deleteRegister(line.id) }} className="btn icon_default">
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