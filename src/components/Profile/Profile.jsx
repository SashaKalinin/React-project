import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo name="Tom Hardy"
                         dateOfBirth="15 september"
                         city="Minsk"
                         education="BSUIR"
                         webSite="https://tomhardy.com"/>
            <MyPosts/>
        </div>
    );
}

export default Profile;