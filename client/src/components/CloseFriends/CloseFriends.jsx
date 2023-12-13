import "./CloseFriends.css";

import { noAvatarImage } from "../../../public/assets";

const CloseFriends = ({ user }) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img
          src={user?.profilePicture ? user?.profilePicture : noAvatarImage}
          alt="friend"
          className="sidebarFriendImage image"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};

export default CloseFriends;
