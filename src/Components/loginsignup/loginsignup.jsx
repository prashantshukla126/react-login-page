import React from "react";
import "./loginsignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export const Loginsignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <hr className="underline" />
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="submit-cont">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
      <div className="forgetpass">
        Forgot password?? <span>Reset now!</span>
      </div>
    </div>
  );
};
