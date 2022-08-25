import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./booking.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Booking() {
  const [order, setOrder] = useState({
    vehicleType: "",
    carName: "",
    contactno: "",
    date: "",
    orderId: "",
    username: "",
    address: "",
    washpackId: "",
    // cost: ""
  });

  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event) => {
    event.persist();
    setOrder((order) => ({
      ...order,
      [event.target.name]: event.target.value,
    }));
  };
  const handleChange = () => {
    //validate add student form
    let errors = {};
    // const isValid=isValid();
    if (!order.carName) {
      errors["carNameErr"] = "carName is required";
    }
    if (!order.vehicleType) {
      errors["vehicleTypeErr"] = "vehicle type is required";
    }

    if (!order.contactno) {
      errors["contactnoErr"] = "contact no is required";
    }
    if (typeof order.contactno !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(order.contactno)) {
        // isValid = false;
        errors["contactnoErr"] = "Please enter only number.";
      } else if (order.contactno.length != 10) {
        // isValid = false;
        errors["contactnoErr"] = "Please enter valid phone number.";
      }
    }
    if (!order.date) {
      errors["dateErr"] = "date is required";
    }
    if (!order.washpackId) {
      errors["washpackIdErr"] = "washpackId is required";
    }
    if (!order.username) {
      errors["usernameErr"] = "username is required";
    }
    if (!order.address) {
      errors["addressErr"] = "address is required";
    }
    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const payload = {
        vehicleType: order.vehicleType,
        carName: order.carName,
        contactno: order.contactno,
        date: order.date,
        orderId: order.orderId,
        username: order.username,
        address: order.address,
        washpackId: order.washpackId,
      };
      axios
        .post(" http://localhost:8081/order/addorder", payload)
        .then(function (response) {
          if (response && response.data) {
            toast.success("Order Placed Proceeding to payment ", {
              position: "top-center",

              autoClose: 3000,
            });
          }

          navigate("/Payment");
        })

        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div className="abc">
      <div>
        <div className="form hero-containers" style={{ backgroundColor: "" }}>
          <h1>BOOK YOUR CAR WASH </h1>
          <h1 style={{ color: "white" }}>Contact Details</h1>

          <div className="ContactDetails">
            <h3 style={{ color: "white" }}>Date for Booking</h3>
            <input type="date" name="date" onChange={handleSubmit} />
            {formErrors.dateErr && (
              <div style={{ color: "red", paddingBottom: 10 }}>
                {formErrors.dateErr}
              </div>
            )}
          </div>
          <div>
            <input
              style={{ backgroundColor: "white" }}
              className="contactDetails"
              type="text"
              name="username"
              onChange={handleSubmit}
              placeholder="Enter Your Full Name"
            />
            {formErrors.usernameErr && (
              <div style={{ color: "red", paddingBottom: 10 }}>
                {formErrors.usernameErr}
              </div>
            )}
            <br />
            <div>
              <label for="carName" onChange={handleSubmit}>
                CarName
              </label>

              <select
                name="carName"
                value={order.carName}
                onChange={handleSubmit}
              >
                <option value="">select</option>
                <option value="Swift">Swift</option>
                <option value="BMW">BMW</option>
                <option value="Toyota">Toyota</option>
                <option value="Audi">Audi</option>
              </select>

              {formErrors.carName && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.carName}
                </div>
              )}
            </div>

             {/* <input
              style={{ backgroundColor: "white" }}
              className="contactDetails"
              type="text"
              name="vehicleType"
              placeholder="Enter Your vehicle type"
              onChange={handleSubmit}
            />
            {formErrors.vehicleTypeErr && (
              <div style={{ color: "red", paddingBottom: 10 }}>
                {formErrors.vehicleTypeErr}
              </div>
            )} */}
            <div >

<label

  for="vehicleType"

  onChange={handleSubmit}

 

>

  vehicleType:

</label>



<select

  name="vehicleType"

  value={order.vehicleType}

  onChange={handleSubmit}

>

  <option value="">select</option>

  <option value="Hatchback">Hatchback</option>

  <option value="Sedan">Sedan</option>

  <option value="SUV">SUV</option>

  <option value="MUV">MUV</option>

  <option value="Coupe">Coupe</option>

  <option value="Convertible">Convertible</option>

  <option value="Pickup Truck">Pickup Truck</option>

</select>

{formErrors.vehicleTypeErr && (

  <div style={{ color: "red", paddingBottom: 10 }}>

    {formErrors.vehicleTypeErr}

  </div>

)}

</div>
            <br /> 
            <input
              className="contactDetails"
              type="number"
              name="washpackId"
              onChange={handleSubmit}
              placeholder="Enter washpackId"
            />
            {formErrors.washpackIdErr && (
              <div style={{ color: "red", paddingBottom: 10 }}>
                {formErrors.washpackIdErr}
              </div>
            )}
            <br />
            <input
              style={{ backgroundColor: "white" }}
              type="text"
              className="contactDetails"
              name="contactno"
              onChange={handleSubmit}
              placeholder="Enter Phone"
            />
            {formErrors.contactnoErr && (
              <div style={{ color: "red", paddingBottom: 10 }}>
                {formErrors.contactnoErr}
              </div>
            )}
            <br />

            <textarea
              cols="30"
              className="contactDetailsTextArea"
              rows="10"
              type="text"
              name="address"
              onChange={handleSubmit}
              placeholder="Your Address"
            />
            {formErrors.addressErr && (
              <div style={{ color: "red", paddingBottom: 10 }}>
                {formErrors.addressErr}
              </div>
            )}
          </div>
          <div>
            <button
              className="btn btn-outline-light btn-lg px-5"
              type="submit"
              onClick={() => {
                handleChange();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
