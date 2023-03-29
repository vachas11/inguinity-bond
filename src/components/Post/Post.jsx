import React from "react";
import NewPost from "../newPost/NewPost";
// import ResuablePost from "./resuablePost/ResuablePost";
const Post = () => {
  const tempPost = [
    {
      id: 1,
      name: "Alina",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "welcome to the ingenuity bond you will love the experience",
      img: "https://images.pexels.com/photos/14771004/pexels-photo-14771004.jpeg?auto=compress&cs=tinysrgb&w=800",
    },

    {
      id: 1,
      name: "Alina",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "welcome to the ingenuity bond you will love the experience",
      img: "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 1,
      name: "Alina",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "welcome to the ingenuity bond you will love the experience",
      img: "https://images.pexels.com/photos/2479883/pexels-photo-2479883.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];
  return (
    <div className="post" style={{ maxWidth: "850px" }}>
      <div className="contianer">
        {tempPost.map((post) => {
          return (
            // <div className="post">
            <NewPost post={post} />
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
reactiveUtils.whenOnce(() => view.popup?.visible).then(() => {
    console.log("Popup used for the first time");
  });