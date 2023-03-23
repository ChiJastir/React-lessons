import s from './post.module.css'

function Post(props){
    return(
        <div className={s.post}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
            <p className={s.text}>{props.children}</p>
        </div>
    )
}

export default Post