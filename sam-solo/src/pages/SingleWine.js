import { useState, useEffect } from 'react'
import axios from 'axios'


const SingleWine = (props) => {
    const [wine, setWine] = useState({})

    const fetchOneWine = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`)
        .then((response) => {
            console.log(response.data.wine);
            setWine(response.data.wine)
        })
    }

    useEffect(fetchOneWine, [props.id])

    return (
        <div>
            <h1>{wine.name}</h1>
            <h2>{wine.type}</h2>
            <p>{wine.price}</p>
            <p>{wine.purchase_location}</p>
            <p>{wine.description}</p>
        </div>
    )
}

export default SingleWine;