import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [date_birth, setDateBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    //make a check for  user input is empty

    if (!name && !date_birth && !email && !password) {
      setError(true);
    }
    try {
      //this is register api for user
      const response = await axios.post(`http://localhost:4000/user/register`, {
        Name: name,
        Date_birth: date_birth,
        Email: email,
        Password: password,
      });
      console.log(response);

      if (response.status === 201) {
        setTimeout(() => {
          toast.success(response.data.message);
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "730px", backgroundColor: "#00848E" }}
      >
        <div
          className="card border-0 shadow"
          style={{
            backgroundColor: "#1D2C4F",
            width: "350px",
            borderRadius: "15px",
          }}
        >
          <div
            className="d-flex login-signin  justify-content-center position-absolute align-items-center card-header w-50  text-center"
            onClick={() => navigate("/login")}
          >
            Login
          </div>
          <div className="card-body ">
            <div className="text-center mb-4">
              <div
                className="rounded-circle mt-5 bg-secondary d-flex justify-content-center align-items-center"
                style={{ width: "80px", height: "80px", margin: "auto" }}
              >
                <FaRegUser style={{ fontSize: "2rem", color: "#fff" }} />
              </div>
            </div>
            <form onSubmit={registerUser}>
              <div className=" mb-4">
                <input
                  type="text"
                  className="form-control input-color  text-bg-secondary bg-secondary "
                  placeholder="Enter your Name"
                  onChange={(e) => setName(e.target.value)}
                />
                {error && !name ? (
                  <label
                    htmlFor=""
                    className="text-danger position-absolute  mx-3"
                  >
                    Field Can't Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group mb-4">
                <input
                  type="date"
                  className="form-control input-color  text-bg-secondary bg-secondary "
                  placeholder="Enter your Email"
                  onChange={(e) => setDateBirth(e.target.value)}
                />
                {error && !date_birth ? (
                  <label
                    htmlFor=""
                    className="text-danger position-absolute  mx-3"
                  >
                    Field Can't Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control input-color  text-bg-secondary bg-secondary "
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && !email ? (
                  <label
                    htmlFor=""
                    className="text-danger position-absolute  mx-3"
                  >
                    Field Can't Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control input-color bg-secondary  text-bg-secondary"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && !password ? (
                  <label
                    htmlFor=""
                    className="text-danger position-absolute  mx-3"
                  >
                    Field Can't Empty
                  </label>
                ) : (
                  ""
                )}
              </div>

              <div className="mt-5">
                <button
                  className="btn btn-primary text-black-50 fw-bolder w-100 border-0 mb-3"
                  style={{ backgroundColor: "#00F5E1" }}
                >
                  Register here
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
