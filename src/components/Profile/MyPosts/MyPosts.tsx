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
            <hr/>
            <Post message='Hello, how are you?' likes={10}/>
            <Post message='It is my first post' likes={20}/>
            <Post message='It is my first post' likes={0}/>
        </div>
    )
}