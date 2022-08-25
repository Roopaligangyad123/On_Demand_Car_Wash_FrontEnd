import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function UpdatePack() {
  const [pack, setPack] = useState({
    cost: "",
    packname: "",
    description: "",
  });
  const { id } = useParams();

  const navigate = useNavigate();
  const fetchPackById = () => {
    axios
      .get("http://localhost:8061/admin/viewPack/" + id)
      .then((resp) => setPack(resp.data));
  };
  useEffect(fetchPackById, []);
  const handleChange = (event) => {
    event.persist();
    setPack((pack) => ({ ...pack, [event.target.name]: event.target.value }));
  };
  const handleSubmit = () => {
    const palyload = {
      id: pack.id,
      packname: pack.packname,
      description: pack.description,
      cost: pack.cost,
    };
    axios
      .put("http://localhost:8061/admin/washpack/update", palyload)
      .then(function (response) {
        if (response && response.data) {
          toast.success(
            "Updated Washpack with Id "+pack.id,
            {
              position: "top-center",

              autoClose: 3000,
            }
          );
        }
        navigate("/admin_home");
      })
      .catch(function (error) {
        console.log(error);
      });
};
  return (
    <div className=" R container-fluid  ">
      <div className="container-fluid " style={{ width: "400px" }}></div>
      <div className="card " style={{  backgroundColor:"rgba(72, 209, 204,0.3)",width: "400px" }}>
      <div >
        <h3>
          <strong>Update Washpack</strong>
        </h3>
      </div>

      <h2 style={{ color: "green" }}>
        <u>Details</u>
      </h2>
      <div>
        <label style={{ color: "black" }}> ID:</label>
        <input
          type="text"
          className="form-control"
          name="id"
          value={pack.id}
          onChange={handleChange}
          style={{ backgroundColor: "white",fontWeight: "700" }}
          disabled
        />
      </div>
      <div>
        <label>PackName:</label>
        <input
          type="text"
          className="form-control"
          name="packname"
          value={pack.packname}
          onChange={handleChange}
          style={{ backgroundColor: "white",fontWeight: "700" }}
        />
      </div>

      <div>
        <label>Description:</label>
        <input
          type="text"
          className="form-control"
          name="cdescription"
          value={pack.description}
          onChange={handleChange}
          style={{ backgroundColor: "white",fontWeight: "700" }}
        />
      </div>
      <div>
        <label>Cost:</label>
        <input
        // style={{ backgroundColor: "white" }}
          type="text"
          className="form-control"
          name="cost"
          value={pack.cost}
          onChange={handleChange}
          style={{ backgroundColor: "white", fontWeight: "700" }}
        />
      </div>

      <div>
        <button className="btn btn-primary mb-2" onClick={handleSubmit}>
          Update
        </button>
      </div>
      </div>
    </div>
  );
}
export default UpdatePack;
