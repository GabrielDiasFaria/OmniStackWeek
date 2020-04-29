import React from 'react';

export default function FormUser({ user, handleInputChange, handleInputChangeCk, resetPassword }) {

    return (

        <section className="panel">
            <header className="panel-heading tab-bg-dark-navy-blue">
                <ul className="nav nav-tabs nav-justified ">
                    <li className="active">
                        <a data-toggle="tab" href="#general">Dados Gerais</a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#permission">Permissões</a>
                    </li>
                </ul>
            </header>
            <div className="panel-body">
                <div className="tab-content tasi-tab">
                    <div id="general" className="tab-pane active">
                        <div className="position-center">
                            <div className="form-group">
                                <label for="user_id" className="bmd-label-floating">#</label>
                                <input placeholder="Id" disabled name="id" className="form-control" id="user_id" value={user._id} onChange={handleInputChange}></input>
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
                                {/* <input placeholder="Profile" type="" name="profile" className="form-control" id="user_profile" value={user.profile} onChange={handleInputChange}></input> */}
                                <textarea placeholder="Profile" className="form-control" name="profile" id="user_profile" rows="3" value={user.profile} onChange={handleInputChange}></textarea>
                            </div>

                            <div className="form-group">
                                <label for="user_email" className="bmd-label-floating">User - Email</label>
                                <input placeholder="Email" type="" name="email" className="form-control" id="user_email" value={user.email} onChange={handleInputChange}></input>
                            </div>

                            <div className="form-group">
                                <label for="avatar" className="bmd-label-floating">User - Avatar</label>
                                <textarea placeholder="Avatar" className="form-control" name="avatar" id="user_avatar" rows="2" value={user.avatar} onChange={handleInputChange}></textarea>
                            </div>

                        </div>
                    </div>
                    <div id="permission" className="tab-pane">
                        {/* Posts */}
                        <div className="form-group">
                            <label className="col-sm-1 control-label">Posts</label>
                            <div className="col-sm-2 icheck">
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="posts.view" checked={user.permission.posts.view} value={user.permission.posts.view} onChange={handleInputChangeCk} ></input>
                                    <label>View</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="posts.update" checked={user.permission.posts.update} value={user.permission.posts.update} onChange={handleInputChangeCk} ></input>
                                    <label>Update</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="posts.create" checked={user.permission.posts.create} value={user.permission.posts.create} onChange={handleInputChangeCk} ></input>
                                    <label>Create</label>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="form-group">
                            <label className="col-sm-1 control-label">Tags</label>
                            <div className="col-sm-2 icheck">
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="tags.view" checked={user.permission.tags.view} value={user.permission.tags.view} onChange={handleInputChangeCk} ></input>
                                    <label>View</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="tags.update" checked={user.permission.tags.update} value={user.permission.tags.update} onChange={handleInputChangeCk} ></input>
                                    <label>Update</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="tags.create" checked={user.permission.tags.create} value={user.permission.tags.create} onChange={handleInputChangeCk} ></input>
                                    <label>Create</label>
                                </div>
                            </div>
                        </div>

                        {/* Categorias */}
                        <div className="form-group">
                            <label className="col-sm-1 control-label">Categories</label>
                            <div className="col-sm-2 icheck">
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="categories.view" checked={user.permission.categories.view} value={user.permission.categories.view} onChange={handleInputChangeCk} ></input>
                                    <label>View</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="categories.update" checked={user.permission.categories.update} value={user.permission.categories.update} onChange={handleInputChangeCk} ></input>
                                    <label>Update</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="categories.create" checked={user.permission.categories.create} value={user.permission.categories.create} onChange={handleInputChangeCk} ></input>
                                    <label>Create</label>
                                </div>
                            </div>
                        </div>

                        {/* Usuários */}
                        <div className="form-group">
                            <label className="col-sm-1 control-label">Users</label>
                            <div className="col-sm-2 icheck">
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="users.view" checked={user.permission.users.view} value={user.permission.users.view} onChange={handleInputChangeCk} ></input>
                                    <label>View</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="users.update" checked={user.permission.users.update} value={user.permission.users.update} onChange={handleInputChangeCk} ></input>
                                    <label>Update</label>
                                </div>
                                <div className="checkbox single-row">
                                    <input type="checkbox" name="users.create" checked={user.permission.users.create} value={user.permission.users.create} onChange={handleInputChangeCk} ></input>
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
            <a href="/#" onClick={e => { resetPassword(user._id) }} className="btn btn-round btn-danger btnResetPass">
                Resetar Password
            </a>
        </section>

    )
}