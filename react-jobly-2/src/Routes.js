import React from 'react';
import Home from './Home';
import Companies from './Companies';
import Company from './Company';
import Login from './Login';
import Register from './Register';
import Profile from './Profile'
import { Route, Switch } from 'react-router-dom'

const Routes = ({ loggedIn }) => {

    return (
        <div>
            <Switch>
                <Route exact path='/companies'> <Companies /></Route>
                <Route exact path='/companies/:name'> <Company /></Route>
                <Route exact path='/login'> <Login /></Route>
                <Route exact path='/profile'> <Profile /></Route>
                <Route exact path='/register'> <Register /></Route>
                <Route exact path='/'><Home loggedIn={loggedIn} /></Route>
            </Switch>
        </div>




    )
}

export default Routes