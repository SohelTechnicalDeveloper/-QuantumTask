import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const data = localStorage.getItem("user");


  return (
    <div>
      <div className="d-flex mx-5  ">
        <ul className=" d-flex justify-content-around  fs-4 mt-4    ">
          {count === 0 ? (
            <>
              <li className="list-unstyled  mx-3">
                <Link className="text-decoration-none" to="/">
                  Signup
                </Link>
              </li>
              <li className="list-unstyled ">
                <Link className="text-decoration-none" to="/login">
                  Login
                </Link>
              </li>{" "}
            </>
          ) : (
            <li className="list-unstyled ">
              <Link
                className="text-decoration-none"
                to="/"
                onClick={() => navigate("/", setCount(count + 1))}
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
