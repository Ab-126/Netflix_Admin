import React from "react";
import "./sidebar.css";
import {
  BarChartOutlined,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  PlayArrowOutlined,
  Report,
  Timeline,
  TrendingUp,
  WorkOutline,
  List
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItems">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItems">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to={"/users"} className="link">
              <li className="sidebarListItems">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to={"/movies"} className="link">
              <li className="sidebarListItems">
                <PlayArrowOutlined className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to={'/lists'} className="link">
              <li className="sidebarListItems">
                <List className="sidebarIcon" />
                Lists
              </li>
            </Link>
            <li className="sidebarListItems">
              <BarChartOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItems">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItems">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItems">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItems">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
