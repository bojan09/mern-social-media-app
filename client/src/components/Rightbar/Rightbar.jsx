import "./Rightbar.css";

// components
import Online from "../Online/Online";

// assets
import { Ad, Gift } from "../../assets";

// data
import { Users } from "../../dummyData.js";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
};

export default Rightbar;
