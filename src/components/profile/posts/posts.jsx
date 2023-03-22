import Post from './post/post'
import AddPost from "./add-post/add-post";
import s from './posts.module.css'

function Posts(){
    return(
        <div>
            <h3 className={s.title}>My posts</h3>
            <AddPost/>
            <Post avatar={"https://coolsen.ru/wp-content/uploads/2021/09/image143-6.jpg"} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut consectetur consequuntur dolorem eius eum explicabo, iusto mollitia nihil nisi, ratione saepe sapiente totam veritatis vitae, voluptate voluptatum. Quam, reiciendis."}/>
            <Post avatar={"https://kartinkin.net/uploads/posts/2021-07/1625518254_42-kartinkin-com-p-top-avi-anime-anime-krasivo-42.jpg"} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet architecto aspernatur beatae corporis deleniti esse fugit, harum molestiae mollitia nihil nulla odio, placeat quae quasi repellat tempora velit."}/>
            <Post avatar={"https://i.pinimg.com/originals/18/c7/2c/18c72c635bcd4bddad6c6f27ab365aad.jpg"} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo impedit incidunt maiores molestiae ratione! Beatae dignissimos, et explicabo facilis fuga id, iste magni maiores minima neque repudiandae ut veritatis, voluptatum."}/>
            <Post avatar={"https://uprostim.com/wp-content/uploads/2021/02/image190-33.jpg"} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi dolore dolorem doloremque dolores earum eligendi explicabo impedit ipsa labore minima nam, nobis numquam pariatur perspiciatis qui sequi tempora. Doloremque!"}/>
        </div>
    )
}

export default Posts