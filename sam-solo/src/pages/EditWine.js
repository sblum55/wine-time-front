import axios from 'axios'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const EditWine = (props) => {
    const [wine, setWine] = useState({name: '', type: '', price: '', image: '', purchase_location: '', description: ''})
    const [redirect, setRedirect] = useState(null)

    const fetchOneWine = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`)
        .then((response) => {
            setWine(response.data.wine)
        })
    }

    useEffect(fetchOneWine , [props.id])

    const handleChange = (e) => {
        const {name, value} = e.target
        setWine({...wine, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`, wine)
        .then((response) => {
            setRedirect('/')
            console.log(response);
        })
    }

    return (
        <div>
            <h1>Change Your Mind?</h1>
            <h2>No Worries! Edit your info below.</h2>
            {redirect && <Redirect to = {redirect} />}
            <div>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor = 'new-wine-name'>Name: </label>
                    <input id = 'new-wine-name' name = 'name' value = {wine.name}  onChange = {handleChange} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-type'>Type: </label>
                    <input id = 'new-wine-type' name = 'type' value = {wine.type} onChange = {handleChange} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-price'>Price: </label>
                    <input id = 'new-wine-price' name = 'price' value = {wine.price} onChange = {handleChange} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-image'>Image: </label>
                    <input type = 'url' id = 'new-wine-image' name = 'image' value = {wine.image} onChange = {handleChange} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-location'>Purchase Location: </label>
                    <input id = 'new-wine-location' name = 'purchase_location' value = {wine.purchase_location} onChange = {handleChange} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-description'>Description: </label>
                    <textarea id = 'new-wine-description' name = 'description' value = {wine.description} onChange = {handleChange} />
                </div>
                <input type = 'submit' placeholder = 'UPDATE' />
            </form>
            </div>
        </div>
    )
}

export default EditWine;