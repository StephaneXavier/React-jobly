import React, {useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import UserInfoContext from './UserInfoContext';

const Logout = ({logout}) => {
const history = useHistory()

useEffect(() => {

logout();
history.push('/')


},[])

return(
    <h1>Logging out...</h1>
)

}

export default Logout