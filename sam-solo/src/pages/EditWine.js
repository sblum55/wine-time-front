import axios from 'axios'
import { useState, useEffect } from 'react'

const EditWine = (props) => {
    const [name, setName] = useState(props.name)
    const [type, setType] = useState(props.type)
    const [price, setPrice] = useState(props.price)
    const [image, setImage] = useState(props.image)
    const [purchase_location, setPurchase_Location] = useState(props.purchase_location)
    const [description, setDescription] = useState(props.description)

    // const [wine, setWine] = useState({})

    // const fetchOneWine = () => {
    //     // console.log(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`);
    //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`)
    //     .then((response) => {
    //         // console.log(response.data.wine);
    //         setWine(response.data.wine)
    //     })
    // }

    // useEffect(fetchOneWine , [props.id])

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
                <input type = 'submit' placeholder = 'UPDATE' />
            </form>
            </div>
        </div>
    )
}

export default EditWine;