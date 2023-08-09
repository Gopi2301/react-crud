import React, { useState } from 'react'
import { API_URL } from '../data/Url'
import { Form, Button, Checkbox } from 'semantic-ui-react'

const Create = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checked, setChecked] = useState(false);

    const postData = () => {
        console.log(firstName, lastName)
    }
    return (
        <div>

            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={event => setFirstName(event.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={event => setLastName(event.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={() => setChecked(!checked)} checked={checked} />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>

        </div>
    )
}

export default Create
