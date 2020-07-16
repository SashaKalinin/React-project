import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return(
        <div className={s.about_miAll}>
            <img className={s.avatar} src='https://avatars.mds.yandex.net/get-kinopoisk-blog-post-thumb/28671/0c8ab705acf412af844885a22d9b95f6/orig' />
            <div className={s.about_mi}>
                <div className={s.about_miInner}>
                    <p className={s.about_miInfo}>{props.name}</p>
                    <p className={s.about_miInfo}>Date of Birth: {props.dateOfBirth}</p>
                    <p className={s.about_miInfo}>City:{props.city}</p>
                    <p className={s.about_miInfo}>Education:{props.education}</p>
                    <p className={s.about_miInfo}>Web Site: {props.webSite}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
