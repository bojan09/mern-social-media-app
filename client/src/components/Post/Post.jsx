import "./Post.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";

// icons
import MoreVertIcon from "@mui/icons-material/MoreVert";

// asserts
import { Heart, Like, Person_10, Post_10 } from "../../../public/assets";

const Post = ({ post }) => {
  const [like, setLike] = useState(post?.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_PROXY}users/${post.userId}`
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
            <img
              src={user.profilePicture || Person_10}
              alt="person"
              className="postProfileImage image"
            />
            <span className="postUsername">{user.userName}</span>
            <span className="postDate">{format(post?.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img
            src={post?.img || Post_10}
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
