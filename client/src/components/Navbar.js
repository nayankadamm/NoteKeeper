import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
localStorage.getItem('token')
let navigate = useNavigate()
const handleclick =()=>{
  localStorage.removeItem('token')
  navigate("/login")
  
}

  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NoteKeeper
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                $
                {...(location.pathname === "/about" ? "active" : null)}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                $
                {...(location.pathname === "/about" ? "active" : null)}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
      { localStorage.getItem('token')? <button className="btn btn-secondary mx-2" onClick={handleclick}>logout</button>:<form className="d-flex" role="search">

    <Link className="btn btn-secondary mx-2" to="/login"   role="button">Login</Link>
    <Link className="btn btn-secondary mx-2" to="/signup"  role="button">Sign Up</Link>
      </form>}
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
///naya n nal ada;