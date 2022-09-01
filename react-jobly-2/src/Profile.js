import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import UserInfoContext from './UserInfoContext';
import { Form, FormGroup, Input, Labe, Button, Label } from 'reactstrap';
import { JoblyApi } from './api';

const Profile = () => {
    const initialState = { firstName: '', lastName: '', email: '', password: '' }
    const [updatedUserInfo, setupdatedUserInfo] = useState(initialState)
    const {username, firstName,lastName,email,token} = useContext(UserInfoContext);

    if (!token) return <Redirect to='/login' />

        
    function handleSubmit() {

    }

    function handleChange(e) {
        const {name, value} = e.target;
        
        setupdatedUserInfo({...updatedUserInfo, [name]:value})
    }



    return (
        <div>
            <h1>Profile</h1>

            <Form onSubmit={handleSubmit} >
                <FormGroup >
                    <Label for="username">Username</Label>
                    <Input

                        value={username}
                        id="username"
                        name="username"
                    />

                </FormGroup>
                <FormGroup >
                    <Label for="firstName"></Label>
                    <Input

                        value={updatedUserInfo.firstName}
                        onChange={handleChange}
                        id="firstName"
                        name="firstName"
                        placeholder={firstName}
                        type="text"
                    />

                </FormGroup>
                <FormGroup >
                    <Label for="lastName"></Label>
                    <Input

                        value={updatedUserInfo.lastName}
                        onChange={handleChange}
                        id="lastName"
                        name="lastName"
                        placeholder={lastName}
                        type="text"
                    />

                </FormGroup>
                <FormGroup >
                    <Label for="email"></Label>
                    <Input

                        value={updatedUserInfo.email}
                        onChange={handleChange}
                        id="email"
                        name="email"
                        placeholder={email}
                        type="text"
                    />

                </FormGroup>
                <FormGroup >
                    <Label for="password"></Label>
                    <Input

                        value={updatedUserInfo.password}
                        onChange={handleChange}
                        id="password"
                        name="password"
                        placeholder="confirm password"
                        type="text"
                    />

                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Profile