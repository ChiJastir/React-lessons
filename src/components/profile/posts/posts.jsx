import React, {useEffect, useState} from "react";
import AddPost from "./AddPost/add-post";
import s from './posts.module.css'
import PostsList from "./PostsList/PostsList";
import Filter from "./Filter/filter";
import ModalWindow from "../../../UI/ModalWindow/modal-window";
import Heading from "../../../UI/Heading/heading";
import Button from "../../../UI/Button/button";
import axios from "axios";

function Posts(){
    const [data, setData] = useState([])

    const [filter, setFilter] = useState({sort : '', search: ''})
    const [searchedAndSortedPosts, setSearchedAndSortedPosts] = useState('')

    const [visible, setVisible] = useState(false)

    useEffect(() => GetPosts, [])

    async function GetPosts(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(response.data)
    }

    function NewPost(post) {
        setData([...data, post])
        setVisible(false)
    }

    function DeletePost(post) {
        setData(data.filter(item => item.id !== post.id))
    }

    return(
        <div>

            <Heading className={s.title}>Посты</Heading>
            <ModalWindow
                visible={visible}
                setVisible={setVisible}
            >
                <AddPost
                    NewPost={NewPost}
                />
            </ModalWindow>
            <div className={s.filterAndButtons}>
                <Filter
                    filter={filter}
                    setFilter={setFilter}
                    data={data}
                    setSearchedAndSortedPosts={setSearchedAndSortedPosts}
                />
                <div className={s.buttons}>
                    <Button onClick={() => setVisible(true)}>Добавить пост</Button>
                </div>
            </div>
            <PostsList
                delete={DeletePost}
                data={searchedAndSortedPosts}
            />
        </div>
    )
}

export default Posts