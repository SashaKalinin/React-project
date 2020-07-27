import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {

    let dataArr = [{name:"Tom Hardy", dateOfBirth:"15 september", city:"Minsk", education:"BSUIR", webSite:"https://tomhardy.com" }]
    let profileArr = dataArr.map(elem => <ProfileInfo name={elem.name} dateOfBirth={elem.dateOfBirth} city={elem.city} education={elem.education} webSite={elem.webSite}/>)

    return (
        <div className={s.content}>
            {profileArr}
            <MyPosts/>
        </div>
    );
}

export default Profile;