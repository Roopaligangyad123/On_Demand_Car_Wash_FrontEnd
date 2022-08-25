import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [washers, setWashers] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8061/admin/washpack").then((result) => {
      result.json().then((resp) => {
        setWashers(resp);
        console.log(resp);
      });
    });
  }, []);
  return (
    <div className="body">
      <div>
        <h1 className="bookAppointTitle mb-5 text-center">Wash Packs</h1>
      </div>

      {washers.map((emp, ind) => (
        <div className="bk2 ml-5"  >
          <div style={{color:"black"}}>
            <p >Id : {emp.id}</p>
            <p > Name : {emp.packname}</p>
            <p >Cost: {emp.cost}</p>
            <p >Description : {emp.description}</p>
          </div>
          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                navigate(`/updatePack/${emp.id}`);
              }}
            >
              UpdatePack
            </button>&nbsp;&nbsp;
           
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/orders");
              }}
            >
              Orderdetails
            </button>
          </div>
          <hr style={{ marginTop: "30px" }} />
        </div>
      ))}
    </div>
  );
};

export default Admin;
