import React from 'react';
// import globalConfig from '../utils/globalConfig'

const Pagination = ({ linesPerPage, totalLines, paginate }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalLines / linesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="dataTables_paginate paging_bootstrap pagination">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="">
                        <a hfer="!#" onClick={() => paginate(number)} className="">{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
