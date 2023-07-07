import React from 'react'
import TweetBox from './TweetBox';
import "./Timeline.css"
import Post from '../post/Post';

function Timeline() {
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2 className="">Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <Post />
    </div>
  );
}

export default Timeline
