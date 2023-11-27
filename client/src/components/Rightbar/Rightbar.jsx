import "./Rightbar.css";

// components
import Online from "../Online/Online";
// assets
import {
  Ad,
  Gift,
  Person_10,
  Person_8,
  Person_9,
} from "../../../public/assets";

// data
import { Users } from "../../dummyData.js";

export default function Rightbar({ user }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={Gift} alt="birthday" className="birthdayImage" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src={Ad} alt="ad" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : user.relationship === 3
                ? "Engaged"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={Person_8}
              alt="friendImage"
              className="rightbarFollowingImage"
            />
            <span className="rightbarFollowingName">James Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={Person_9}
              alt="friendImage"
              className="rightbarFollowingImage"
            />
            <span className="rightbarFollowingName">James Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={Person_10}
              alt="friendImage"
              className="rightbarFollowingImage"
            />
            <span className="rightbarFollowingName">James Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
