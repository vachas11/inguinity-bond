import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";
const Register = () => {
  return (
    <div className="register">
      <div className="register-card">
        <div className="register-left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="User name" name="User name" id="" />
            <input type="text" placeholder="Email" name="Email" id="" />
            <input type="text" placeholder="Password" name="Password" id="" />
            <input type="text" placeholder="Name" name="Name" id="" />

            <button>Register</button>
          </form>
        </div>
        <div className="register-right">
          <h1>Ingenuity Bond.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            maiores reprehenderit veritatis ab saepe quaerat ipsa odit nesciunt.
          </p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
