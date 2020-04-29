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
                    <label for="title" className="bmd-label-floating">Post - Título</label>
                    <input placeholder="Título" className="form-control" maxlength="20" name="title" id="post_title" value={post.title} onChange={handleInputChange}></input>
                </div>

                <div className="form-group">
                    <label for="description" className="bmd-label-floating">Post - Descrição</label>
                    <textarea placeholder="Descrição" className="form-control" maxlength="44" name="description" id="post_description" rows="3" value={post.description} onChange={handleInputChange}></textarea>
                </div>

                <div className="form-group">
                    <label for="image" className="bmd-label-floating">Post - Imagem</label>
                    <textarea placeholder="Imagem" className="form-control" name="image" id="post_image" rows="2" value={post.image} onChange={handleInputChange}></textarea>
                </div>

                <div className="form-group">
                    <label for="banner" className="bmd-label-floating">Post - Banner</label>
                    <textarea placeholder="Banner" className="form-control" name="banner" id="post_banner" rows="2" value={post.banner} onChange={handleInputChange}></textarea>
                </div>

                {/* <div className="form-group">
                    <label for="pag" className="bmd-label-floating">Post - Tag</label>
                    <input placeholder="Tag" className="form-control" name="tag" id="tag" value={valueDropTag} onChange={handleInputChange}></input>
                </div> */}

                {/* <div className="form-group">
                    <label for="category" className="bmd-label-floating">Post - Categoria</label>
                    <input placeholder="Categoria" className="form-control" name="category" id="post_category" value={post.category} onChange={handleInputChange}></input>
                </div> */}

                <DropDownTags handleDropChange={handleDropChange} currentValue={post.tag} textHelp="Post - Tag" />

                <DropDownCategories handleDropChange={handleDropChange} currentValue={post.category} textHelp="Post - Category" />

            </div>
        </div>
    )
}