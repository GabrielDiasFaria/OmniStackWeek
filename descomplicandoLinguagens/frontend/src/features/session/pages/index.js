import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import api from '../../../services/api'

import logoImg from '../../../_assets/img/Logo-Descomplicando-Linguagens.png'

import '../styles/style.css'

export default function Session() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const user_Name = localStorage.getItem('user_Name')

    useEffect(() => {
        function validateSession() {
            console.log(`Entrou ${user_Name}`)
            if (user_Name !== "" && user_Name) {
                console.log('PReenchido')
                history.push('/Blog/Dashboard')
            }
        }
        validateSession()
    }, [user_Name, history])

    async function handlerLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('validateUser/', { email: email, password: password })

            if (response.data[0]["_id"] !== "") {
                localStorage.setItem('user_Id', response.data[0]["_id"])
                localStorage.setItem('user_Name', response.data[0]["name"])
                localStorage.setItem('user_Email', response.data[0]["email"])
                localStorage.setItem('user_Avatar', response.data[0]["avatar"])
                history.push('/Blog/dashboard')
            }

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

                <div className="col-sm-6">
                    <form className="session_form" onSubmit={handlerLogin}>
                        <h1 className="">Faça seu Logon</h1>

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-8">
                                <input placeholder="Email" type="email" value={email}
                                    onChange={e => setEmail(e.target.value)}></input>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-8">
                                <input placeholder="Password" type="password" value={password}
                                    onChange={e => setPassword(e.target.value)}></input>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-8">
                                <button type="submit" className="btn btn-warning">Acessar</button>
                            </div>
                        </div>

                        {/* <div className="row d-flex justify-content-center">
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
                        </div> */}
                    </form>
                </div>

            </div>
        </div >
    )
}