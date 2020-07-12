import React from 'react';
import './Profile.css';
import MyPosts from './MyPost/MyPosts';


const Profile = () => {
    return (
        <div className='content'>
            <div className="about_mi-all">
                <img className='avatar' src='https://avatars.mds.yandex.net/get-kinopoisk-blog-post-thumb/28671/0c8ab705acf412af844885a22d9b95f6/orig' />
                <div className="about_mi">
                    <div className='about_mi-inner'>
                        <p className="about_mi-info">Tom Hardy</p>
                        <p className="about_mi-info">Date of Birth: 15 september</p>
                        <p className="about_mi-info">City:Minsk</p>
                        <p className="about_mi-info">Education:BSUIR</p>
                        <p className="about_mi-info">Web Site: https://tomhardy.com</p>
                    </div>
                </div>
            </div>
            <MyPosts />
        </div >
    );
}

export default Profile;