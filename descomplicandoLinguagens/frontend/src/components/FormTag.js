import React from 'react';

export default function FormTag({ tag, handleInputChange, typeChange }) {
    return (
        <div className="position-center">
            <div className="col-sm-12">
                <h4>{typeChange}</h4>
                <br />

                <div className="form-group">
                    <label for="category_id" className="bmd-label-floating">#</label>
                    <input placeholder="Id" disabled name="id" className="form-control" id="category_id" value={tag.id} onChange={handleInputChange}></input>
                </div>

                <div className="form-group">
                    <label for="category_name" className="bmd-label-floating">Tag - Nome</label>
                    <input placeholder="Nome" type="" name="name" className="form-control" id="category_name" value={tag.name} onChange={handleInputChange}></input>
                    <span className="bmd-help">O nome é como aparece em seu site.</span>
                </div>

                <div className="form-group">
                    <label for="category_description" className="bmd-label-floating">Tag Descrição</label>
                    <textarea placeholder="Descrição" className="form-control" name="description" id="category_description" rows="1" value={tag.description} onChange={handleInputChange}></textarea>
                    <span className="bmd-help">A descrição não está em destaque por padrão, no
                                    entanto alguns temas podem mostrá-la.</span>
                </div>

                <div className="form-group">
                    <label for="category_slug" className="bmd-label-floating">Tag - Slug</label>
                    <input placeholder="Slug" className="form-control" name="slug" id="category_slug" value={tag.slug} onChange={handleInputChange}></input>
                    <span className="bmd-help">O “slug” é uma versão amigável do URL. Normalmente,
                                    é todo em minúsculas e contém apenas letras, números e hífens.</span>
                </div>

                <button type="submit" class="btn btn-round btn-primary">
                    Salvar
                </button>
            </div>
        </div>
    )
}