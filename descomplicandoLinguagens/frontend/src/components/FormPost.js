import React from 'react';

import DropDownTags from '../components/DropDownTags'
import DropDownCategories from './DropDownCategories'

export default function FormPost({ post, handleDropChange, handleInputChange, typeChange }) {

    return (
        <div className="position-center">
            <div className="col-sm-12">
                <h4>{typeChange}</h4>
                <br />

                <div className="form-group">
                    <label for="id" className="bmd-label-floating">#</label>
                    <input placeholder="Id" disabled name="id" className="form-control" id="id" value={post._id} onChange={handleInputChange}></input>
                </div>

                <div className="form-group">
                    <label for="description" className="bmd-label-floating">Post Descrição</label>
                    <textarea placeholder="Descrição" className="form-control" name="description" id="post_description" rows="3" value={post.description} onChange={handleInputChange}></textarea>
                </div>

                {/* <div className="form-group">
                    <label for="pag" className="bmd-label-floating">Post - Tag</label>
                    <input placeholder="Tag" className="form-control" name="tag" id="tag" value={valueDropTag} onChange={handleInputChange}></input>
                </div> */}

                {/* <div className="form-group">
                    <label for="category" className="bmd-label-floating">Post - Categoria</label>
                    <input placeholder="Categoria" className="form-control" name="category" id="post_category" value={post.category} onChange={handleInputChange}></input>
                </div> */}

                <DropDownTags handleDropChange={handleDropChange} currentValue={post.tag} />

                <DropDownCategories handleDropChange={handleDropChange} currentValue={post.category} />

            </div>
        </div>
    )
}