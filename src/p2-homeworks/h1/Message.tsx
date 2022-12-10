import React from 'react'
import s from './Message.module.css'
import {MessageType} from "./HW1";

function Message({avatar, name, message, time}: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.imageAndText}>
                <img src={avatar}/>
                <div className={s.textBlock}>
                    <div className={s.name}>{name}</div>
                    <div className={s.messageAndTime}>
                        <div className={s.messageText}>{message}</div>
                        <div className={s.time}>{time}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
