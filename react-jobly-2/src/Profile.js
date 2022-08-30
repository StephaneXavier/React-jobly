import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import UserInfoContext from './UserInfoContext';

const Profile = () => {

    const userInfo = useContext(UserInfoContext);

    if(!userInfo.token) return <Redirect to='/login' />

    return(
        <h1>Profile page</h1>
    )
}

export default Profile