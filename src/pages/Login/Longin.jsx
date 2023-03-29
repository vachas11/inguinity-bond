import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
const Longin = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Ingenuity Bond.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            repudiandae odit tempore ducimus! Quod consequuntur voluptatibus
          </p>
          <span>Don't have an account</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="User Name" />
            <input type="text" placeholder="Password" />

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Longin;
