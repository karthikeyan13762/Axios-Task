import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../src/App.css";
import Read from "./components/Read";

import Update from "./components/Update";

import Create from "./components/Create";
function App() {
  return (
    <Router>
      <div className="container-fluied ">
        <div className="row ">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light  p-3">
              <div className="container px-4 px-lg-5 ">
                <span className="navbar-brand d-lg-none d-sm-block">
                  <b> CRUD OPeration </b>
                  
                </span>
                <button
                  className="navbar-toggler m-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="navbar-collapse collapse show"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav m-auto mt-sm-2">
                    <li className="nav-item  mt-2">
                      <Link className="link" to={"/Create/"}>
                        <b>CREATE</b>
                      </Link>
                    </li>
                    <li className="nav-item  mt-2">
                      <Link className="link " to={"/Read/Delete/Update/"}>
                        <b>READ/DELETE</b>
                      </Link>
                    </li>
                    <li className="nav-item  mt-2">
                      <Link
                        className="link"
                        to={"/Update/"}
                      >
                        <b>UPDATE</b>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <hr />
          </div>
        </div>
      </div>
      <div>
        <p className="mt-2 text-center CRUD-Operation ">CRUD Operation</p>
      </div>
      <Routes>
        <Route path="/Read/Delete/Update/" element={<Read />} />
        
        <Route path="/Update/" element={<Update />} />

        <Route path="/Create/" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
