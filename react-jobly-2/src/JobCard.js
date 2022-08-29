import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const JobCard = ({ job }) => {
    const { title, salary, equity } = job
    
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardText>
                    Salaray: {salary} <br/>
                    Equity: {equity? equity:null}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default JobCard
