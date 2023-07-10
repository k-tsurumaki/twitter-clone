import React, { useEffect, useState } from "react";
import TweetBox from "./TweetBox";
import "./Timeline.css";
import Post from "../post/Post";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import FlipMove from "react-flip-move";

function Timeline({ isAuth }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  console.log(isAuth);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2 className="">Home</h2>
      </div>
      {/* TweetBox */}
      {isAuth && <TweetBox />}
      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.auther.username}
            username={post.auther.username}
            verified={post.verified}
            text={post.text}
            avatar={post.auther.icon}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Timeline;
