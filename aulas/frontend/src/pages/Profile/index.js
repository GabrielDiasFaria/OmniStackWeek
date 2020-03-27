import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
    const ong_Name = localStorage.getItem('ong_Name')
    const history = useHistory()

    validateSession()

    function validateSession() {
        if (ong_Name == "" || !ong_Name) {
            history.push('/')
        }
    }

    function handleLogout(e) {
        e.preventDefault()
        localStorage.setItem('ong_Name', '')
        localStorage.setItem('ong_Id', '')
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"></img>
                <span>Bem vinda, {ong_Name}</span>

                <Link className="button" to="/incidents/new">Cadastrar Caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>
    )
}