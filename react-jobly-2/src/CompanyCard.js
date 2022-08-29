import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { JoblyApi } from './api';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

const CompanyCard = ({ company }) => {

    if (company) {
        const { name, description } = company
        return (
            <Card>
                <CardBody>
                    <CardTitle>
                        {name}
                    </CardTitle>
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
            </Card>
        )
    }
}

export default CompanyCard