import React from 'react';
import s from './PostsList.module.css'
import Post from "../post/post";

const PostsList = (props) => {
    return (
        <div>
            {props.data.map((post) =>
                <Post avatar={post.avatar} key={post.id}>{post.content}</Post>
            )}
        </div>
    );
};

export default PostsList;