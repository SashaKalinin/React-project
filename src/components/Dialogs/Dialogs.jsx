import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <NavLink to='#' className={s.dialog} activeClassName={s.activeLink}>
                        <div className={s.circleDialog}></div>
                        <div className={s.user}>Dima</div>
                    </NavLink>
                    <NavLink to='#' className={s.dialog} activeClassName={s.activeLink}>
                        <div className={s.circleDialog}></div>
                        <div className={s.user}>Sasha</div>
                    </NavLink>
                    <NavLink to='#' className={s.dialog} activeClassName={s.activeLink}>
                        <div className={s.circleDialog}></div>
                        <div className={s.user}>Mary</div>
                    </NavLink>
                    <NavLink to='#' className={s.dialog} activeClassName={s.activeLink}>
                        <div className={s.circleDialog}></div>
                        <div className={s.user}>Roman</div>
                    </NavLink>
                </div>
                <div className={s.masseges}>
                    <div className={s.wrapper}>
                        <div className={s.massege}>
                            <span className={s.span}></span>
                            <p className={s.massegeP}>Hi</p>
                        </div>
                        <div className={s.massege}>
                            <span className={s.span}></span>
                            <p className={s.massegeP}>How are you?</p>
                        </div>
                        <div className={s.massege}>
                            <span className={s.span}></span>
                            <p className={s.massegeP}>You hear?</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs