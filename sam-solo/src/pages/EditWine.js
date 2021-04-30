import axios from 'axios'
import { useState, useEffect } from 'react'

const EditWine = (props) => {
    console.log(props);
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [purchase_location, setPurchase_Location] = useState('')
    const [description, setDescription] = useState('')

    const [wine, setWine] = useState({})

    const fetchOneWine = () => {
        // console.log(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`);
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`)
        .then((response) => {
            // console.log(response.data.wine);
            setWine(response.data.wine)
        })
    }

    useEffect(fetchOneWine , [props.id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`, {
            name: name,
            type: type,
            price: price,
            image: image,
            purchase_location: purchase_location,
            description: description
        })
        .then((response) => {
            console.log(response);
        })
    }

    return (
        <div>
            <h1>Change Your Mind?</h1>
            <h2>No Worries! Edit your info below.</h2>

            <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor = 'new-wine-name'>Name: </label>
                    <input id = 'new-wine-name' value = {wine.name} onChange = {(e) => {setName(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-type'>Type: </label>
                    <input id = 'new-wine-type' value = {wine.type} onChange = {(e) => {setType(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-price'>Price: </label>
                    <input id = 'new-wine-price' value = {wine.price} onChange = {(e) => {setPrice(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-image'>Image: </label>
                    <input type = 'url' id = 'new-wine-image' value = {wine.image} onChange = {(e) => {setImage(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-location'>Purchase Location: </label>
                    <input id = 'new-wine-location' value = {wine.purchase_location} onChange = {(e) => {setPurchase_Location(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor = 'new-wine-description'>Description: </label>
                    <input id = 'new-wine-description' value = {wine.description} onChange = {(e) => {setDescription(e.target.value)}} />
                </div>
                <input type = 'submit' placeholder = 'UPDATE' />
            </form>
            </div>
        </div>
    )
}

export default EditWine;