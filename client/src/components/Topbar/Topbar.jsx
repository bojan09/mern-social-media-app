import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

import { mainPath, userProfile } from "../../constants";

// assets
import { Person_1 } from "../../../public/assets";

const Topbar = () => {
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
        <Link to={`${userProfile}/james`}>
          <img
            src={Person_1}
            alt="person"
            className="topbarProfileImage image"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
