import React from 'react';
import s from './PostsList.module.css'
import Post from "./post/post";
import Heading from "../../../../UI/Heading/heading";

const PostsList = (props) => {
    if(!props.data.length)
        return <Heading className={s.title}>Undefined posts</Heading>
    else {
        return (
            <div>
                {props.data.map((post) =>
                    <Post delete={props.delete} post={post} key={post.id} />
                )}
            </div>
        )
    }
};

export default PostsList;