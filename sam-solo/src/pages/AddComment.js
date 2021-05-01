import axios from 'axios'
import { useState } from 'react'

const AddComment = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/wines/allwines/${props.postId}/comments`, {
            title,
            description
        }, {
            headers: {
                Authorization: props.user
            }
        })
        .then((response) => {
            console.log(response);
            // setTitle('')
            // setDescription('')
        })
    }

    return (
        <div>
            <h2>Submit Your Thoughts here!</h2>
            <div className = 'commentContainer'>
                <form onSubmit = {handleSubmit}>
                    <label className = 'commentLabel' htmlFor = 'new-title'>Title: </label>
                    <input className = 'commentInput' value = {title} onChange = {(e) => {setTitle(e.target.value)}} />
                    <label className = 'commentLabel' htmlFor = 'new-description'>Comment: </label>
                    <input className = 'commentInput' value = {description} onChange = {(e) => {setDescription(e.target.value)}} />
                    <input className = 'commentBtn' type = 'submit' />
                </form>
            </div>
        </div>
    )
}

export default AddComment;