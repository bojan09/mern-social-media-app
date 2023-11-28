import "./Feed.css";
import axios from "axios";
import { useEffect, useState } from "react";

// components
import { Post } from "../";
import { Share } from "../";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            `${import.meta.env.VITE_PROXY}posts/profile/` + username
          )
        : await axios.get(
            `${
              import.meta.env.VITE_PROXY
            }posts/timeline/653bd37dd544d41bb2b2c533`
          );
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

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
