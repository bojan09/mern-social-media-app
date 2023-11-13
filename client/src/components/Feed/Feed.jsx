import "./Feed.css";
import { useEffect } from "react";
import { fetchPosts } from "../../../api";
import { Share } from "../";

const Feed = () => {
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {/* {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))} */}
      </div>
    </div>
  );
};

export default Feed;
