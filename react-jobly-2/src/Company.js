import React from 'react';
import { useParams } from 'react-router-dom';


const Company = () => {
    const {name} = useParams()
return (
    <h1>On {name}'s page</h1>
)
}

export default Company