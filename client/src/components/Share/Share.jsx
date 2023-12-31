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
import CancelIcon from "@mui/icons-material/Cancel";

import { userProfile } from "../../constants";
import { noAvatarImage } from "../../../public/assets";

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
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.image = fileName;
      console.log(newPost);
      try {
        await axios.post(`${import.meta.env.VITE_PROXY}upload`, data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post(`${import.meta.env.VITE_PROXY}posts`, newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to={`${userProfile}/${user.username}`}>
            <img
              src={user.profilePicture ? user.profilePicture : noAvatarImage}
              alt="person"
              className="shareProfileImage image"
            />
          </Link>
          <input
            type="text"
            placeholder={`What's on your mind ${user.username
              .charAt(0)
              .toUpperCase()}${user.username.slice(1)} ?`}
            className="shareInput"
            ref={description}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImageContainer">
            <img
              src={URL.createObjectURL(file)}
              alt="image"
              className="shareImg"
            />
            <CancelIcon
              className="shareCancelIcon"
              onClick={() => setFile(null)}
            />
          </div>
        )}
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
