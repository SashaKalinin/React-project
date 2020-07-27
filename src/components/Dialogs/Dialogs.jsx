import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <NavLink to={path} className={s.dialog} activeClassName={s.activeLink}>
            <div className={s.imgDialog}></div>
            <div className={s.user}>{props.name}</div>
        </NavLink>
    );
}

const MessageGet = (props) => {
    return (
        <div className={s.message}>
            <span className={s.span}></span>
            <p className={s.messageP}>{props.message}</p>
        </div>
    )
}

const MessageSend = (props) => {
    return (
        <div className={s.message}>
            <span className={s.span2}></span>
            <p className={s.messageP}>{props.message}</p>
        </div>
    )
}

const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Mary"},
        {id: 4, name: "Roman"}
    ]

    let DialogsArray = DialogsData.map(elem => <DialogItem name={elem.name} id={elem.id}/>);

    let MessagesGetData = [
        {id: 1, message: "Hi", flag: 0},
        {id: 2, message: "How are you?", flag: 0},
        {id: 3, message: "You hear?", flag: 0},
        {id: 1, message: "Im fine", flag: 1}
    ]

    let MessagesArr = MessagesGetData.map(elem => <MessageGet message={elem.message} id={elem.id} flag={elem.flag}/>)

    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {DialogsArray}
                </div>
                <div className={s.messeges}>
                    <div className={s.wrapper}>
                        {MessagesArr}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs