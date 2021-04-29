import axios from 'axios'
import { useState } from 'react'

const SignUpForm = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, {name, email, password})
        .then((response) => {
            // console.log(response);
            props.setUser(response.data.user)
            localStorage.setItem('userId', response.data.user.id)
        })
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor = 'new-name'>Name: </label>
                    <input id = 'new-name' value = {name} onChange = {(e) => {setName(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-email'>Email: </label>
                    <input id = 'new-email' value = {email} onChange = {(e) => {setEmail(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-password'>Password: </label>
                    <input type = 'password' id = 'new-password' value = {password} onChange = {(e) => {setPassword(e.target.value)}} />
                </div>
                <div>
                    <input type = 'submit' value = 'SUBMIT' />
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;