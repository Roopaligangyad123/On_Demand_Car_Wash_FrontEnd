import React, { useState } from "react";
import axios from "axios";
import "./booking.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddPacks = () => {
  const navigate = useNavigate();
  const [pack, setPack] = useState({
    id: "",
    packname: "",
    description: "",
    cost: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (event) => {
    event.persist();
    setPack((pack) => ({ ...pack, [event.target.name]: event.target.value }));
  };

  const handleSubmit = () => {
    let errors = {};

    if (!pack.id) {
      errors["packIdErr"] = "pack id is Required";
    }
    if (!pack.packname) {
      errors["packNameErr"] = "PackName is Required";
    }

    if (!pack.description) {
      errors["packDescriptionErr"] = "Pack Description is Required";
    }
    if (!pack.cost) {
      errors["packCostErr"] = "Pack Cost is Required";
    } else if (pack.cost < 0) {
      errors["packCostErr"] = "Pack Cost is Required";
    }

    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const payload = {
        id: pack.id,
        packname: pack.packname,
        description: pack.description,
        cost: pack.cost,
      };
      axios.post("http://localhost:8061/admin/addwashpack", payload);
      // .then(resp => alert("WashPack saved"));
      toast.success(
        "Wash Pack with ID " + pack.id + " added Sucessfully...! ",
        {
          position: "top-center",

          autoClose: 3000,
        }
      );

      navigate("/admin_home");
    }
  };
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="container-fluid  ">
          <div className="pack card " style={{ width: "400px" }}>
            <div>
              <h3>
                <strong>Add Washpack</strong>
              </h3>
            </div>
            <div className="card-body">
              <div className="container">
                <div>
                  <label style={{ color: "black" }}>WaskPack Id:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="id"
                    name="id"
                    value={pack.id}
                    onChange={handleChange}
                    style={{ fontWeight: "700" }}
                  />
                  {formErrors.packIdErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {formErrors.packIdErr}
                    </div>
                  )}
                </div>
                <div>
                  <label style={{ color: "black" }}>PackName:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="packname"
                    value={pack.packname}
                    onChange={handleChange}
                    style={{ backgroundColor: "white", fontWeight: "700" }}
                  />
                  {formErrors.packNameErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {formErrors.packNameErr}
                    </div>
                  )}
                </div>
                <div>
                  <label style={{ color: "black" }}>Description:</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="description"
                    value={pack.description}
                    onChange={handleChange}
                    style={{ fontWeight: "700" }}
                  ></textarea>
                  {formErrors.packDescriptionErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {formErrors.packDescriptionErr}
                    </div>
                  )}
                </div>
                <div>
                  <label style={{ color: "black" }}>Cost:</label>

                  <input
                    type="number"
                    className="form-control"
                    name="cost"
                    value={pack.cost}
                    onChange={handleChange}
                    style={{ fontWeight: "700" }}
                  />

                  {formErrors.packCostErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {formErrors.packCostErr}
                    </div>
                  )}
                </div>
                <div className="col-12 d-flex justify-content-around">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-success mr-2"
                  >
                    Submit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      window.location.href = "/admin_home";
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z col-md-6">
        <h1>A Clean Car Can Boost Your Mood And Make You Feel Good</h1>
      </div>
    </div>
  );
};

export default AddPacks;
