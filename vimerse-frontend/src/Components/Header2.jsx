import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavLink,
  Collapse,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../images/LOGO.svg";
import "./CSS/Header.css";
const Header2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);


  const userFirstname = localStorage.getItem('firstname');
  const userLastname = localStorage.getItem('lastname');
  return (
    <>
      <Navbar fixed="top" className="Navbar-font header2">
        <div className="header-logo-center">
          <Link to="/home">
            <img src={logo} />
          </Link>
        </div>
        <Nav className="me-auto header-item ">
          <ul>
            <li>
              <span>
                <p>{userFirstname + " " + userLastname}</p> 
                <a href="#">Edit Profile</a>
              </span>
              <span className="profile-img">
                <p className="icon"></p>
              </span>
            </li>
          </ul>
        </Nav>
      </Navbar>

      {/* Responsive Footer */}

    </>
  );
};

export default Header2;
