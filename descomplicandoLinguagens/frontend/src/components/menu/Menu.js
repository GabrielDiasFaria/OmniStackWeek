import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiChevronDown, FiBell, FiKey, FiMenu } from 'react-icons/fi'

import logoImg from '../../_assets/img/Logo-Descomplicando-Linguagens.png'

import './style.css'

export default function Menu({ activeOption }) {

    let actvDashboard, actvTag, actvUser, actvCategory, actvPost = ''
    const user_Name = localStorage.getItem('user_Name')
    const user_Avatar = localStorage.getItem('user_Avatar')
    const history = useHistory()

    useEffect(() => {
        function validateSession() {
            if (user_Name === "" || !user_Name) {
                history.push('/Blog')
            }
        }
        validateSession()
    }, [user_Name, history])

    const loggout = (e) => {
        e.preventDefault()
        localStorage.setItem('user_Id', "")
        localStorage.setItem('user_Name', "")
        localStorage.setItem('user_Email', "")
        localStorage.setItem('user_Avatar', "")

        history.push('/Blog')
    }

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
                                <Link to="/Blog/ListMidia" className="colorWhite">
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
                                    <img alt="" src={user_Avatar}></img>
                                    <span className="username"> {user_Name}</span>
                                    <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu extended logout">
                                    <li><a href="/"><FiBell /> Notificações <span className="badge bg-success">8</span></a></li>
                                    <li><a href="/" onClick={e => { loggout(e) }}><FiKey /> Log Out</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>

                </div>

            </header>
        </section>
    )
}