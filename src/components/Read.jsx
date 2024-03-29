import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Read() {
  const [apidata, setApidatat] = useState([]);
  const navigate = useNavigate();

  const updateDatta = ({ id, firstname, lastName, email }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    navigate("/Update");
  };


  const dailetDatta = async (id) => {
    await axios.delete(
      "https://659908a6a20d3dc41cef2cb9.mockapi.io/users/" + id
    );
    cAllApi();
  };
  const cAllApi = async () => {
    const res = await axios.get(
      "https://659908a6a20d3dc41cef2cb9.mockapi.io/users"
    );

    setApidatat(res.data);
  };
  useEffect(() => {
    cAllApi();
  }, []);
  return (
    <>
      <div className="container mt-4">
        <div className="text-center">Read , Update , Delete and Operation</div>
        <div className="table-responsive">
          <table className="table table-bordered  bg-white">
            <thead>
              <tr>
                <th scope="col">Roll No</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Delete</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody>
              {apidata.map((data) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.firstname}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          dailetDatta(data.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>

                    <td>
                      <button
                        onClick={() => {
                          updateDatta(data);
                        }}
                        className="btn btn-info"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
}

export default Read