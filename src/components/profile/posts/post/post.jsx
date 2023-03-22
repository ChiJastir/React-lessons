import s from './post.module.css'

function Post(){
    return(
        <div className={s.post}>
            <img className={s.avatar} src="https://coolsen.ru/wp-content/uploads/2021/09/image143-6.jpg" alt="avatar"/>
            <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, consequatur, fugiat? Beatae id ipsam iste magnam molestiae mollitia, nobis placeat reiciendis repellendus vitae. Delectus deleniti illo quaerat, reprehenderit sed tenetur!</p>
        </div>
    )
}

export default Post