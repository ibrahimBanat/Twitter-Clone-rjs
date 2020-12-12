import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


function Post({
    displayName, 
    userName,
    verified,
    text,
    image,
    avatar
}) {
    
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://s3.amazonaws.com/tasmeemme.project.mi.thumbnails/resize_805x9000/869/386869.png"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Ibrahim Banat {" "}
                            <span className="psot__headerSpecial">
                                <VerifiedUserIcon className="post__badge"/>@ib_bi

                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>
                            i callange you to build a twitter clone using react js 

                        </p>
                    </div>
                </div>    
                <img src="https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/> 
                </div>
            </div>
            
        </div>
    )
}

export default Post
