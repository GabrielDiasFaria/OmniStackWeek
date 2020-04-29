import React, { useState, useEffect } from 'react'
import globalConfig from '../../../utils/globalConfig'
import { FiTrash, FiCopy } from 'react-icons/fi'

export default function ListMidia(
    {
        list,
        deleteRegister,
        loading
    }
) {

    const [listHtml, setListHtml] = useState([])

    function clipBoard(text) {
        const realUrl = globalConfig.baseURL + '/' + text

        var link = document.getElementById('modalExample')
        link.click()
        document.getElementById('linkCopy').innerHTML = text
    }

    useEffect(() => {

        const feedList = async () => {
            setListHtml([])
            setListHtml(
                list.length > 0 ? (
                    list.map(line => (
                        <div className="images item" key={line._id}>
                            <a href="#myModal" data-toggle="modal">
                                <img src={globalConfig.baseURL + line.file} alt=""></img>
                            </a>
                            <p>{line.name}</p>
                            <br></br>
                            <button onClick={(e) => { deleteRegister(line._id) }} className="btn icon_default">
                                <FiTrash size={16} />
                            </button>
                            <button onClick={(e) => clipBoard(line.name)} className="btn icon_default">
                                <FiCopy size={16} />
                            </button>
                        </div>
                    ))
                ) : (<tr><td colSpan={3}>No Registers</td></tr>)
            )
        }
        feedList()
    }, [list, deleteRegister])

    if (loading) {
        return (
            <div className="spinner"></div>
        )
    }

    return (
        <div id="gallery" className="media-gal">
            {
                listHtml
            }

            <a className="btn btn-success modalBtn" id="modalExample" data-toggle="modal" href="#myModal">
                Open Modal
            </a>
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">Link da Mídia</h4>
                        </div>
                        <div className="modal-body">
                            <p id="linkCopy" name="linkCopy"></p>
                        </div>
                        <div className="modal-footer">
                            <button data-dismiss="modal" className="btn btn-default" type="button">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
