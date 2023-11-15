import "./Feed.css";
import axios from "axios";
import { useEffect } from "react";
import { Share } from "../";

const Feed = () => {
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_PROXY}posts/timeline/6555155f58e3363dcf6db81f`
      );
      console.log(res);
    };
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
