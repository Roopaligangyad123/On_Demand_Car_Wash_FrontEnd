import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import {Link} from "react-router-dom";

function WashersignUp() {
  const [washer, setWasher] = useState({
        id: "",
        location: "",
        name: "",
        password: ""
  });

  const navigate=useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    event.persist();
    setWasher((washer) => ({
      ...washer,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    let errors = {};

    if (!washer.id) {
      errors["idErr"] = "Enter  Id";
    }

    if (!washer.location) {
      errors["locationErr"] = "Enter location";
    }

    if (!washer.name) {
      errors["nameErr"] = "Enter Name";
    }
    if (!washer.password) {
        errors["passwordErr"] = "Enter password";
      }

    setFormErrors(errors);

    const noErrors = Object.keys(errors).length === 0;

    if (noErrors) {
      const payload = {
        id: washer.id,
        location: washer.location,
        name: washer.name,
        password: washer.password,
      }

      axios
        .post("http://localhost:8082/washer/addwasher", payload)

        .then((resp) => alert("Washer is added with id:" + resp.data.Id));
        console.log("DONE");
        navigate(-1);
    }
  };
  return (
    <div className="book">
    <div  style={{width:"400px",float:"center"}}>
    <div  className="container"  align="center" style={{ backgroundColor:""}}>
      <hr/>
      <h2 style={{ color: "blue" }}>
        <b>Please Enter The Following Details</b>
      </h2>

      <div>
        <label className="col-sm-2 col-form-label"  style={{ color: "black" }}> Id</label>

        <input type="text" name="id" value={washer.id} onChange={handleChange}/>

        {formErrors.idErr && (
          <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.idErr}  </div>
        )}
      </div>

      <div>
        <label className="col-sm-2 col-form-label">Location</label>

        <input type="text" name="location" value={washer.location} onChange={handleChange} />

        {formErrors.locationErr && (
          <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.locationErr}  </div>
        )}
      </div>

      <div>
        <label className="col-sm-2 col-form-label">Name</label>

        <input type="text" name="name" value={washer.name} onChange={handleChange} />

        {formErrors.nameErr && (
          <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.nameErr}  </div>
        )}
      </div>

      <div>
        <label className="col-sm-2 col-form-label">Password</label>

        <input type="text" name="password" value={washer.password} onChange={handleChange} />

        {formErrors.passwordErr && (
          <div style={{ color: "red", paddingBottom: 10 }}> {formErrors.passwordErr}  </div>
        )}
      </div>

      <div></div>
      <button className="btn btn-success" style={{ color: "maroon" }} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
    </div>
  );
}
export default WashersignUp;