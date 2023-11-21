import "./Feed.css";
import axios from "axios";
import { useEffect, useState } from "react";

// components
import { Post } from "../";
import { Share } from "../";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_PROXY}posts/timeline/6555155f58e3363dcf6db81f`
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
