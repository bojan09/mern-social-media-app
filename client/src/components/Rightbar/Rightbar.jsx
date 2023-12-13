import "./Rightbar.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// components
import Online from "../Online/Online";

// assets
import { Ad, Gift } from "../../../public/assets";

export default function Rightbar({ user }) {
  const HomeRightbar = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
      const getFriends = async () => {
        try {
          const friendList = await axios.get(`users/friends/` + user._id);
          setFriends(friendList.data);
        } catch (err) {
          console.log(err);
        }
      };
      getFriends();
    }, []);
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
          {friends.map((friend) => (
            <Online key={friend.id} friend={friend} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
      const getFriends = async () => {
        try {
          const friendList = await axios.get(`users/friends/` + user._id);
          setFriends(friendList.data);
        } catch (err) {
          console.log(err);
        }
      };
      getFriends();
    }, []);
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
          {friends.map((friend) => (
            <Link key={friend.id}>
              <div className="rightbarFollowing">
                <img
                  src={friend.profilePicture}
                  alt="friendImage"
                  className="rightbarFollowingImage"
                />

                <span className="rightbarFollowingName">{friend.userName}</span>
              </div>
            </Link>
          ))}
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
