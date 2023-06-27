import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.post}>
                <Post message='hi' countLike='15' countDis='2' />
                <Post message='это первое сообщение' countLike='20' countDis='4' />
            </div>
        </div>

    );
}

export default MyPosts;