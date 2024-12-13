import axios from "axios";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();

    setError(!error);

    try {
      if (email !== "" && password !== "") {
        const response = await axios.post(`http://localhost:4000/user/login`, {
          Email: email,
          Password: password,
        });
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
          toast.success(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.response.error);
    }
  };
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "730px", backgroundColor: "#00848E" }}
      >
        <div className="card border-0 " style={{ width: "350px" }}>
          <div  className="d-flex login-signin  justify-content-center position-absolute align-items-center card-header w-50  text-center" >
            SIGN IN
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
            <form onSubmit={loginUser}>
              <div className="form-group mb-4">
                <div className="input-group bg-body-secondary">
                  <span className="input-group-text bg-secondary  text-bg-secondary">
                    <FaRegUser />
                  </span>
                  <input
                    type="text"
                    className="form-control input-color  text-bg-secondary bg-secondary "
                    placeholder="Username"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
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
                <div className="input-group rounded-2">
                  <span className="input-group-text bg-secondary text-bg-secondary">
                    <MdLock />
                  </span>
                  <input
                    type="password"
                    className="form-control input-color bg-secondary  text-bg-secondary"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
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
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Login;
