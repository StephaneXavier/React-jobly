import React, {useState, useEffect, useContext } from 'react';
import CompaniesSearchForm from './CompaniesSearchForm';
import { JoblyApi } from './api';
import CompanyCard from './CompanyCard';
import UserInfoContext from './UserInfoContext';
import { Redirect } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';


const Companies = () => {
    
    const [companies, setCompanies] = useState([]);
    const [filter, setFilter] = useState('')
    const userInfo = useContext(UserInfoContext)
    console.log('in Companies userInfo is', userInfo)

    if(!userInfo.token) return <Redirect to='/login' />

 
    function addFilter(filter){
        setFilter(filter)
    }



    useEffect(() => {
       async function getFilteredCompanies(){
        const filteredCompanies = await JoblyApi.getFilteredCompanies(filter)
        setCompanies(filteredCompanies)
       } 
       getFilteredCompanies()
    }, [filter])



    useEffect(() => {

        async function getCompanies() {
            const companiesInfo = await JoblyApi.getCompanies();
            setCompanies(companiesInfo)
        }
        getCompanies()
    }, [])



    return (
        <div className='Companies'>
            <CompaniesSearchForm addFilter={addFilter} />
            <div className='Companies-CompanyCard-list'>
                {companies.map((company,idx) => <CompanyCard company={company} key={idx} />)}
            </div>


        </div>
    )
}

export default Companies