import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Routes from './Routes';




function App() {
    const [loggedIn, setLoggedIn] = useState(true)


    return (
        <div className="App">
            <BrowserRouter>
                <NavBar loggedIn={loggedIn} />

                <Routes loggedIn={loggedIn} />
            </BrowserRouter>

        </div>
    );
}

export default App;
