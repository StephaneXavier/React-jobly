import React, {useState} from 'react';

/*
function currently works. But re-factor the else clause, as it works the way it is now but appears clunky
*/ 

const useLocalStorage = () => {
    
    const initialState = JSON.parse(window.localStorage.getItem('userInfo')) || {username:'', token:''};

    const [userInfo, setUserInfo] = useState(initialState);

    function getAndSetUserInfo(providedInfo){
        
        if(providedInfo){
            setUserInfo(providedInfo);
            window.localStorage.setItem('userInfo', JSON.stringify(providedInfo))
        }else{
            console.log('in else', initialState)
            const fetchedUserInfo = JSON.parse(window.localStorage.getItem('userInfo')) || {username:'', token:''}
            setUserInfo(fetchedUserInfo)
        }
        // setUserInfo(providedInfo? providedInfo :{username:'', token:''} )
    }

    return [userInfo,getAndSetUserInfo]

}

export default useLocalStorage;