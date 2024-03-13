import React, {useState} from "react";

import s from './Post.module.css'

type PropsPostType = {
    message: string
    likes: number
}

export const Post: React.FC<PropsPostType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg'/>
            <span>{props.message}</span>
            <div>
                <span>{props.likes} Like </span>
                <span>Dislike</span>
                <hr/>
            </div>
        </div>
    )
}