import React from 'react';
import { Link } from 'react-router-dom'
import { FiBell, FiUser } from 'react-icons/fi'

import logoImg from '../../assets/Logo-Descomplicando-Linguagens.png'

import './style.css'

export default function Profile() {
    return (
        <div class="pos-f-t">
            {/* navbar-expand-lg -> Basta colocar para começar com aberto */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <img className="navbar-brand" src={logoImg} width="70" height="60" alt="Descomplicando L"></img>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100 order-1 order-md-0" id="navbarNav">
                    <Link to="/dashboard" className="btn btn-sm profile_navLink">
                        Dashboard
                    </Link>
                    <div class="dropdown dropleft">
                        <button className="btn dropdown-toggle btn-sm profile_navLink" type="button" id="dropBlogpost" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blogposts
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropBlogpost">
                            <p className="dropdown-item" >
                                <Link to="/posts">
                                    Posts
                                </Link>
                            </p>
                            <p className="dropdown-item" >
                                <Link to="/categories">
                                    Categorias
                                </Link>
                            </p>
                            <p className="dropdown-item" >
                                <Link to="/tags">
                                    Tags
                                </Link>
                            </p>
                        </div>
                    </div>
                    <Link to="/midias" className="btn btn-sm profile_navLink">
                        Mídias
                    </Link>
                    <Link to="/pages" className="btn btn-sm profile_navLink">
                        Páginas
                    </Link>
                    <Link to="/plugins" className="btn btn-sm profile_navLink">
                        Plugins
                    </Link>
                    <Link to="/users" className="btn btn-sm profile_navLink">
                        Usuários
                    </Link>
                    <Link to="/configuration" className="btn btn-sm profile_navLink">
                        Configuração
                    </Link>
                </div>
                <div className="collapse navbar-collapse text-md-right">

                    <div class="dropdown dropleft">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FiBell size={16} className="profileFiBell" />
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p className="dropdown-item" >Action 1</p>
                            <p className="dropdown-item" >Action 2</p>
                            <p className="dropdown-item" >Action 3</p>
                        </div>
                    </div>

                    <button className="btn profile_title_user">
                        <span>Olá, Gabriel</span>
                        <FiUser size={20} className="profile_navLink_Icon" />
                    </button>

                </div>
            </nav>
        </div>
    )
}