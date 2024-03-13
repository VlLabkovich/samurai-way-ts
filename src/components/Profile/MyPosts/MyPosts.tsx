import React from "react";

import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add</button>
                <button>Delete</button>
            </div>
            <div className={s.posts}>
                New posts
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}