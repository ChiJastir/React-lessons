import React, {useEffect, useState} from "react";
import AddPost from "./AddPost/add-post";
import s from './posts.module.css'
import PostsList from "./PostsList/PostsList";
import Filter from "./Filter/filter";
import ModalWindow from "../../../UI/ModalWindow/modal-window";
import Heading from "../../../UI/Heading/heading";
import Button from "../../../UI/Button/button";
import PostsService from "../../../API/PostsService";
import Loader from "../../../UI/Loader/loader";
import {useFetching} from "../../../hooks/useFetching";
import {getPagesCount} from "../../../utils/pages";

function Posts(){
    const [data, setData] = useState([])

    const [filter, setFilter] = useState({sort : '', search: ''})
    const [searchedAndSortedPosts, setSearchedAndSortedPosts] = useState('')

    const [visible, setVisible] = useState(false)

    const [totalPage, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    let pagesArray = []
    for (let i = 0; i < totalPage; i++) {
        pagesArray.push(i+1)
    }

    const [fetching, isLoading] = useFetching(async () => {
        const response = await PostsService.Get(limit, page)
        setData(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPage(getPagesCount(totalCount, limit))
    })

    useEffect(() => fetching, [])

    function NewPost(post) {
        setData([post, ...data])
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
            {isLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
                : <PostsList
                    delete={DeletePost}
                    data={searchedAndSortedPosts}
                />
            }
            {pagesArray.map(page => <Button>{page}</Button>)}
        </div>
    )
}

export default Posts