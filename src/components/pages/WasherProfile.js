import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css";
import "../pages/style.css";
import AdminNab from "./AdminNab";
import { Row } from "react-bootstrap";

export default function WasherProfile() {
  const [washer, setWasher] = useState([]);

  const fetchAll = () => {
    axios
      .get("http://localhost:8082/washer/allwasher")
      .then((resp) => setWasher(resp.data));
  };
  useEffect(fetchAll, []);

  return (
    <div>
    <div>
    <div className="row body">
      <AdminNab />
      <div className=" wbg col-md-6">
      </div>
      <div className="col-md-6">
        <h4
          style={{
            color: "Sky Blue",
            backgroundColor: "DeepSkyBlue",
            fontSize: "30px",
          }}
          className="text-center "
        >
          WASHER LIST
        </h4>
        <Row xs={1} md={2} className="g-4 ">
          <table class="table table-bordered ">
            <thead
              class="black white-text"
              style={{ backgroundColor: "HotPink" }}
            >
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>

            <tbody>
              {washer.map((w, index) => (
                <tr key={index + 1}>
                  <td>{w.id}</td>
                  <td>{w.name}</td>
                  <td>{w.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Row>
      </div>
    </div>
    </div>
    </div>
  );
}
