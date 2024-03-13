import React from "react";

import s from './Post.module.css'

export const Post = () => {

    return (
        <div className={s.item}>
            <img src='https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg'/>
            Post 1
            <div>
                <span>Like </span>
                <span>Dislike</span>
                <hr/>
            </div>
        </div>
    )
}