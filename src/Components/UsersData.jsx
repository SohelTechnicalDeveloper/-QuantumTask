import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoMdSettings } from "react-icons/io";
import imge1 from "../Image/download.png";
import { Link } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";

const UsersData = () => {
  const [usersData, setUsersData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(5);

  const baseUrl = process.env.REACT_APP_BASE_URL; // env file  react base url for this security purpose
  console.log("Base URL:", process.env.REACT_APP_BASE_URL);
  console.log(baseUrl);

  const token = JSON.parse(localStorage.getItem("user")); //get token after user is see all users Data

  // get all users data in this api

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/user/getAllUser`,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      if (response.status === 200) {
        setUsersData(response.data.data);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleDelete = () => {
    window.confirm("Are Sure Want To Delete This User");
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div style={{ backgroundColor: "#00848E" }}>
      <div className="p-5 shadow-lg">

      <div className="text-center fs-3  text-white fw-bold">
        <p>Users Table </p>
      </div>
        <div className="table-responsive  mt-2 p-3">
          <table className="table  rounded-4" style={{ minWidth: "1500px" }}>
            <thead className=" text-center " >
              <tr className="fw-bold table-primary" >
                <th >#</th>
                <th>Name</th>
                <th>Date Created</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {usersData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td style={{color:"#6E7D99"}}>{index + 1}</td>
                    <td style={{color:"#6E7D99"}}>{item.Name.charAt(0).toUpperCase() +
                        item.Name.slice(1)}</td>
                    <td style={{color:"#6E7D99"}}>{item.Date_birth}</td>
                    <td style={{color:"#6E7D99"}}>Admin</td>
                    <td style={{color:"#6E7D99"}}>
                      <TbPointFilled className="text-success" /> Active
                    </td>
                    <td style={{color:"#6E7D99"}}>
                      <IoMdSettings
                        style={{ color: "#3CA2F7", fontSize: "25px" }}
                      />{" "}
                      &nbsp;&nbsp;
                      <img
                        src={imge1}
                        height={20}
                        alt=""
                        onClick={() => handleDelete()}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <nav aria-label="Page navigation example ">
            <ul className="pagination gap-2   list-unstyled">
              <li className={`page-item  ${page === 0 ? "disabled" : ""}`}>
                <Link className="page-link  " aria-label="Previous">
                  <span aria-hidden="true" onClick={() => setPage(page - 1)}>
                    &laquo; Previous
                  </span>
                </Link>
              </li>

              {[...Array(totalPages)].map((num, index) => {
                const currentIndex = index + 1;
                return (
                  <li
                    key={currentIndex}
                    className={`page-item sub-list ${
                      page === currentIndex - 1 ? " active" : ""
                    }`}
                  >
                    <Link
                      className="page-link "
                      onClick={() => {
                        setPage(currentIndex - 1);
                      }}
                    >
                      {currentIndex}
                    </Link>
                  </li>
                );
              })}

              <li className="page-item">
                <Link className="page-link" aria-label="Next">
                  <span aria-hidden="true" onClick={() => setPage(page + 1)}>
                    Next &raquo;
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default UsersData;
