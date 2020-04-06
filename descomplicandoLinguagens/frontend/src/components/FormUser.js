import React from 'react';

export default function FormUser({ user, handleInputChange, typeChange, handleInputChangeCk }) {

    return (

        <section className="panel">
            {/* <h4>{typeChange}</h4>
            <br /> */}
            <header className="panel-heading tab-bg-dark-navy-blue">
                <ul className="nav nav-tabs nav-justified ">
                    <li className="active">
                        <a data-toggle="tab" href="#general">
                            Dados Gerais
                                </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#permission">
                            Permissões
                                </a>
                    </li>
                </ul>
            </header>
            <div className="panel-body">
                <div className="tab-content tasi-tab">
                    <div id="general" className="tab-pane active">
                        <div className="position-center">
                            <div className="form-group">
                                <label for="user_id" className="bmd-label-floating">#</label>
                                <input placeholder="Id" disabled name="id" className="form-control" id="user_id" value={user.id} onChange={handleInputChange}></input>
                            </div>

                            <div className="form-group">
                                <label for="user_name" className="bmd-label-floating">User - Nome</label>
                                <input placeholder="Nome" type="" name="name" className="form-control" id="user_name" value={user.name} onChange={handleInputChange}></input>
                            </div>

                            <div className="form-group">
                                <label for="user_function" className="bmd-label-floating">User - Função</label>
                                <input placeholder="Função" type="" name="function" className="form-control" id="user_function" value={user.function} onChange={handleInputChange}></input>
                            </div>

                            <div className="form-group">
                                <label for="user_profile" className="bmd-label-floating">User - Profile</label>
                                <input placeholder="Profile" type="" name="profile" className="form-control" id="user_profile" value={user.profile} onChange={handleInputChange}></input>
                            </div>

                            <div className="form-group">
                                <label for="user_email" className="bmd-label-floating">User - Email</label>
                                <input placeholder="Email" type="" name="email" className="form-control" id="user_email" value={user.email} onChange={handleInputChange}></input>
                            </div>

                        </div>
                    </div>
                    <div id="permission" className="tab-pane">
                        {/* Posts */}
                        <div className="form-group">
                            <label className="col-sm-1 control-label">Posts</label>
                            <div className="col-sm-2 icheck">
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="post.view" checked={user.permission.post.view} value={user.permission.post.view} onChange={handleInputChangeCk} ></input>
                                    <label>View</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="post.update" checked={user.permission.post.update} value={user.permission.post.update} onChange={handleInputChangeCk} ></input>
                                    <label>Update</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="post.create" checked={user.permission.post.create} value={user.permission.post.create} onChange={handleInputChangeCk} ></input>
                                    <label>Create</label>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="form-group">
                            <label className="col-sm-1 control-label">Tags</label>
                            <div className="col-sm-2 icheck">
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="tag.view" checked={user.permission.tag.view} value={user.permission.tag.view} onChange={handleInputChangeCk} ></input>
                                    <label>View</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="tag.update" checked={user.permission.tag.update} value={user.permission.tag.update} onChange={handleInputChangeCk} ></input>
                                    <label>Update</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="tag.create" checked={user.permission.tag.create} value={user.permission.tag.create} onChange={handleInputChangeCk} ></input>
                                    <label>Create</label>
                                </div>
                            </div>
                        </div>

                        {/* Usuários */}
                        <div className="form-group">
                            <label className="col-sm-1 control-label">Users</label>
                            <div className="col-sm-2 icheck">
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="user.view" checked={user.permission.user.view} value={user.permission.user.view} onChange={handleInputChangeCk} ></input>
                                    <label>View</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="user.update" checked={user.permission.user.update} value={user.permission.user.update} onChange={handleInputChangeCk} ></input>
                                    <label>Update</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="user.create" checked={user.permission.user.create} value={user.permission.user.create} onChange={handleInputChangeCk} ></input>
                                    <label>Create</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-round btn-primary">
                Salvar
            </button>
        </section>

    )
}