import React, {useState, useEffect} from 'react';
import { JoblyApi } from './api';
import JobCard from './JobCard';
import JobsSearchForm from './JobsSearchForm';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('');

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