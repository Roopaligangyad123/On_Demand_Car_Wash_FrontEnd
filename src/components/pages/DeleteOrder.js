import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function DeleteOrder() {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const { id } = useParams();
 
  // const navigate = useNavigate();
  const fetchOrderById = () => {
    axios
      .get("http://localhost:8081/order/viewOrder/" + id)
      .then((resp) => setOrder(resp.data));
  };
  useEffect(fetchOrderById);
  const deleteOrder = () => {
    axios.delete("http://localhost:8081/order/delete/" + id)
    .then(function (response) {
      if (response && response.data) {
        toast.success("Order deleted successfully with id " +order.orderId, {
          position: "top-center",

          autoClose: 3000,
        });
      }

      navigate("/washerhome");
    })

    .catch(function (error) {
      console.log(error);
    });
  
};
  return (
    <div>
      <h2>Order Details</h2>
      {order !== null && (
        <div>
          <p> Order ID : {order.orderId}</p>
          <p> CARNAME : {order.carModel}</p>
          <p> USERNAME : {order.username}</p>
          <p> DATE : {order.date}</p>
          <p> CONTACT : {order.contactno}</p>
          <p> ADDRESS : {order.address}</p>
          <p> WASHPACK_ID : {order.washpackId}</p>
        </div>
      )}
      <div>
        <button onClick={deleteOrder}>Delete</button>
      </div>
    </div>
  );
}
export default DeleteOrder;
