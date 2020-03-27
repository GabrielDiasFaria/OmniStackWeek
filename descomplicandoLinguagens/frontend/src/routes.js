import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Session from './pages/Session'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Posts from './pages/Posts'
import Tags from './pages/Tags'
import Categories from './pages/Categories'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Session} />
                <Route path="/register" exact component={Register} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/posts" exact component={Posts} />
                <Route path="/tags" exact component={Tags} />
                <Route path="/categories" exact component={Categories} />
            </Switch>
        </BrowserRouter>
    )
}