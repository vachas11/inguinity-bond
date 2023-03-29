import React from "react";
import "./newpost.scss";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const NewPost = ({ post }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div
      className="new-post"
      onClick={() => {
        show && setShow(false);
      }}
    >
      <div className="container">
        <div className="user">
          <div className="user-info">
            <img src={post.profilePic} alt="" />
            <div className="user-details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none" }}
              >
                <span>{post.name}</span>
              </Link>
              <span data="time-line">10 min ago</span>
            </div>
          </div>
          <MoreHorizIcon onClick={() => setShow(!show)} />
          {show && (
            <div
              className="hello"
              style={{
                height: "200px",
                width: "200px",
                border: "2px solid yellow",
                backgroundColor: "crimsonRed",
              }}
            >
              <span
                onClick={() => console.log("hotpink")}
                style={{ cursor: "pointer" }}
              >
                Some thing seductive coming very soon
              </span>
            </div>
          )}
        </div>
        <div className="img-content">
          <span>{post.desc}</span>
          <img src={post.img} />
        </div>
        <div className="info">
          <div className="item">
            <FavoriteBorderOutlinedIcon />
            <span>Like</span>
          </div>
          <div className="item">
            <TextsmsOutlinedIcon />
            <span>Comment</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            <span>Share</span>
          </div>
        </div>
        {!true && (
          <div style={{ height: "400px" }}>this is the comment section</div>
        )}
      </div>
    </div>
  );
};

export default NewPost;
