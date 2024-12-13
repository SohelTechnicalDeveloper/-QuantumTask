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

  const baseUrl = process.env.REACT_APP_BASE_URL;

  // get all users data in this api

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/user/getAllUser`);
      if (response.status === 200) {
        setUsersData(response.data.data);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleDelete = ()=>{
    window.confirm('Are Sure Want To Delete This User')
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="bg-body-secondary">
      <div className="p-5 shadow-lg">
        <div className="table-responsive rounded-3  mt-2">
          <table className="table p-3" style={{ minWidth: "1500px" }}>
            <thead className=" text-center">
              <tr className="fw-bold">
                <th>#</th>
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
                    <td>{index + 1}</td>
                    <td>{item.Name}</td>
                    <td>{item.Date_birth}</td>
                    <td>Admin</td>
                    <td><TbPointFilled className="text-success"/> Active</td>
                    <td>
                      <IoMdSettings
                        style={{ color: "#3CA2F7", fontSize: "25px" }}
                      />{" "}
                      &nbsp;&nbsp;
                      <img src={imge1} height={20} alt=""  onClick={()=>handleDelete()} style={{cursor:"pointer"}}/>
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
