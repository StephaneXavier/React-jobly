import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { JoblyApi } from './api';


const CompaniesSearchForm = ({ addfilter }) => {
    const [searchVal, setSearchVal] = useState('');
    const history = useHistory()

    

    function handleChange(e) {
        setSearchVal(e.target.value)
    }



    function handleSubmit(e) {
        e.preventDefault();
        addfilter(searchVal)

    }

    return (
        <Form onSubmit={handleSubmit} >
            <FormGroup >
                <Label for="search"></Label>
                <Input
                    
                    value={searchVal}
                    onChange={handleChange}
                    id="search"
                    name="search"
                    placeholder="enter company name here"
                    type="text"
                />
                <Button>
                    Submit
                </Button>
            </FormGroup>

        </Form>
    )
}

export default CompaniesSearchForm