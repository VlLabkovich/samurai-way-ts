import React from "react";

import s from './Profile.module.css'
import {Post} from "./MyPosts/Post/Post";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {

    return (
        <div className={s.content}>

            <div>
                <img src='https://wallpaperaccess.com/full/3842133.jpg' alt='Social networks'/>
                {/*<img src='https://gvimmigration.com/wp-content/uploads/2018/05/shutterstock_216320248-1.jpg'/>*/}
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}