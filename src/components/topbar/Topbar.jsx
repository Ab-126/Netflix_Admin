import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">abhiadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
