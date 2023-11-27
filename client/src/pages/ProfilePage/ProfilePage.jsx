import "./ProfilePage.css";
import { useState, useEffect } from "react";
import axios from "axios";

// components
import { Topbar, Rightbar, Sidebar, Feed } from "../../components";

// assets
import { Nature_1, Person_1 } from "../../../public/assets";

const ProfilePage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_PROXY}users?username=john`
      );
      setUser(res.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={Nature_1} alt="" className="profileCoverImage" />
              <img src={Person_1} alt="" className="profileUserImage" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoUsername">{user.userName}</h4>
              <p className="profileInfoDescription">{user.description}</p>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="john" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
