import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'

import logoImg from '../../../assets/logo.svg'

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro Caso</h1>
                    <p>Descreva o detalhamento</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>

                </section>
                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}