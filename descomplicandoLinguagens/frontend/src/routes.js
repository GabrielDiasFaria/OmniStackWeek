import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Session from './features/session/pages/index'
import Register from './features/session/pages/Register'
import Dashboard from './features/dashboard/pages/PageDashboard'
import ListTag from './features/tag/pages/PageListTag'
import ListCategory from './features/category/pages/PageListCategory'
import ListUser from './features/users/pages/PageListUser'
import ListPost from './features/post/pages/PageListPost'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Blog" exact component={Session} />
                <Route path="/Blog/Register" exact component={Register} />
                <Route path="/Blog/Dashboard" exact component={Dashboard} />

                <Route path="/Blog/ListPost" exact component={ListPost} />
                <Route path="/Blog/ListCategory" exact component={ListCategory} />
                <Route path="/Blog/ListTag" exact component={ListTag} />
                <Route path="/Blog/ListUser" exact component={ListUser} />
            </Switch>
        </BrowserRouter>
    )
}