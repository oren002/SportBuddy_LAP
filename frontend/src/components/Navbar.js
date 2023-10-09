import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Navbar() {

  const navigate = useNavigate();

    function logout() {
        document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        navigate('/');
    }

    function saveUser() {
        var user = document.getElementById("nameTv").innerHTML;
        localStorage.setItem("username", user);
    }
    
  return (
    <div>
        <div className="spinner-wrapper">
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>

    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
          <a id="nameTv" className="navbar-brand logo-text page-scroll"></a>
          
          <span id="1" className="fa fa-star"></span>
          <span id="2" className="fa fa-star"></span>
          <span id="3" className="fa fa-star"></span>
          <span id="4" className="fa fa-star"></span>
          <span id="5" className="fa fa-star"></span>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-awesome fas fa-bars"></span>
              <span className="navbar-toggler-awesome fas fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                    <Link className="nav-link page-scroll mt-2" to="/home">HOME</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link page-scroll mt-2" to="/pastActivities">PAST ACTIVITIES</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link page-scroll mt-2" to="/myActivities">MY ACTIVITIES</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link page-scroll mt-2" to="/searchActivities">SERACH ACTIVITIES</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link page-scroll mt-2" to="/profile">PROFILE</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link page-scroll mt-2" to="/favorites">FAVORITES</Link>
                  </li>
                  <span className="nav-item">
                    <Link className="btn-outline-sm page-scroll" onClick={saveUser} to="/createActivity">+</Link>
                  </span>
                  <span className="nav-item">
                    <button className="btn btn-primary" onClick={logout}>LOGOUT</button>
                  </span>
              </ul>
          </div>
      </div>
    </nav>
  </div>
  );
}

export default Navbar;