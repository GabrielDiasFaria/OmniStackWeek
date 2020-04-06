import React from 'react';
import { Link } from 'react-router-dom'
import { FiChevronDown, FiBell, FiKey, FiMenu } from 'react-icons/fi'

import logoImg from '../../_assets/img/Logo-Descomplicando-Linguagens.png'
import logoAvatar from '../../_assets/img/avatar.jpg'

import './style.css'

export default function Menu({ activeOption }) {

    let actvBlogPost, actvDashboard, actvTag, actvUser, actvCategory, actvPost = ''

    switch (activeOption) {
        case "Dashboard":
            actvDashboard = "active"
            break
        case "Tag":
            actvTag = "active"
            break
        case "Category":
            actvCategory = "active"
            break
        case "Post":
            actvPost = "active"
            break
        case "User":
            actvUser = "active"
            break
        default:
            break
    }

    return (
        <section id="container" className="hr-menu">

            <header className="header fixed-top">

                <div className="navbar-header backgroundTheme2">

                    <button type="button" className="navbar-toggle hr-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span><FiMenu /></span>
                    </button>

                    <div className="brand backgroundTheme">
                        <a href="index.html" className="logo">
                            <img className="navbar-brand brand_logo" src={logoImg} alt="Descomplicando L"></img>
                        </a>
                    </div>

                    <div className="horizontal-menu navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className={actvDashboard}>
                                <Link to="/Blog/Dashboard" className="colorWhite">
                                    Dashboard
                                </Link>
                            </li>

                            <li className="dropdown">
                                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle colorWhite" href="/">
                                    Blogposts <b><FiChevronDown /></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className={actvPost}><Link to="/Blog/ListPost">Posts</Link></li>
                                    <li className={actvCategory} ><Link to="/Blog/ListCategory">Categorias</Link></li>
                                    <li className={actvTag}><Link to="/Blog/ListTag">Tags</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/Blog/Dashboard" className="colorWhite">
                                    Mídias
                                </Link>
                            </li>
                            <li>
                                <Link to="/Blog/Dashboard" className="colorWhite">
                                    Páginas
                                </Link>
                            </li>
                            <li>
                                <Link to="/Blog/Dashboard" className="colorWhite">
                                    Plugins
                                </Link>
                            </li>
                            <li className={actvUser}>
                                <Link to="/Blog/ListUser" className="colorWhite">
                                    Usuários
                                </Link>
                            </li>
                            <li>
                                <Link to="/Blog/Dashboard" className="colorWhite">
                                    Configuração
                                </Link>
                            </li>

                        </ul>

                    </div>

                    <div className="top-nav hr-top-nav">

                        <ul className="nav pull-right top-menu">

                            <li className="dropdown">
                                <input type="text" className="form-control search" placeholder=" Search"></input>
                            </li>

                            <li className="dropdown">
                                <a data-toggle="dropdown" className="dropdown-toggle" href="/">
                                    <img alt="" src={logoAvatar}></img>
                                    <span className="username"> Gabriel Dias</span>
                                    <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu extended logout">
                                    <li><a href="/"><FiBell /> Notificações <span className="badge bg-success">8</span></a></li>
                                    <li><a href="/"><FiKey /> Log Out</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>

                </div>

            </header>
        </section>
        // <div className="pos-f-t">
        //     {/* navbar-expand-lg -> Basta colocar para começar com aberto */}
        //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //         <div>
        //             <img className="navbar-brand brand_logo" src={logoImg} alt="Descomplicando L"></img>
        //         </div>

        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse w-100 order-1 order-md-0" id="navbarNav">
        //             <Link to="/Blog/Dashboard" className="btn btn-sm profile_navLink">
        //                 Dashboard
        //             </Link>
        //             <div className="dropdown dropleft">
        //                 <button className="btn dropdown-toggle btn-sm profile_navLink" type="button" id="dropBlogpost" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                     Blogposts
        //                 </button>
        //                 <div className="dropdown-menu" aria-labelledby="dropBlogpost">
        //                     <p className="dropdown-item" >
        //                         <Link to="/Blog/Posts" className="drop_item">
        //                             POSTS
        //                         </Link>
        //                     </p>
        //                     <p className="dropdown-item" >
        //                         <Link to="/Blog/ListCategory" className="drop_item">
        //                             CATEGORIAS
        //                         </Link>
        //                     </p>
        //                     <p className="dropdown-item" >
        //                         <Link to="/Blog/ListTag" className="drop_item">
        //                             TAGS
        //                         </Link>
        //                     </p>
        //                 </div>
        //             </div>
        //             <Link to="/Blog/Midias" className="btn btn-sm profile_navLink">
        //                 Mídias
        //             </Link>
        //             <Link to="/Blog/Pages" className="btn btn-sm profile_navLink">
        //                 Páginas
        //             </Link>
        //             <Link to="/Blog/Plugins" className="btn btn-sm profile_navLink">
        //                 Plugins
        //             </Link>
        //             <Link to="/Blog/Users" className="btn btn-sm profile_navLink">
        //                 Usuários
        //             </Link>
        //             <Link to="/Blog/Configuration" className="btn btn-sm profile_navLink">
        //                 Configuração
        //             </Link>
        //         </div>
        //         <div className="collapse navbar-collapse text-md-right">

        //             <div className="dropdown dropleft">
        //                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                     <FiBell size={16} className="profileFiBell" />
        //                 </button>
        //                 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        //                     <p className="dropdown-item" >Action 1</p>
        //                     <p className="dropdown-item" >Action 2</p>
        //                     <p className="dropdown-item" >Action 3</p>
        //                 </div>
        //             </div>

        //             <button className="btn profile_title_user">
        //                 <p className="profile_title_font">Olá, Gabriel <FiUser size={20} className="profile_navLink_Icon" /></p>
        //             </button>

        //         </div>
        //     </nav>
        // </div>
    )
}