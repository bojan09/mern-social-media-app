import "./Sidebar.css";

// components
import CloseFriends from "../CloseFriends/CloseFriends";

// icons
import FeedIcon from "@mui/icons-material/Feed";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";

// data
import { Users } from "../../dummyData.js";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FeedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <ChatBubbleIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <VideoLibraryIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <VideoLibraryIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <HelpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <CloseFriends key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
