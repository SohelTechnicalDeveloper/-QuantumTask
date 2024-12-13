import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
      if (response.status === 201) {
        console.log(response.data.message);
        setTimeout(() => {
          toast.success(response.data.message);
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error.response.error);
    }
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "730px", backgroundColor: "#00848E" }}
      >
        <div className="card border-0 " style={{ width: "350px" }}>
          <div className="d-flex login-signin  justify-content-center position-absolute align-items-center card-header w-50  text-center" onClick={()=>navigate('/login')} >
            Login
          </div>
          <div className="card-body " style={{ backgroundColor: "#1D2C4F" }}>
            <div className="text-center mb-4">
              <div
                className="rounded-circle mt-5 bg-secondary d-flex justify-content-center align-items-center"
                style={{ width: "80px", height: "80px", margin: "auto" }}
              >
                <FaRegUser style={{ fontSize: "2rem", color: "#fff" }} />
              </div>
            </div>
            <form onSubmit={registerUser}>
              <div className="form-group mb-4">
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
              {/* this footer my register bar */}
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div style={{ color: "#00F5E1" }}>
                  <input
                    type="checkbox"
                    id="remember"
                    style={{ backgroundColor: "#00F5E1" }}
                  />
                  <label htmlFor="remember" className=" ms-2">
                    Remember me
                  </label>
                </div>
                <Link
                  href="#"
                  style={{ color: "#00F5E1", textDecoration: "none" }}
                >
                  Forgot your password?
                </Link>
              </div>
              <ToastContainer />
              <button
                className="btn btn-primary text-black-50 fw-bolder w-100 border-0 mb-3"
                style={{ backgroundColor: "#00F5E1" }}
              >
                Register here
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
