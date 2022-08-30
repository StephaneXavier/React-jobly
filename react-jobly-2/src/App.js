import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar'
import Routes from './Routes';
import UserInfoContext from './UserInfoContext';
import { JoblyApi } from './api'
import useLocalStorage from './useLocalStorage';




function App() {
    const [userInfo, setUserInfo] = useLocalStorage();


    useEffect(() => {
        setUserInfo();
    }, [])

    function registerUser(userInfo) {
        async function getToken() {
            const token = await JoblyApi.register(userInfo);
            setUserInfo({ username: userInfo.username, token: token })
        }
        getToken();
    }

    function loginUser(userInfo) {
        async function getToken() {
            const token = await JoblyApi.login(userInfo);
            setUserInfo({ username: userInfo.username, token: token })
        }
        getToken()
    }

    function logout() {
        window.localStorage.clear();
        setUserInfo();

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
