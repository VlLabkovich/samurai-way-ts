import React from 'react';
import './App.css';

const App = () => {

    return (

        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://cdn.icon-icons.com/icons2/580/PNG/128/facebook_icon-icons.com_54976.png"/>
            </header>
            <nav className='nav'>
                <div><a href="">Profiles</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className='content'>

                <div>
                    <img
                        src='https://foni.club/uploads/posts/2023-01/1674405899_foni-club-p-fon-mir-17.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>New posts</div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default App;
