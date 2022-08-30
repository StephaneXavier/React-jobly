import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { JoblyApi } from './api';
import JobCard from './JobCard';
import CompanyCard from './CompanyCard';
import UserInfoContext from './UserInfoContext';
import { Redirect } from 'react-router-dom';

const CompanyDetails = () => {
    const [companyInfo, setCompanyInfo] = useState({ name:'', description:'', jobs: [] });
    const { name } = useParams();
    const userInfo = useContext(UserInfoContext)

    if(!userInfo.token) return <Redirect to='/login'/>

    useEffect(() => {

        async function getCompany() {
            const res = await JoblyApi.getCompany(name)
            setCompanyInfo(res)
        }
        getCompany()

    }, [])

    return (

        <div className='CompanyDetails'>
            <div className='CompanyDetails-CompanyCard'>
        <CompanyCard company={companyInfo}/>
            </div>
            <div className='CompanyDetails-JobCard-list'>
                {companyInfo.jobs.map((j, idx) => <JobCard job={j} key={idx}/>)}
            </div>
        </div>
    )
}

export default CompanyDetails