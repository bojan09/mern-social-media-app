import "./Online.css";

import { noAvatarImage } from "../../../public/assets";

const Online = ({ friend }) => {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImageContainer">
          <img
            src={friend.profilePicture ? friend.profilePicture : noAvatarImage}
            alt="profileImage"
            className="rightbarProfileImage "
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{friend.userName}</span>
      </li>
    </div>
  );
};

export default Online;
