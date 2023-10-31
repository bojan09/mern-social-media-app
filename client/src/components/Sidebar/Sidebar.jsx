import "./Sidebar.css";

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

// assets
import { Person_5, Person_4, Person_3 } from "../../assets";

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
          <li className="sidebarFriend">
            <img src={Person_5} alt="friend" className="sidebarFriendImage" />
            <span className="sidebarFriendName">John Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src={Person_4} alt="friend" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src={Person_3} alt="friend" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jamie Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
