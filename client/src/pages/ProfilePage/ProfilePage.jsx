import "./ProfilePage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// components
import { Topbar, Rightbar, Sidebar, Feed } from "../../components";

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
                src={user.coverPicture}
                alt=""
                className="profileCoverImage"
              />
              <img
                src={user.profilePicture}
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
