import React from 'react';
import s from './PostsList.module.css'
import Post from "./post/post";
import Heading from "../../../../UI/Heading/heading";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostsList = (props) => {
    if(!props.data.length)
        return <Heading className={s.title}>Undefined posts</Heading>
    else {
        return (
            <TransitionGroup>
                {props.data.map((post) =>
                    <CSSTransition
                        key={post.id}
                        timeout={200}
                        classNames="post"
                    >
                        <Post delete={props.delete} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        )
    }
};

export default PostsList;