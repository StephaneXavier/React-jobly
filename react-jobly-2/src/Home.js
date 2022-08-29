import React, {useContext} from 'react';
import LoggedInContext from './LoggedInContext';


const Home = () => {
const loggedIn = useContext(LoggedInContext)

    return (
        <>
            {loggedIn ?
                <h1>Home page, you are logged in!</h1>
                :
                <h1>Home page not logged in</h1>
                
        }
        </>
    )
}

export default Home