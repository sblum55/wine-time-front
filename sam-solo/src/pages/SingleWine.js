import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


const SingleWine = (props) => {
    console.log('found props', props);
    const [wine, setWine] = useState({})
    const [shouldRedirect, setShouldRedirect] = useState(null)

    const fetchOneWine = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`)
        .then((response) => {
            console.log(response.data.wine);
            setWine(response.data.wine)
        })
    }

    useEffect(fetchOneWine , [props.id])

    const isCreator = () => {
        return wine.userId === props.user.id
    }

    return (
        <div>
            { shouldRedirect && <Redirect to = {shouldRedirect}/>}
            <div>
                {props.user.id ? <>
                    <Link to = '/new'>
                        <button>POST A WINE</button>
                    </Link>
                    </>
                    :
                    <>
                    <div>
                        <p>LOG IN TO SHARE YOUR WINE!</p>
                    </div>
                    </>
                }
            </div>

            {isCreator() &&
                    <div>
                        <button onClick = {() => {
                            axios.delete(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`, {
                                headers: {
                                    Authorization: props.user.id
                                }
                            }).then ((response) => {
                                setShouldRedirect('/')
                            })
                        }} >DELETE</button>

                        <Link to = {`/wine/${props.id}/edit`} >
                            <button>EDIT</button>
                        </Link>
                    </div>
            }

            <h1>{wine.name}</h1>
            <img src = {wine.image}></img>
            <p>{wine.price}</p>
            <p>{wine.purchase_location}</p>
            <p>{wine.description}</p>
        </div>
    )
}

export default SingleWine;