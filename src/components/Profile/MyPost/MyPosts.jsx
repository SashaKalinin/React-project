import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = () => {
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
                <Posts messegae = 'Hey, how are you?'/>
                <Posts messegae = 'It is perfect page'/>
            </div>
        
    );
}

export default MyPosts;