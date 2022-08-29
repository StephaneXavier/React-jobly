import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Routes from './Routes';
import UserInfoContext from './UserInfoContext';
import {JoblyApi} from './api'




function App() {
    const initialState = {username:'', token:''}
    const [currentUser, setCurrentUser] = useState(initialState)


    function registerUser(userInfo){
        console.log(userInfo)
        async function getToken(){
            const token = await JoblyApi.register(userInfo)
            setCurrentUser({username:userInfo.username, token:token})
        }
        getToken();
    }

    function loginUser(userInfo){
        async function getToken(){
            const token = await JoblyApi.login(userInfo)
            setCurrentUser({username:userInfo.username, token:token})
        }
        getToken()
    }

    function logout(){
        setCurrentUser(initialState)
    }

    // useEffect(()=> {
    //     const{username, token} = currentUser;
        
    // }, [currentUser])


    return (
        <div className="App">
            <BrowserRouter>
                <UserInfoContext.Provider value={currentUser}>
                    <NavBar />
                    <Routes registerUser={registerUser} loginUser={loginUser} logout={logout} />
                </UserInfoContext.Provider>
            </BrowserRouter>

        </div>
    );
}

export default App;
