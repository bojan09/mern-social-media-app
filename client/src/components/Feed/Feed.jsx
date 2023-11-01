import "./Feed.css";

import { Share, Post } from "../";
import { Posts } from "../../dummyData.js";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
