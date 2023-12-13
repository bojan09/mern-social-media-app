import "./ProfilePage.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// components
import { Topbar, Rightbar, Sidebar, Feed } from "../../components";

// assets
import { noAvatarImage, noCoverImage } from "../../../public/assets";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const username = useParams().username;
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_PROXY}users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture ? user.coverPicture : noCoverImage}
                alt=""
                className="profileCoverImage"
              />
              <img
                src={user.profilePicture ? user.profilePicture : noAvatarImage}
                alt=""
                className="profileUserImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoUsername">{user.userName}</h4>
              <p className="profileInfoDescription">{user.description}</p>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
