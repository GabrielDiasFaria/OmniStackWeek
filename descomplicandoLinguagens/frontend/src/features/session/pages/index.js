import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiKey, FiPlusCircle } from 'react-icons/fi'

import logoImg from '../../../_assets/img/Logo-Descomplicando-Linguagens.png'

import '../styles/style.css'

export default function Session() {

    const history = useHistory()

    async function handlerLogin(e) {
        e.preventDefault()

        try {
            history.push('/Blog/dashboard')
        } catch (err) {
            alert('Falha no Login')
        }
    }

    return (
        <div className="session_container container">
            <div className="row">

                <div className="col-sm-6 session_logo text-center">
                    <img src={logoImg} alt="Heroes" />
                </div>

                <div className="col-sm-6 divider">
                    <form className="session_form" onSubmit={handlerLogin}>
                        <h1 className="">Faça seu Logon</h1>

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-8">
                                <input placeholder="Email" type="email"></input>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-8">
                                <input placeholder="Password" type="password"></input>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-8">
                                <button type="submit">Acessar</button>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-4">
                                <Link to="/Blog/register" className="session_link">
                                    <FiKey size={16} className="session_link_icon" />
                                    Esqueci a Senha
                                </Link>
                            </div>
                            <div className="col-sm-4">
                                <Link to="/Blog/register" className="session_link">
                                    <FiPlusCircle size={16} className="session_link_icon" />
                                    Cadastre-se
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}