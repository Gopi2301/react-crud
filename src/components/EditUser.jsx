import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { API_URL } from '../data/Url';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const EditUser = (userId) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState('');
  const [id, setId] = useState('')
  const navigate = useNavigate('/')
  const updateUser = async () => {
    await axios.put(API_URL + '/' + id, {
      firstName,
      lastName,
      checked
    })
  }
  useEffect(() => {
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setChecked(localStorage.getItem('checked'))
    setId(localStorage.getItem('id'))
  }, [])


  return (
    <div>
      <h2>Update User</h2>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input value={firstName} onChange={event => setFirstName(event.target.value)} placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input value={lastName} onChange={event => setLastName(event.target.value)} placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button onClick={updateUser}>Update</Button>
      </Form>
    </div>
  )
}

export default EditUser;
