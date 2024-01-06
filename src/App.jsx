import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../src/App.css";
import All from "./components/All";
import FullStack from "./components/FullStack";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
function App() {
  return (
    <Router>
      <div className="container-fluied ">
        <div className="row ">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light  p-3">
              <div className="container px-4 px-lg-5 ">
                <span className="navbar-brand d-lg-none d-sm-block">
                  <b> Blog Category </b>
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
                      <Link className="link " to={"/blog/"}>
                        <b>All</b>
                      </Link>
                    </li>
                    <li className="nav-item  mt-2">
                      <Link
                        className="link  mt-2"
                        to={"/blog/category/full-stack-development/"}
                      >
                        <b>Full Stack Development</b>
                      </Link>
                    </li>
                    <li className="nav-item  mt-2">
                      <Link
                        className="link"
                        to={"/blog/category/data-science/"}
                      >
                        <b>Data Science</b>
                      </Link>
                    </li>
                    <li className="nav-item mt-2">
                      <Link
                        className="link"
                        to={"/blog/category/cyber-security/"}
                      >
                        <b className="">Cyber Security</b>
                      </Link>
                    </li>
                    <li className="nav-item  mt-2">
                      <Link className="link" to={"/blog/category/career/"}>
                        <b>Career</b>
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

      <Routes>
        <Route path="/blog/" element={<All />} />
        <Route
          path="/blog/category/full-stack-development/"
          element={<FullStack />}
        />
        <Route path="/blog/category/data-science/" element={<DataScience />} />
        <Route
          path="/blog/category/cyber-security/"
          element={<CyberSecurity />}
        />
        <Route path="/blog/category/career/" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;
