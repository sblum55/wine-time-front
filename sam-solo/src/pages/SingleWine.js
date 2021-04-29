import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const SingleWine = (props) => {
    const [wine, setWine] = useState({})

    const fetchOneWine = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`)
        .then((response) => {
            console.log(response.data.wine);
            setWine(response.data.wine)
        })
    }

    useEffect(() => {fetchOneWine()} , [])

    return (
        <div>
            <div>
                    {props.user.id ?
                    <Link to = '/new'>
                        <button>POST A WINE</button>
                    </Link>
                    :
                    <div>
                        <p>LOG IN TO SHARE YOUR WINE!</p>
                    </div>
                    }
                </div>
            <h1>{wine.name}</h1>
            <h2>{wine.type}</h2>
            <img src = {wine.image}></img>
            <p>{wine.price}</p>
            <p>{wine.purchase_location}</p>
            <p>{wine.description}</p>
        </div>
    )
}

export default SingleWine;