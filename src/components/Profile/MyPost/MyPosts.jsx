import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = () => {

    let postData = [
        {id:1, message:"Hey, how are you?", likesCount:12},
        {id:2, message:"It is perfect page", likesCount:11}
    ]
    let postArr = postData.map(elem => <Posts message = {elem.message} likesCount = {elem.likesCount}/>)
    return (
            <div className={s.myPost}>
                <div className={s.myPostInner}>
                    <div className={s.myPostTitle}>
                        <p className={s.postTitle}>My posts</p>
                    </div>
                    <form className={s.myPostWrite}>
                        <textarea placeholder='Your news...' form="" name="your-mews" required ></textarea>
                        <button href='#'>Send</button>
                    </form>
                </div>
                {postArr}
            </div>
        
    );
}

export default MyPosts;