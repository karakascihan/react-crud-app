import React, { useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {

    const deleteAPIData = (id) => {
        axios.delete(`https://610aa63752d56400176afec5.mockapi.io/api/v1/fakeData/${id}`)
        .then(() => {getData()});
     
    }
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
    }
    const getData = () => {
        axios.get('https://610aa63752d56400176afec5.mockapi.io/api/v1/fakeData')
        .then((response) => setAPIData(response.data));
    }
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://610aa63752d56400176afec5.mockapi.io/api/v1/fakeData')
            .then((response) => setAPIData(response.data));
    }, [])
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>

                        <Table.HeaderCell>FirstName</Table.HeaderCell>
                        <Table.HeaderCell>LastName</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        APIData.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.checkbox ? 'checked' : 'unchecked'}</Table.Cell>
                                    <Link to='/update'>
                                        <Table.Cell><Button className='ui primary buttton' onClick={() => setData(data)}>Update</Button></Table.Cell>
                                    </Link>
                                    <Table.Cell><Button onClick={() => deleteAPIData(data.id)}>Delete</Button></Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
                <Table.Footer>
                <Link to='/create'>
                    <Button>
                    New Item
                    </Button>
                  
                                     </Link>
                </Table.Footer>
            </Table>
        </div>
    )
}
