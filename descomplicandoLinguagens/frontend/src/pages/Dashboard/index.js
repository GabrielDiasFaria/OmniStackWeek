import React from 'react';
import Menu from '../Menu'

import './style.css'

export default function Dashboard() {
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