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
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar fixed="top" className="Navbar-font">
        <Link to="/home">
          <img src={logo} />
        </Link>
        <Nav className="me-auto header-item ">
          {props.multiNavigate?
          <>
          <Link to="/home">How it works</Link>
          <Link to="/home">Pricing</Link>
          <Link to="/home">What we do</Link>
          </>
          :
          <>
          <NavLink href="#howitworkrs">How it works</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#whatWeDo">What we do</NavLink>
          </>
          }
          
          <Link to="/AboutUs">AboutUs</Link>
          <Link to="/signin" className=" header-btn">
            Start creating
          </Link>
        </Nav>
      </Navbar>

      {/* Responsive Footer */}

      <Navbar color="light" light fixed="top" className="mobile-responsive">
        <NavbarBrand href="/home">
          <img src={logo} />
        </NavbarBrand>
        <NavLink href="#pricing" className=" header-btn">
          Try now
        </NavLink>

        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#howitworkrs">How it works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pricing">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#whatWeDo">What we do</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
