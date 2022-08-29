import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Routes from './Routes';
import LoggedInContext from './LoggedInContext';




function App() {
    const [loggedIn, setLoggedIn] = useState(true)
    


    return (
        <div className="App">
            <BrowserRouter>
                <LoggedInContext.Provider value={loggedIn}>
                    <NavBar />
                    <Routes />
                </LoggedInContext.Provider>
            </BrowserRouter>

        </div>
    );
}

export default App;
