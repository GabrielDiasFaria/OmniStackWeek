import React from 'react'
import globalConfig from '../../../utils/globalConfig'
import { FiUser, FiMessageSquare } from 'react-icons/fi'

export default function ListBlog({ list, loading }) {

    if (loading) {
        return (
            <div className="spinner"></div>
        )
    }

    return (
        list.length > 0 ? (
            list.map(line => (
                <div className="col-md-4 cardBlog" id={line._id}>
                    <section class="panel">
                        <div class="wdgt-row">
                            <img className="zoom" src={globalConfig.baseURL + '/images/' + line.image} alt="" height="280" width="582"></img>
                        </div>
                        <div className="panel-body">
                            <a class='btn btn-link titleCard' href={`/Blog/PostView/${line._id}/${line.title}`}><h3>{line.title}</h3></a>
                            <br></br>
                            <div>
                                <span className="btnCard"><FiUser /> {line.author_name}</span>
                                <span className="btnCard"><FiMessageSquare /> 0 Comentários</span>
                            </div>
                            <br></br><br></br>
                            <h5>
                                {line.description}
                            </h5>
                        </div>
                    </section>
                </div>
            ))
        ) : (
                <tr>
                    <td colSpan={3}>No Posts</td >
                </tr >
            )
    )
}