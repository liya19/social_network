import React from "react";
import ProfileCss from './Profile.module.css';
import MyPosts from './myPosts/MyPosts.jsx';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
            </div>
            <div>
                ava+dis
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;