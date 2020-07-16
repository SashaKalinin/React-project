import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/'+ props.id;
    return (
        <NavLink to={path} className={s.dialog} activeClassName={s.activeLink}>
            <div className={s.imgDialog}></div>
            <div className={s.user}>{props.name}</div>
        </NavLink>
    );
}

const MassegeGet = (props) => {
    return(
        <div className={s.massege}>
            <span className={s.span}></span>
            <p className={s.massegeP}>{props.massege}</p>
        </div>
    )
}

const MassegeSend = (props) => {
    return(
        <div className={s.massege}>
            <span className={s.span2}></span>
            <p className={s.massegeP}>{props.massege}</p>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <DialogItem name = "Dima" id = "1"/>
                    <DialogItem name = "Sasha" id = "2"/>
                    <DialogItem name = "Mary" id = "3"/>
                    <DialogItem name = "Roman" id = "4"/>
                </div>
                <div className={s.masseges}>
                    <div className={s.wrapper}>
                        <MassegeGet massege = "Hi"/>
                        <MassegeGet massege = "How are you?"/>
                        <MassegeGet massege = "You hear?"/>
                        <MassegeSend massege = "Im fine"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs