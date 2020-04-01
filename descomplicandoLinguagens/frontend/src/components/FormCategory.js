import React from 'react';

export default function FormCategory({ category, handleInputChange, typeChange }) {
    return (
        <div className="position-center">
            <div className="col-sm-12">
                <h4>{typeChange}</h4>
                <br />

                <div className="form-group">
                    <label for="category_name" className="bmd-label-floating">#</label>
                    <input placeholder="Id" disabled name="id" className="form-control" id="category_id" value={category.id} onChange={handleInputChange}></input>
                </div>

                <div className="form-group">
                    <label for="category_name" className="bmd-label-floating">Categoria - Nome</label>
                    <input placeholder="Nome" type="" name="name" className="form-control" id="category_name" value={category.name} onChange={handleInputChange}></input>
                    <span className="bmd-help">O nome é como aparece em seu site.</span>
                </div>

                <div className="form-group">
                    <label for="category_description" className="bmd-label-floating">Categoria Descrição</label>
                    <textarea placeholder="Descrição" className="form-control" name="description" id="category_description" rows="1" value={category.description} onChange={handleInputChange}></textarea>
                    <span className="bmd-help">A descrição não está em destaque por padrão, no
                                    entanto alguns temas podem mostrá-la.</span>
                </div>

                <div className="form-group">
                    <label for="category_slug" className="bmd-label-floating">Categoria - Slug</label>
                    <input placeholder="Slug" className="form-control" name="slug" id="category_slug" value={category.slug} onChange={handleInputChange}></input>
                    <span className="bmd-help">O “slug” é uma versão amigável do URL. Normalmente,
                                    é todo em minúsculas e contém apenas letras, números e hífens.</span>
                </div>

                {/* <button type="submit" className="btn btn_default">
                        Salvar
                    </button> */}
                <button type="submit" class="btn btn-round btn-primary">
                    Salvar
                    </button>
            </div>
        </div>
    )
}