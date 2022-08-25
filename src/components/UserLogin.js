import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import AuthService from "./AuthService";
//import "./login.css";

function UserLogin() {
  const [error, setError] = useState(null);

  const [data, setData] = useState({
    username: "",

    password: "",
  });
  const handleChange = (event) => {

    setData(data => ({ ...data, [event.target.name]: event.target.value }));
    // event.persist();
}

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await AuthService.login(data.username, data.password).then(
        () => {
          navigate("/Userhome");
        },

        (error) => {
          setError("Incorrect credentials");
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  function handle(e) {
    const newdata = { ...data };

    newdata[e.target.id] = e.target.value;

    setData(newdata);
  }
  return (
  //   <React.Fragment>
  //     <div className="userbg">
  //       <div className="loginForm">
  //         <div id="formContent">
  //           <h2 className="active">User LogIn </h2>

  //           <div className="fadeIn first"></div>
  //           <form onSubmit={handleLogin}>
  //             {error && <div className="loginerror">{error}</div>}

  //             <input
  //             style={{ backgroundColor: "white" }}
  //               onChange={(e) => handle(e)}
  //               value={data.username}
  //               id="username"
  //               type="text"
  //               className="fadeIn second"
  //               name="login"
  //               placeholder="Username"
  //             />

  //             <input
  //               onChange={(e) => handle(e)}
  //               value={data.password}
  //               type="password"
  //               id="password"
  //               className="fadeIn third"
  //               name="login"
  //               placeholder="password"
  //             />

  //             <input type="submit" className="fadeIn fourth" value="Log In" />
  //           </form>
          
  //           <div id="formFooter"></div>
  //         </div>
  //       </div>
  //     </div>
  //   </React.Fragment>
  // );
//}
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
              value={data.username}
              onChange={handleChange}
            />
            <br></br>
            {/* {nameErr && <span>Enter valid name</span>} */}
            <br />
            <label>Password</label>
            <input
              style={{ backgroundColor: "white" }}
              type="password"
              placeholder="password"
              value={data.password}
              onChange={handleChange}
            />
            <br></br>
            {/* {passErr && <span>Enter valid password</span>} */}
          </div>
          <br />

          <button className="Btn" onClick={handleLogin}>
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

export default UserLogin;
