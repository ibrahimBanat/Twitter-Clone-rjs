import React, {useState} from 'react' 
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core"
import db from './firebase'

function TweetBox() {
    const[tweetMessage, setTweetMessage] = useState('');
    const[tweetImage, setTweetImage] = useState('');
    
    const sendTweet = e => { 
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Ibrahim Banat',
            userName: 'Ibr_ba',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pickaface.net/gallery/avatar/20141124_020633_4603_Nice.png",

        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pickaface.net/gallery/avatar/20141124_020633_4603_Nice.png"/>
                    <input 
                    onChange={e => setTweetMessage(e.target.value)}
                    value= {tweetMessage} 
                    placeholder="What's happening?" 
                    type="text"></input> 
                </div>
                    <input 
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Enter image URL" 
                    type="text"></input>
                <Button 
                onClick={sendTweet}
                type="submit"
                className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
