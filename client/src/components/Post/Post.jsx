import "./Post.css";

// icons
import MoreVertIcon from "@mui/icons-material/MoreVert";

// asserts
import { Heart, Like, Person_1 } from "../../assets";

const Post = ({ post }) => {
  console.log(post);
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
            <span className="postUsername">John Doe</span>
            <span className="postDate">{post?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img src={post?.photo} alt="post_img" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={Like} alt="like" />
            <img className="likeIcon" src={Heart} alt="heart" />
            <span className="postLikeCounter">{post?.like} people like it</span>
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
