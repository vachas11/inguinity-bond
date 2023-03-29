import React from "react";
import "./stories.scss";

const Stories = () => {
  //temporary
  const story = [
    {
      id: 1,
      name: "Denerays",
      img: "https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 2,
      name: "Denerays",
      img: "https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 3,
      name: "Denerays",
      img: "https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    // {
    //   id: 4,
    //   name: "Denerays",
    //   img: "https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    // },
    // {
    //   id: 4,
    //   name: "Denerays",
    //   img: "https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    // },
  ];
  return (
    <div className="stories">
      <div className="container">
        <div className="story">
          <img src="https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=800" />
          <span>{story[0].name}</span>
          <button>+</button>
        </div>
        {story.map((story) => {
          return (
            <div className="story">
              <img src={story.img} />
              <span>{story.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
