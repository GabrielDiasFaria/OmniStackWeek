import React, { useEffect, useState } from 'react'
import Menu from '../../../components/menuBlogView/Menu'
import api from '../../../services/api'
import Parser from 'html-react-parser'
import { FiChevronUp, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'
import { Link } from "react-router-dom"
import logoFooter from '../../../_assets/img/Logo-Descomplicando-Linguagens.png'

export default function PagePostView() {

    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPost = async () => {
            const detailPost = window.location.pathname.substring(15, window.location.pathname.length)
            var res = detailPost.split("/")
            setLoading(true)
            const response = await api.get(`posts/${res[0]}`)
            setPost(response.data)
            setLoading(false)
        }

        fetchPost()
    }, [])

    return (
        <section id="main-content">
            <header>
                {<Menu activeOption="Dashboard" />}
            </header>

            <section className="wrapper">
                {
                    !loading ? (
                        <div className="container colorBlack">
                            <div className="text-center marginTop20">
                                <img src={post.banner} alt="" height="300" width="800"></img>
                                <h1>{post.title}</h1>

                                <br></br>

                                <div class="row">
                                    <div>
                                        <img src={post.author_avatar} alt="" height="50" width="50"></img>
                                    </div>
                                    <div>
                                        <p className="nameAuthor">Por {post.author_name}</p>
                                        <p>Publicado em {post.data_criacao}</p>
                                    </div>

                                </div>
                            </div>

                            <div className="content postHtml">
                                {Parser(`${post.html}`)}
                            </div>
                        </div>
                    ) : (
                            <div className="spinner"></div>
                        )
                }
            </section>

            <section className="wrapper">
                <div id="newsletter">
                    <section className="container" >

                        <div className="bannerNews">
                            <div className="row">
                                <div className="col-md-6 text-center bannerNewsSpans">
                                    <p className="bannerNewsSpan">
                                        Vamos juntos criar uma grande
                            </p>
                                    <p className="bannerNewsSpan bold">
                                        comunidade de desenvolvedores
                            </p>
                                    <p className="bannerNewsSpan">
                                        e descomplicar linguagens no dia a dia
                            </p>
                                </div>
                                <div className="col-md-5" name='newsletter'>
                                    <div class="input-group m-bot15 bannerNewsEmail">
                                        <input type="text" class="form-control"></input>
                                        <span class="input-group-addon bannerNewsBtn">Cadastrar e-mail</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </section>

            <footer class="footer-section">
                <div class="text-center">

                    <img src={logoFooter} alt="" height="102" width="94" className="logoFooter"></img>

                    © 2020 · Descomplicando Linguagens. Todos os direitos reservados. Termos de uso. Design do site e blog Rayane Nunes.

                    <Link to="/Blog" >
                        <FiLinkedin className="socialIcon" />
                    </Link>
                    <Link to="/Blog" >
                        <FiInstagram className="socialIcon" />
                    </Link>
                    <Link to="/Blog" >
                        <FiYoutube className="socialIcon" />
                    </Link>

                    <a href="/#" class="go-top">
                        <FiChevronUp className="iconFooter" />
                    </a>
                </div>
            </footer>
        </section>
    )
}