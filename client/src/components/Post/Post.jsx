import "./Post.css";

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import { format } from "timeago.js";
import axios from "axios";

// icons
import MoreVertIcon from "@mui/icons-material/MoreVert";

// asserts
import {
  Heart,
  Like,
  noAvatarImage,
  noCoverImage,
} from "../../../public/assets";

const Post = ({ post }) => {
  const [like, setLike] = useState(post?.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [post.likes, currentUser._id]);

  const likeHandler = () => {
    try {
      axios.put(`${import.meta.env.VITE_PROXY}posts/` + post._id + `/like`, {
        userId: currentUser._id,
      });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_PROXY}users?userId=${post.userId}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePicture ? user.profilePicture : noAvatarImage}
                alt="person"
                className="postProfileImage image"
              />
            </Link>
            <Link to={`profile/${user.username}`}>
              <span className="postUsername">{user.username}</span>
            </Link>
            <span className="postDate">{format(post?.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img
            src={post?.image ? post?.image : noCoverImage}
            alt="post_img"
            className="postImage"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={Like}
              alt="like"
              onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src={Heart}
              alt="heart"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
