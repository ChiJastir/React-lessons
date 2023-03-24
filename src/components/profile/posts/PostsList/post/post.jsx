import s from './post.module.css'
import Button from "../../../../../UI/Button/button";

function Post(props){
    return(
        <div className={s.post}>
            <div>
                <h4 className={s.text}>{props.post.title}</h4>
                <p className={s.text}>{props.post.body}</p>
            </div>
            <Button onClick={ () => {props.delete(props.post)} }>Удалить</Button>
        </div>
    )
}

export default Post