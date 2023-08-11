import React, { useEffect, useState } from "react";
import UserData from "../data/userData";
import { Button, Table } from "semantic-ui-react";
import Create from "./Create";
import "../styles/dashboard.css";
import { API_URL } from "../data/Url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const Dashboard = () => {
  const navigate = useNavigate();
  const [apiData, setAPIData] = useState([]);
  const updateUser = ({ firstName, lastName, checked, id }) => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("checked", checked);
    localStorage.setItem("id", id);
    navigate("/edituser");
  };

  const callGetAPI = async () => {
    const res = await axios.get(API_URL);
    setAPIData(res.data);
  };
  useEffect(() => {
    callGetAPI();
  }, []);
  const deleteUser = async (id) => {
    await axios.delete(API_URL + "/" + id);
    callGetAPI();
  };
  return (
    <div className="container">
      <h1>DashBoard</h1>
      <div className="dashboard">
        <div className="">
          <h2>Students Data</h2>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Checked</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {apiData.map((ele) => (
                <Table.Row key={ele.id}>
                  <Table.Cell>{ele.firstName}</Table.Cell>
                  <Table.Cell>{ele.lastName}</Table.Cell>
                  <Table.Cell>
                    {ele.checked ? "Passed" : "Failed"}
                  </Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => deleteUser(ele.id)}><DeleteIcon color="warning" />
                    </Button>

                    <Button onClick={() => updateUser(ele)}><EditIcon color="primary" /></Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <Button onClick={() => navigate('/create')}>Create Student</Button>
      </div>
    </div>
  );
};

export default Dashboard;
