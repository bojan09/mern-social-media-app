import "./CloseFriends.css";

const CloseFriends = ({ user }) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img
          src={user.profilePicture}
          alt="friend"
          className="sidebarFriendImage image"
        />
        <span className="sidebarFriendName">John Doe</span>
      </li>
    </div>
  );
};

export default CloseFriends;
