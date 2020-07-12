import React from 'react';
import './MyPosts.css';
import Posts from './Post/Posts';

const MyPosts = () => {
    return (
            <div className='my-post'>
                <div className='my-post-inner'>
                    <div className='my-post-title'>
                        <p className='post-title'>My posts</p>
                    </div>
                    <form className='my-post-write'>
                        <textarea placeholder='your news...' form="" name="your-mews" required ></textarea>
                        <button href='#'>Send</button>
                    </form>
                </div>
                <Posts messegae = 'Hey, how are you?'/>
                <Posts messegae = 'It is perfect page'/>
            </div>
        
    );
}

export default MyPosts;