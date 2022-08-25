import React, { useEffect, useState, deleteRow } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Washer = () => {
  const [washers, setWashers] = useState([]);

  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8081/order/allorders").then((result) => {
      result.json().then((resp) => {
        setWashers(resp);
      });
    });
  }, []);

  const handleClick = (event) => {
    event.currentTarget.disabled = true;

    console.log("button clicked");

    toast.success(
      "Order Confirmed ",

      {
        position: "top-center",

        autoClose: 2000,
      }
    );
  };

  // new line

  return (
    <div>
      <div>
        <h1 className="bookdetails">Booked Details</h1>
      </div>
      {washers.map((emp, ind) => (
        <div className="booking">
          <div>
            <p className="wash">OrderId : {emp.orderId}</p>
            <p className="wash">Name : {emp.username}</p>
            <p className="wash">Car Name : {emp.carName}</p>
            <p className="wash">VehicleType: {emp.vehicleType}</p>
            <p className="wash">Appointment Date : {emp.date}</p>
            <p className="wash">Wash Pack price: {emp.washpackId}</p>
            <p className="wash">Contact.No : {emp.contactno}</p>
            <p className="wash">Address: {emp.address}</p>
            {/* <button className="bookBtn2" >Confirm Booking</button> */}
            {/* <button className="bookBtn1">Delete Booking</button> */}
            <button
              className=" btn btn-danger "
              style={{ marginleft: "5px " }}
              onClick={() => {
                navigate(`/Order/${emp.orderId}`);
              }}
            >
              Delete Order
            </button>
            &nbsp;
            <button
              className="btn btn-success"
              style={{ color: "white", borderRadius: "25px" }}
              onClick={handleClick}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Washer;
