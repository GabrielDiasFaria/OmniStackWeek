import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Session from './pages/Session'
import Register from './pages/Register'
import Profile from './pages/Profile'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Session} />
                <Route path="/register" exact component={Register} />
                <Route path="/profile" exact component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}