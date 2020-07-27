import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
    return (

        <div className={s.myPostShare}>
            <div className={s.postCircle}></div><p className={s.post}>{props.message}</p>
            <div>
    <span className={s.counterLikes}>{props.likesCount}</span>
                <span> Like</span>
            </div>
        </div>
    );
}

export default Posts;