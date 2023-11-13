import axios from "axios";

// axios instant
const API = axios.create({ baseURL: "http://localhost:8080" });

export const fetchPosts = () =>
  API.get("api/posts/timeline/653bd37dd544d41bb2b2c533");
