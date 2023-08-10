import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';

const EditUser = () => {
  const [firstName, setFirstName] = useState();
  const [id, setId] = useState();
  const [lastName, setLastName] = useState();
  const [checked, setChecked] = useState();
  useEffect(() => {
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setChecked(localStorage.getItem('checked'));
    setId(localStorage.getItem('id'));
  }, [])

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input onChange={event => setFirstName(event.target.value)} value={localStorage.getItem('firstName')} placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input onChange={event => setLastName(event.target.value)} value={localStorage.getItem('lastName')} placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default EditUser
