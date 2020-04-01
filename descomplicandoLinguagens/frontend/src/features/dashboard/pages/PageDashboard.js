import React from 'react';
import Menu from '../../../components/menu/Menu'

import '../styles/style_dashboard.css'

export default function PageDashboard() {
    return (
        <div>
            <header>
                {Menu()}
            </header>
            <session>
                <h1>Vai</h1>
            </session>
        </div>
    )
}