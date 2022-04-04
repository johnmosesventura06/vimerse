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
import logo from "../../images/LOGO.svg";
import "./CSS/Devheader.css";
const Devheader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar fixed="top" className="Navbar-font">
        <Link to="/">
          <img src={logo} />
        </Link>
        <Nav className="me-auto header-item ">
          {props.multiNavigate?
          <>
          <Link to="/">How it works</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">What we do</Link>
          </>
          :
          <>
          <NavLink href="#howitworkrs">How it works</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>

          </>
          }
          
          <Link to="/AboutUs">AboutUs</Link>
          <Link to="/Callbook">Book a Call</Link>
          <NavLink href="#pricing" className=" header-btnx1">
            Sign in
          </NavLink>
          <NavLink href="#pricing" className=" header-btn">
            Sign up
          </NavLink>
        </Nav>
      </Navbar>

      {/* Responsive Footer */}

      <Navbar color="light" light fixed="top" className="mobile-responsive">
        <NavbarBrand href="/">
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

export default Devheader;
