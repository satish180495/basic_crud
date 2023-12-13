import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Employees from './Employees';
// import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function Edit () {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = Employees.map(function (e) {
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        let a = Employees[index];
        a.Name = name;
        a.Age = age;

        history('/');
    };

    useEffect(() => {
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setId(localStorage.getItem('Id'));
    }, []);


    return (
        <>
            <Form className="d-grid gap-2" style={{ margin: "1rem" }}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} value={name} >
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)} value={age}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formName'>
                    {/* <Link to="/"> */}
                    <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
                    {/* </Link> */}
                </Form.Group>
            </Form>
        </>
    );
}