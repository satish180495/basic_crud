import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';

export default function Home () {
    let history = useNavigate();
    // const [Employees, setEmployees] = useState([]);
    // let Employees = localStorage.setItem("Employees", JSON.stringify(Employees));

    const handleDelete = (id) => {
        var index = Employees.map(function (e) {
            // console.log(e.id);
            return e.id;
        }).indexOf(id);
        console.log(id);

        Employees.splice(index, 1);
        // localStorage.setItem("Employees", JSON.stringify(Employees));
        history('/');
    };
    const handleEdit = (id, name, age) => {
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
        localStorage.setItem("Id", id);
    };
    return (
        <>
            <div style={{ margin: "10px" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ? Employees.map((Employee) => {
                                    return (
                                        <tr key={`${Employee.Name}-${Employee.id}`}>
                                            <td>
                                                {Employee.Name}
                                            </td>
                                            <td>
                                                {Employee.Age}
                                            </td>
                                            <td>
                                                <Link to={`/edit`}>
                                                    < Button onClick={() => handleEdit(Employee.id, Employee.Name, Employee.Age)}>Edit</Button>
                                                </Link >
                                                &nbsp;
                                                <Button onClick={() => handleDelete(Employee.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    );
                                })
                                :
                                "No data found"
                        }
                    </tbody>
                </Table>
                <br />
                <br />
                <Link to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div >
        </>
    );
}
