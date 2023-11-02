import "./Online.css";

const Online = ({ user }) => {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImageContainer">
          <img
            src={user.profilePicture}
            alt="profileImage"
            className="rightbarProfileImage "
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </div>
  );
};

export default Online;
