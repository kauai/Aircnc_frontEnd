import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './pages/Login';
import DashBoard from './pages/Dashboard';
import New from './pages/New';

export default function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/dashboard" component={DashBoard}/>
                <Route path="/new" component={New}/>
            </Switch>
        </Router>
    )
}