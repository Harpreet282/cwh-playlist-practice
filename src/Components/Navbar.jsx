import React from "react";
import PropTypes from "prop-types";
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?props.mode : 'dark'} bg-${props.mode}`}>
        <NavLink className="navbar-brand" to="/">
          {props.title}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                {props.about}
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="custom-control custom-switch ml-4">
  <input type="checkbox" className="custom-control-input" id="customSwitch1" />
  <label className="custom-control-label" style={{color:props.mode==='light'? 'black' : 'white'}} htmlFor="customSwitch1" onClick={props.enableMode}>Enable {props.mode==='light'? 'Dark' : props.mode==='success'? 'Dark' : 'light'} Mode</label>
</div>

<div className="custom-control custom-switch ml-4">
  <input type="checkbox" className="custom-control-input" id="customSwitch2" />
  <label className="custom-control-label" style={{color:props.mode==='light'? 'Green' : 'white'}} htmlFor="customSwitch2" onClick={props.enableGreenMode}>Enable {props.mode==='light'? 'Green-Dark' :  props.mode==='dark'? 'Green-Dark' : 'light'} Mode</label>
</div>
        </div>
      </nav>
    </div>
  );
};
Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };

Navbar.defaultProps = { title: "My App", about: "About" };

export default Navbar;
