import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div className="about_mi-all">
                
                    <img className='avatar' src='https://gtavrl.ru/public/poscreenra.jpg' />
                
                <div className="about_mi">
                    <p className="about_mi-inner">Tom Hardy</p>
                    <p className="about_mi-inner">Date of Birth: 15 september</p>
                    <p className="about_mi-inner">City:Minsk</p>
                    <p className="about_mi-inner">Education:BSUIR</p>
                    <p className="about_mi-inner">Web Site: https://tomhardy.com</p>
                </div>
            </div>
            <div>
                <div>
                    New post
          </div>
                <div>
                    post 1
            </div>
                <div>
                    post 2
            </div>
            </div>
        </div>
    );
}

export default Profile;