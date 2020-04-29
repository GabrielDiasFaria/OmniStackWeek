import React from 'react';
import { Link } from 'react-router-dom'
import { FiKey } from 'react-icons/fi'

import logoImg from '../../_assets/img/Logo-Descomplicando-Linguagens.png'
import logoAvatarDefault from '../../_assets/img/avatarDefault.png'

import './style.css'

export default function Menu({ activeOption }) {

    return (
        <section id="container" className="hr-menu">

            <header className="header fixed-top">

                <div className="navbar-header backgroundTheme2">

                    <button type="button" class="navbar-toggle hr-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="fa fa-bars"></span>
                    </button>

                    <div className="brand backgroundTheme">
                        <a href="/Blog" className="logo">
                            <img className="navbar-brand brand_logo" src={logoImg} alt="Descomplicando L"></img>
                        </a>
                    </div>

                    <div className="horizontal-menu navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="">
                                <Link to="#" className="colorWhite">
                                    Sobre
                                </Link>
                            </li>
                            <li className="">
                                <Link href="#" className="colorWhite">
                                    Contato
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
                                    <img alt="" src={logoAvatarDefault}></img>
                                    <span className="username"> Visitante</span>
                                    <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu extended logout">
                                    <li>
                                        <Link to="/Blog/Session">
                                            <FiKey /> Login
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                    </div>

                </div>

            </header>
        </section>
    )
}