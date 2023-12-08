import "./Share.css";

import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import axios from "axios";

// icons
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddReactionIcon from "@mui/icons-material/AddReaction";

import { userProfile } from "../../constants";

const Share = () => {
  const { user } = useContext(AuthContext);
  const description = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: description.current.value,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("file", file);
      data.append("name", filename);
    }
    try {
      await axios.post(`${import.meta.env.VITE_PROXY}posts`, newPost);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to={`${userProfile}/${user.userName}`}>
            <img
              src={user.profilePicture}
              alt="person"
              className="shareProfileImage image"
            />
          </Link>
          <input
            type="text"
            placeholder={`What's on your mind ` + user.userName + `?`}
            className="shareInput"
            ref={description}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaIcon htmlColor="crimson" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

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
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
