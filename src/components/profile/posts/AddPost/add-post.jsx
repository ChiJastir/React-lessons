import React, {useState} from "react";
import Button from "../../../../UI/Button/button";
import s from './add-post.module.css'
import Heading from "../../../../UI/Heading/heading";
import Input from "../../../../UI/Input/input";

const AddPost = (props) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    return(
        <div>
            <Heading>Добавить пост</Heading>
            <Input
                value={title}
                onChange={event => setTitle(event.target.value)}
                className={s.title}
                placeholder="Заголовок"
            />
            <textarea placeholder="Содержание" className={s.body} value={body} onChange={event => setBody(event.target.value)}></textarea>
            <Button className={s.button} onClick={() => {props.NewPost({
                id: Date.now(),
                title: title,
                body: body,
            }); setBody('')}}>Добавить</Button>
        </div>
    )
}

export default AddPost