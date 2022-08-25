import React, { useState, useEffect } from "react";
import "./services.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Services = () => {
  // start
  const [washers, setWashers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8061/admin/washpack").then((result) => {
      result.json().then((resp) => {
        setWashers(resp);
        console.log(resp);
      });
    });
  }, []);
  //End
  let navigate = useNavigate();
  return (
    <>
      <div className="title body" >
        <div style={{backgroundColor:"IndianRed"}}>
          <h3 className="sub">Get Ready For Your Car Wash.....!</h3>
          <div class="line-2"></div>
          {washers.map((emp, ind) => (
            <div>
              {/*
               * Plane  Fromate
               * You Can add all the planes accordingly
               */}
              <div class="flip-card">
                <div
                  className="flip-card-inner"
                  style={{ backgroundColor: "Salmon" }}
                >
                  <div class="flip-card-front">
                    <h4>{emp.id}</h4>
                    <h2> {emp.packname}</h2>
                    <h1 className="mo">Rs.{emp.cost}</h1>
                  </div>
                  <div class="flip-card-back">
                    <h3>{emp.description}</h3>
                    <button
                      className="pack"
                      onClick={() => {
                        navigate("/Login");
                      }}
                    >
                      Click Here{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Services;
