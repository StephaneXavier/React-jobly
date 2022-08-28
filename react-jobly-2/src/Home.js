import React from 'react';

const Home = ({ loggedIn }) => {

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