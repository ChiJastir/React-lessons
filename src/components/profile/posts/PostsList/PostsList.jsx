import React from 'react';
import s from './PostsList.module.css'
import Post from "../post/post";

const PostsList = (props) => {
    return (
        <div>
            {props.data.map((post) =>
                <Post delete={props.delete} post={post} key={post.id} />
            )}
        </div>
    );
};

export default PostsList;