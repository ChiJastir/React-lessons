import React, {useState} from "react";
import Button from "../../../../UI/Button/button";
import s from './add-post.module.css'

const AddPost = (props) => {
    const [message, setMessage] = useState("")

    return(
        <div className={s.add_post}>
            <textarea className={s.input} value={message} onChange={event => setMessage(event.target.value)}></textarea>
            <Button onClick={() => (props.NewPost({
                id: Date.now(),
                avatar: 'https://yt3.googleusercontent.com/ytc/AL5GRJVNMJ3rUkEuWjhgjNctvK2LchSZ8wiEwkfWrBTLeA=s900-c-k-c0x00ffffff-no-rj',
                content: message,
            }))}>send</Button>
        </div>
    )
}

export default AddPost