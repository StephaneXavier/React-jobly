import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = ({loginUser}) => {
const initialState = {username:'', password:''};
const [userInfo, setUserInfo] = useState(initialState);
const history = useHistory();

function handleChange(e){
    const {name, value} = e.target
    setUserInfo({...userInfo, [name]:value})
}

function handleSubmit(e){
    e.preventDefault();
    loginUser(userInfo);
    setUserInfo(initialState);
    history.push('/')
}

    return(
        <Form onSubmit={handleSubmit} >
        <FormGroup >
            <Label for="username"></Label>
            <Input
                
                value={userInfo.username}
                onChange={handleChange}
                id="username"
                name="username"
                placeholder="username"
                type="text"
            />
           
        </FormGroup>
        <FormGroup >
            <Label for="password"></Label>
            <Input
                
                value={userInfo.password}
                onChange={handleChange}
                id="password"
                name="password"
                placeholder="password"
                type="password"
            />
           
        </FormGroup>
        <Button>
                Submit
            </Button>
    </Form>
    )
}

export default Login