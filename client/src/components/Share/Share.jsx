import "./Share.css";

// icons
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddReactionIcon from "@mui/icons-material/AddReaction";

// assets
import { Person_1 } from "../../../public/assets";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={Person_1}
            alt="person"
            className="shareProfileImage image"
          />
          <input
            type="text"
            placeholder="What's on your mind John?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="crimson" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>

            <div className="shareOption">
              <LocalOfferIcon
                htmlColor="cornflowerblue"
                className="shareIcon"
              />
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
              <LocationOnIcon htmlColor="limegreen" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption">
              <AddReactionIcon htmlColor="gold" className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
