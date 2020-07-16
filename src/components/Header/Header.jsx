import React from 'react';
import s from'./Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img} src="https://static.wixstatic.com/media/3d4b1f_7f53ad0971a34125b76f1bd048cb3069~mv2.png/v1/fill/w_252,h_178,al_c,q_85,usm_0.66_1.00_0.01/%D0%BF%D0%B5%D1%80%D0%B5%D1%86.webp"></img>
            <p className={s.logo}>HOTPOST</p>
        </header>
    );
}

export default Header;