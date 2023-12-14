import "./Topbar.css";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { mainPath, userProfile } from "../../constants";

// assets
import { noAvatarImage } from "../../../public/assets";

const Topbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="topbarContainer">
      <Link to={mainPath}>
        <span className="logo">ShareSpace</span>
      </Link>
      <div className="topbarLeft"></div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friends,posts or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <Link to={mainPath}>
            <span className="topbarLink">Homepage</span>
          </Link>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`${userProfile}/${user.username}`}>
          <img
            src={user.profilePicture ? user.profilePicture : noAvatarImage}
            alt="person"
            className="topbarProfileImage image"
          />
        </Link>
        <Link className="topbarUsername" to={`${userProfile}/${user.username}`}>
          <span>Hi, </span>
          {user.username}
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
