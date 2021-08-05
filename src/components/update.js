import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router'


const Update = () => {
    let history=useHistory();
    const [id,setID]=useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState();
    const updateAPIData = () => {
       Axios.put(`https://610aa63752d56400176afec5.mockapi.io/api/v1/fakeData/${id}`,{
           firstName,
           lastName,
           checkbox,
       }).then(()=>{history.push('/read')});
    }
    useEffect(() => {
    setID(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"))
    }, [])
    return (
        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                {/* e.target.value foksiyonu tetikleyen elementin değerini veriyor */}
                <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
            </Form.Field>
          
            <Button type='submit' onClick={updateAPIData}>Update</Button>
           
           
        </Form>
    )
}
export default Update;