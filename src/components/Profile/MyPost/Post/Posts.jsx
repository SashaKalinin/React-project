import React from 'react';
import './Posts.css';

const Posts = (props) => {
    return (

        <div className='my-post-share'>
            <div className='post-circle'></div><p className='post'>{props.messegae}</p>
            <div>
    <span className='counter-likes'>0</span>
                <span> Like</span>
            </div>
        </div>
    );
}

export default Posts;