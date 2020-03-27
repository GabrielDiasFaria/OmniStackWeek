import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'

export default function Register() {
    return (
        <div className="register_container container">

            <div className="row">

                <div className="col-sm-12">

                    <form className="register_form">

                        <h1>Vamos começar o seu cadastro!</h1>

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-4">
                                <input placeholder="Nome"></input>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-4">
                                <input placeholder="Email" type="email"></input>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-4">
                                <input placeholder="Senha"></input>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-4">
                                <input placeholder="Confirmar Senha"></input>
                            </div>
                        </div>

                        <div className="register_div_button row d-flex justify-content-center">
                            <div className="col-sm-2">
                                <Link to="/" className="register_link">
                                    <FiArrowLeft size={16} className="register_link_icon" />
                                    Voltar
                                </Link>
                            </div>
                            <div className="col-sm-2 register_button">
                                <button type="submit">Cadastrar</button>
                            </div>
                        </div>


                    </form>

                </div>

            </div>

        </div>
    )
}