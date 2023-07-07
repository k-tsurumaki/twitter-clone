import React from "react";
import "./Widgets.css";
import { Search } from "@mui/icons-material";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets--widgetContainer">
        <h2>Are you doing now?</h2>
        <TwitterTweetEmbed tweetId={"1673303539744112641"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="K2406288461"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/K2406288461"}
          options={{ text: "#React.js 勉強中", via: "K2406288461" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
