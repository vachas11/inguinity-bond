import React from "react";
import Post from "../../components/Post/Post";
import Stories from "../../components/stories/Stories";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Stories />
        <Post />
      </div>
    </div>
  );
};

export default Home;
