import React, { useEffect, useState, Fragment } from 'react';
import Menu from '../../../components/menuBlogView/Menu'
import { Link } from "react-router-dom";
import { FiChevronUp, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'

import DropDownCategories from '../../../components/DropDownCategories'
import ListBlog from '../containers/ListBlog'
import globalConfig from '../../../utils/globalConfig'
import Pagination from '../../../components/Pagination'
import api from '../../../services/api'

import logoFooter from '../../../_assets/img/Logo-Descomplicando-Linguagens.png'

export default function PageBlogView() {

    const [filterCategory, setFilterCategory] = useState('ABAP')
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const response = await api.get(`postsByCategory/${filterCategory}`)
            setPosts(response.data)
            setLoading(false)
        }

        fetchPosts()
    }, [filterCategory])

    const indexOfLastPost = currentPage * globalConfig.maxPageRegistersBanner
    const indexOfFirstPost = indexOfLastPost - globalConfig.maxPageRegistersBanner
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const handleDropChange = (value, name) => {
        if (value !== 'SAP') {
            if (!value)
                setFilterCategory("ABAP")
            else
                setFilterCategory(value)
        }
    }

    return (
        <section id="main-content">
            <header>
                {<Menu activeOption="Dashboard" />}
            </header>

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

            <section className="wrapper">
                <div class="page-blog-cats">
                    <div class="inner text-center">
                        <span className="title">Quero entender sobre</span>
                        <div className="form inline transparent with-gray filterCat">
                            <DropDownCategories handleDropChange={handleDropChange} currentValue="SAP" textHelp="" />
                        </div>
                    </div>
                </div>

                <div className="page-blog-list container marginTop20">
                    <div className="row">
                        <Fragment>
                            <ListBlog
                                list={currentPosts}
                                loading={loading}
                            />
                        </Fragment>
                    </div>
                    <Pagination
                        linesPerPage={globalConfig.maxPageRegistersBanner}
                        totalLines={posts.length}
                        paginate={paginate}
                    />
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
