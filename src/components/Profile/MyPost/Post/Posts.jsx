import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
    return (

        <div className={s.myPostShare}>
            <div className={s.postCircle}></div><p className={s.post}>{props.messegae}</p>
            <div>
    <span className={s.counterLikes}>0</span>
                <span> Like</span>
            </div>
        </div>
    );
}

export default Posts;