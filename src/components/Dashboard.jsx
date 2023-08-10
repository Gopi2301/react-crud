import React, { useEffect, useState } from 'react'
import UserData from '../data/userData'
import { Button, Table } from 'semantic-ui-react';
import Create from './Create';
import '../styles/dashboard.css'
import { API_URL } from '../data/Url';
import axios from 'axios';

const Dashboard = () => {
  const [apiData, setAPIData] = useState([])

  const callGetAPI = async () => {
    const res = await axios.get(API_URL);
    setAPIData(res.data)
  }
  useEffect(() => { callGetAPI() }, [])
  const deleteUser = async (id) => {
    await axios.delete(API_URL + '/' + id)
    callGetAPI()
  }
  return (
    <div className='container'>
      <h1>DashBoard</h1>
      <div className='dashboard'>
        <div className=''>
          <h2>User Data</h2>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Checked</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {apiData.map(ele => (
                <Table.Row key={ele.id}>
                  <Table.Cell>{ele.firstName}</Table.Cell>
                  <Table.Cell>{ele.lastName}</Table.Cell>
                  <Table.Cell>{ele.checked ? 'checked' : 'unchecked'}</Table.Cell>
                  <Table.Cell><Button onClick={() => deleteUser(ele.id)}>Delete</Button></Table.Cell>
                  <Table.Cell><Button onClick={() => updateUser(ele.id)}>Update</Button></Table.Cell>

                </Table.Row>
              ))}


            </Table.Body>
          </Table>
        </div>
        <div>
          <Create />
        </div>

      </div>

    </div>
  )
}


export default Dashboard
