import React, { useState } from 'react'
import { API_URL } from '../data/Url'
import { Form, Button, Checkbox } from 'semantic-ui-react'
import data from '../data/userData'
import axios from 'axios'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'
import { LastPageRounded } from '@mui/icons-material'
import '../styles/create.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Create = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate()
    const postData = async () => {
        if (firstName != "" && lastName != "" && checked != "") {
            await axios.post(API_URL, {
                firstName,
                lastName,
                checked
            })
            alert('Updated')

        }

    }

    return (
        <div>
            <h1>Create Student</h1>
            <Form>
                <Form.Field className='inputContainer'>
                    <label>First Name</label>
                    <input onChange={event => setFirstName(event.target.value)} placeholder='First Name' />
                </Form.Field>
                <Form.Field className='inputContainer'>
                    <label>Last Name</label>
                    <input onChange={event => setLastName(event.target.value)} placeholder='Last Name' />
                </Form.Field >
                <Form.Field >
                    <Checkbox checked={checked} onChange={() => setChecked(!checked)} label='Check if the student Passed' />
                </Form.Field>
                <Button className="submit-btn" onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Button onClick={() => navigate('/')}><ArrowBackIcon className='arrow' />DashBoard</Button>
        </div>
    )
}

export default Create
