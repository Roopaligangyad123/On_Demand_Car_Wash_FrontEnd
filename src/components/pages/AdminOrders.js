import React, { useEffect, useState, deleteRow } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminOrders = () => {
  const [washers, setWashers] = useState([]);

  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8081/order/allorders").then((result) => {
      result.json().then((resp) => {
        setWashers(resp);
      });
    });
  }, []);

  // new line

  return (
    <div>
      <div className="container-class">
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
          </div>
          <hr style={{ marginTop: "30px" }} />
        </div>
      ))}
    </div>
  );
};
export default AdminOrders;
