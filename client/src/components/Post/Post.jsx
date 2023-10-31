import "./Post.css";

// icons
import MoreVertIcon from "@mui/icons-material/MoreVert";

// asserts
import { Heart, Like, Person_1, Post_1 } from "../../assets";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Person_1}
              alt="person"
              className="postProfileImage image"
            />
            <span className="postUsername">Jane Doe</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! It&apos;s my first post</span>
          <img src={Post_1} alt="post_img" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={Like} alt="like" />
            <img className="likeIcon" src={Heart} alt="heart" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
