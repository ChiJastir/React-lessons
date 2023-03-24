import React, {useState} from "react";
import AddPost from "./AddPost/add-post";
import s from './posts.module.css'
import PostsList from "./PostsList/PostsList";
import Filter from "./Filter/filter";
import ModalWindow from "../../../UI/ModalWindow/modal-window";
import Heading from "../../../UI/Heading/heading";
import Button from "../../../UI/Button/button";

function Posts(){
    const [data, setData] = useState([
        {
            id: 1,
            avatar: "https://coolsen.ru/wp-content/uploads/2021/09/image143-6.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut consectetur consequuntur dolorem eius eum explicabo, iusto mollitia nihil nisi, ratione saepe sapiente totam veritatis vitae, voluptate voluptatum. Quam, reiciendis.",
        },
        {
            id: 2,
            avatar: "https://kartinkin.net/uploads/posts/2021-07/1625518254_42-kartinkin-com-p-top-avi-anime-anime-krasivo-42.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet architecto aspernatur beatae corporis deleniti esse fugit, harum molestiae mollitia nihil nulla odio, placeat quae quasi repellat tempora velit.",
        },
        {
            id: 3,
            avatar: "https://i.pinimg.com/originals/18/c7/2c/18c72c635bcd4bddad6c6f27ab365aad.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo impedit incidunt maiores molestiae ratione! Beatae dignissimos, et explicabo facilis fuga id, iste magni maiores minima neque repudiandae ut veritatis, voluptatum.",
        },
        {
            id: 4,
            avatar: "https://uprostim.com/wp-content/uploads/2021/02/image190-33.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi dolore dolorem doloremque dolores earum eligendi explicabo impedit ipsa labore minima nam, nobis numquam pariatur perspiciatis qui sequi tempora. Doloremque!",
        },
    ])

    const [filter, setFilter] = useState({sort : '', search: ''})
    const [searchedAndSortedPosts, setSearchedAndSortedPosts] = useState('')

    const [visible, setVisible] = useState(false)

    function NewPost(post) {
        setData([...data, post])
        setVisible(false)
    }

    function DeletePost(post) {
        setData(data.filter(item => item.id !== post.id))
    }

    return(
        <div>
            <Button onClick={() => setVisible(true)}>Add post</Button>
            <Heading className={s.title}>Posts</Heading>
            <ModalWindow
                visible={visible}
                setVisible={setVisible}
            >
                <AddPost
                    NewPost={NewPost}
                />
            </ModalWindow>
            <Filter
                filter={filter}
                setFilter={setFilter}
                data={data}
                setSearchedAndSortedPosts={setSearchedAndSortedPosts}
            />
            <PostsList
                delete={DeletePost}
                data={searchedAndSortedPosts}
            />
        </div>
    )
}

export default Posts