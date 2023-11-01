import "./Rightbar.css";

// assets
import { Ad, Gift, Person_2, Person_3, Person_4 } from "../../assets";

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                src={Person_2}
                alt="profileImage"
                className="rightbarProfileImage "
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                src={Person_3}
                alt="profileImage"
                className="rightbarProfileImage "
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                src={Person_4}
                alt="profileImage"
                className="rightbarProfileImage "
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
