import React, { useState } from 'react'
import { API_URL } from '../data/Url'
import { Form, Button, Checkbox } from 'semantic-ui-react'
import data from '../data/userData'
import axios from 'axios'
import Dashboard from './Dashboard'


const Create = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checked, setChecked] = useState(false);
    const postData = async () => {
        await axios.post(API_URL, {
            firstName,
            lastName,
            checked
        })
        alert('Updated')

    }

    return (
        <div>
            <h2>Create User</h2>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input onChange={event => setFirstName(event.target.value)} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input onChange={event => setLastName(event.target.value)} placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <Checkbox checked={checked} onChange={() => setChecked(!checked)} label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Create
