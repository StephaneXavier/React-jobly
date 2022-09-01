import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar'
import Routes from './Routes';
import UserInfoContext from './UserInfoContext';
import { JoblyApi } from './api'
import useLocalStorage from './useLocalStorage';




function App() {
    const [userInfo, setUserInfo, clearUserInfo] = useLocalStorage();


    function registerUser(userProvidedInfo) {
        async function getToken() {
            const token = await JoblyApi.register(userProvidedInfo);
            setUserInfo(userProvidedInfo.username, token)
        }
        getToken();
    }

    function loginUser(userLoginInfo) {
        async function getToken() {
            const token = await JoblyApi.login(userLoginInfo);
            setUserInfo(userLoginInfo.username, token)
        }

        getToken()
    }

    function logout() {
        clearUserInfo();
    }


    return (
        <div className="App">
            <BrowserRouter>
                <UserInfoContext.Provider value={userInfo}>
                    <NavBar />
                    <Routes registerUser={registerUser} loginUser={loginUser} logout={logout} />
                </UserInfoContext.Provider>
            </BrowserRouter>

        </div>
    );
}

export default App;
