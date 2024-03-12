import React from "react";

import s from './styles/Profile.module.css'

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
            <div className='posts'>
                My posts
                <div className={s.posts}>New posts</div>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
            </div>
            <div>

            </div>
        </div>
    )
}