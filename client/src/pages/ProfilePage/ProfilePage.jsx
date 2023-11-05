import "./ProfilePage.css";

// components
import { Topbar, Rightbar, Sidebar, Feed } from "../../components";

// assets
import { Nature_1, Person_1 } from "../../../public/assets";

const ProfilePage = () => {
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
              <h4 className="profileInfoUsername">James Brown</h4>
              <p className="profileInfoDescription">Hello world</p>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
