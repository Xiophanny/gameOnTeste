import React from 'react'
import { Route, Router, Switch } from "react-router";

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute'

import {history} from '../history'


const Routes = () =>(
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Register} exact path="/register"/>
            <PrivateRoute component={Home} exact path="/"/>
            <PrivateRoute component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes