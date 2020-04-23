import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div className="about_mi-all">

                <img className='avatar' src='https://gtavrl.ru/public/poscreenra.jpg' />

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
                <div className='my-post-share'>
                    <div className='post-circle'></div><p className='post'>Hey, why how are you</p>
                </div>
                <div className='my-post-share'>
                <div className='post-circle'></div><p className='post'>Im lost yourself</p>
                </div>
            </div>
        </div >
    );
}

export default Profile;