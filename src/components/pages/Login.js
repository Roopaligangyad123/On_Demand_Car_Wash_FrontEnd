import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Signup from "./SignUp";
import { toast } from "react-toastify";
import { createButton } from "react-social-login-buttons";

const config = {
  text: "Log in with Facebook",
  icon: "facebook",
  iconFormat: (name) => `fa fa-${name}`,
  style: { background: "#3b5998" },
  activeStyle: { background: "#293e69" },
};
/** My Facebook login button. */
const MyFacebookLoginButton = createButton(config);

const config1 = {
  activeStyle: { background: "#EFF0EE" },
  icon: "google",
  style: { background: "white", color: "black" },
  text: "Log in with Google",
};

const GoogleLoginButton = createButton(config1);

const Login = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPss] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passErr, setpassErr] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setNameErr(false);
  };
  const handlePass = (e) => {
    setPss(e.target.value);
    setpassErr(false);
  };
  const handleClick = () => {
    if (name && pass) {
      const data = {
        username: name,
        password: pass,
      };
      if (name === "admin" && pass === "1234") {
        axios
          .post("http://localhost:8083/user/login", data)
          .then(function (response) {
            if (response && response.data) {
              if (response.data === "logged in") {
                navigate("/Admin");
              } else {
                alert("wrong credentials.");
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        axios
          .post("http://localhost:8083/user/login", data)
          .then(function (response) {
            if (response && response.data) {
              if (response.data === "logged in") {
                // alert("Welcome " + loginForm.username);

                toast.success(
                  "Welcome " + name,

                  {
                    position: "top-center",

                    autoClose: 3000,
                  }
                );

                navigate("/Userhome");
              } else {
                alert("wrong credentials.");
              }
            }
          })

          .catch(function (error) {
            console.log(error);
          });
      }
    } else if (name) {
      setpassErr(true);
      setNameErr(false);
    } else if (pass) {
      setNameErr(true);
      setpassErr(false);
    } else {
      setpassErr(true);
      setNameErr(true);
    }
  };

  return (
    <div>
      <div className="userbg">
        <div className="loginForm">
          <div className="text-center">
            <h3>USER LOGIN</h3>
          </div>
          <div className="name">
            <label>Username</label>
            <input
              style={{ backgroundColor: "white" }}
              type="text"
              placeholder="  Enter Username"
              value={name}
              onChange={handleName}
            />
            <br></br>
            {nameErr && <span>Enter valid name</span>}
            <br />
            <label>Password</label>
            <input
              style={{ backgroundColor: "white" }}
              type="password"
              placeholder="password"
              value={pass}
              onChange={handlePass}
            />
            <br></br>
            {passErr && <span>Enter valid password</span>}
          </div>
          <br />

          <button className="Btn" onClick={handleClick}>
            Submit
          </button>
          {/* <div>
          <MyFacebookLoginButton />
        </div>
        <div>
          <GoogleLoginButton />
        </div> */}
          <button
            className="Btn"
            onClick={() => {
              navigate("/Signup");
            }}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
