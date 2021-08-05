import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router'


const Create = () => {
    let history=useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
       Axios.post('https://610aa63752d56400176afec5.mockapi.io/api/v1/fakeData',{
           firstName,
           lastName,
           checkbox,
       }).then(()=>{history.push('/read')});
    }
    return (
        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                {/* e.target.value foksiyonu tetikleyen elementin değerini veriyor */}
                <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
            </Form.Field>
            <Button type='submit' onClick={postData}>Submit</Button>
        </Form>
    )
}
export default Create;