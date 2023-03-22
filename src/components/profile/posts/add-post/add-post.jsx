import Button from "../../../../UI/Button/button";
import s from './add-post.module.css'

function addPost(){
    return(
        <div className={s.add_post}>
            <textarea className={s.input}></textarea>
            <Button/>
        </div>
    )
}

export default addPost