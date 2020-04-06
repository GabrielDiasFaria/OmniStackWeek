import React from 'react';
import Menu from '../../../components/menu/Menu'

import '../styles/style_dashboard.css'

export default function PageDashboard() {
    return (
        <section id="main-content">
            <header>
                {<Menu activeOption="Dashboard" />}
            </header>

            <section className="wrapper">

            </section>

        </section>
    )
}