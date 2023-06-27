import React from "react";
import classes from './Post.module.css';
import imagePost from './postimg.jpeg';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src={imagePost}></img>
            {props.message}
            <div>
                <span>like </span>{props.countLike}

                <span> dislike </span>{props.countDis}
            </div>
        </div>
    );
}

export default Post;