import "./Home.css";

// components
import { Topbar, Rightbar, Sidebar, Feed } from "../../components";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
