import React, {useState, useEffect, useContext} from 'react';
import { JoblyApi } from './api';
import JobCard from './JobCard';
import JobsSearchForm from './JobsSearchForm';
import UserInfoContext from './UserInfoContext';
import { Redirect } from 'react-router-dom';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('');
    const userInfo = useContext(UserInfoContext);


    if(!userInfo.token) return <Redirect to='/login'/>

    
    function addFilter(filter){
        setFilter(filter)
    }


    useEffect(() => {
        async function getFilteredJobs(){
         const filteredJobs = await JoblyApi.getFilteredJobs(filter)
         setJobs(filteredJobs)
        } 
        getFilteredJobs()
     }, [filter])



    useEffect(() => {

        async function getJobs() {
            const jobsInfo = await JoblyApi.getJobs();
            setJobs(jobsInfo)
        }
        getJobs()
    }, [])



   console.log(jobs)

    return(
        <div className='Jobs'>
            <JobsSearchForm addFilter={addFilter}/>
          {jobs.map((j,idx) => <JobCard key={idx} job={j}/>)}
        </div>
    )
   
}

export default Jobs