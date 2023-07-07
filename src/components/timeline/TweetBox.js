import { Avatar, Button } from '@mui/material';
import React from 'react'
import "./TweetBox.css"

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox--input">
          <Avatar />
          <input placeholder="Are you doing now?" type="text"></input>
        </div>
        <input
          className="tweetBox--imageInput"
          placeholder="Enter image URL"
          type="text"
        ></input>
        <Button className="tweetBox--tweetButton" type="submit">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox
