import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SidebarOption from "./SidebarOption";
import { Button } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* ツイッターアイコン */}
      <TwitterIcon className="sidebar--twitterIcon" />

      {/* SidebarOption */}
      <SidebarOption text="Home" Icon={HomeIcon} active/>
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PermIdentityIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}

      {/* ツイートボタン */}
      <Button variant="outlined" className="sidebar--tweet" fullWidth>
        tweet
      </Button>
    </div>
  );
}

export default Sidebar;
