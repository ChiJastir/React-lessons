import React from 'react';
import s from './PostsList.module.css'
import Post from "./post/post";
import Heading from "../../../../UI/Heading/heading";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostsList = (props) => {
    if(!props.data.length)
        return <Heading className={s.title}>Посты не найдены</Heading>
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
                <div className={s.pages_list}>
                    {props.pagesArray.map(page =>
                        <span
                            key={page}
                            className={page === props.page ? [s.pages_list_item, s.active].join(' ') : s.pages_list_item}
                            onClick={() => props.setPage(page)}
                        >{page}</span>
                    )}
                </div>
            </TransitionGroup>
        )
    }
};

export default PostsList;