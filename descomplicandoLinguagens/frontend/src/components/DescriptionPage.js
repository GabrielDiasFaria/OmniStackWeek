import React from 'react';
import { FiHome } from 'react-icons/fi'

export default function DescriptionPage({ description }) {
    return (
        // <h3 className="bd-title contentDescription">{description}</h3>
        <div className="row">
            <div className="col-md-12">
                <ul className="breadcrumb">
                    <li><a href="#"><FiHome /> Home</a></li>
                    <li><a href="#">{description}</a></li>
                </ul>
            </div>
        </div>
    )
}
