import axios from 'axios'
import { useState } from 'react'

const WineForm = (props) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [purchase_location, setPurchase_Location] = useState('')
    const [description, setDescription] = useState('')
  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('called handle submit');
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/wines`, {name, type, price, image, purchase_location, description}, {
            headers: {
                Authorization: props.user.id
            }
        })
        .then((response) => {
            console.log(response);
            props.setUser(response.data.user)
        })
    }

    return (
        <div>
            <h1>Tell Us About Some Wine!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor = 'new-wine-name'>Name: </label>
                    <input id = 'new-wine-name' value = {name} onChange = {(e) => {setName(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-type'>Type: </label>
                    <input id = 'new-wine-type' value = {type} onChange = {(e) => {setType(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-price'>Price: </label>
                    <input id = 'new-wine-price' value = {price} onChange = {(e) => {setPrice(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-image'>Image: </label>
                    <input type = 'url' id = 'new-wine-image' value = {image} onChange = {(e) => {setImage(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-location'>Purchase Location: </label>
                    <input id = 'new-wine-location' value = {purchase_location} onChange = {(e) => {setPurchase_Location(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-description'>Description: </label>
                    <input id = 'new-wine-description' value = {description} onChange = {(e) => {setDescription(e.target.value)}} />
                </div>
                <input type = 'submit' value = 'ADD WINE' />
            </form>
        </div>
    )
}

export default WineForm;