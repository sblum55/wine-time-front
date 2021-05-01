import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect, Route } from 'react-router-dom'
import AddComment from './AddComment';


const SingleWine = (props) => {
    // console.log('found props', props);
    const [wine, setWine] = useState({})
    const [shouldRedirect, setShouldRedirect] = useState(null)
    const [comment, setComment] = useState([])

    const fetchOneWine = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`)
        .then((response) => {
            // console.log(response.data.wine);
            // console.log(response.data.wine.comments);
            setWine(response.data.wine)
            setComment([...response.data.wine.comments])
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
                        <button className = 'createWineBtn'>POST A WINE</button>
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
                        <button className = 'deleteWineBtn' onClick = {() => {
                            axios.delete(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.id}`, {
                                headers: {
                                    Authorization: props.user.id
                                }
                            }).then ((response) => {
                                setShouldRedirect('/')
                            })
                        }} >DELETE</button>

                        <Link to = {`/wine/${props.id}/edit`} >
                            <button className = 'editWineBtn'>EDIT</button>
                        </Link>
                    </div>
            }

            <div className = 'wineContainer'>
            <h1>{wine.name}</h1>
            <img src = {wine.image}></img>
            <p>{wine.price}</p>
            <p>{wine.purchase_location}</p>
            <p>{wine.description}</p>
            </div>

            <div className = 'commentForm'>
            <AddComment postId = {props.id} user = {props.user.id} />
            </div>
            <h2>Wine Thoughts</h2>
            <div className = 'commentContainer'>
                {comment.map(comment => {
                    return (
                        <div className = 'commentSection'>
                            <h4>{comment.title}</h4>
                            <p>{comment.description}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default SingleWine;