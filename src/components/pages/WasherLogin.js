import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
//import Signup from "./SignUp";
import { Link } from "react-router-dom";
import "./About.css";
import { toast } from "react-toastify";

const WasherLogin = () => {
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
        name: name,
        password: pass,
      };
      if (name === "admin" && pass === "1234") {
        axios
          .post("http://localhost:8082/washer/login", data)
          .then(function (response) {
            if (response && response.data) {
              if (response.data === "logged in") {
                navigate("/washerhome");
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
          .post("http://localhost:8082/washer/login", data)
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

                navigate("/washerhome");
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
    <div className="hi">
      <div className="loginForm">
        <div className="text-center">
          <h3>Washer Login</h3>
        </div>
        <div className="name">
          <label>Username</label>
          <input
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
          Login
        </button>
        <button
          className="Btn"
          onClick={() => {
            navigate("/");
          }}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default WasherLogin;
