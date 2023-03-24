import s from './post.module.css'
import Button from "../../../../../UI/Button/button";

function Post(props){
    return(
        <div className={s.post}>
            <img className={s.avatar} src={props.post.avatar} alt="avatar"/>
            <p className={s.text}>{props.post.content}</p>
            <p className={s.text}>{props.post.text}</p>
            <Button onClick={ () => {props.delete(props.post)} }>Delete</Button>
        </div>
    )
}

export default Post