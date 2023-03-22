import Post from './post/post'
import AddPost from "./add-post/add-post";
import s from './posts.module.css'

function Posts(){
    return(
        <div>
            <h3 className={s.title}>My posts</h3>
            <AddPost/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts