import React, { useContext, useState, useEffect } from 'react';
import CompaniesSearchForm from './CompaniesSearchForm';
import LoggedInContext from './LoggedInContext'
import { JoblyApi } from './api';
import CompanyCard from './CompanyCard';


const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [filter, setFilter] = useState('')
    const loggedIn = useContext(LoggedInContext);

 
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