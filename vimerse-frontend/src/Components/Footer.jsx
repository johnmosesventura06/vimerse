import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./CSS/Footer.css";
const Footer = () => {
  return (
    <>
    <Container fluid className="footer-bg-color footer-medium">
      <Row>
        <Col xs={""} md={3} lg={3}>
          <Row className="footer-li-second">
            <ul>
              <img
                className="footer-logo"
                src={require("../images/LOGO.svg").default}
              />
              <li>How it works</li>
              <li>Pricing</li>
              <li>What we do</li>
            </ul>
          </Row>
        </Col>
        <Col xs={""} md={3} lg={3}>
          <Row className="footer-li-second">
            <ul>
              <span>Helpful links</span>
              <li><Link  to="/Article">Articles</Link></li>
              <li>FAQ</li>
              <li><Link to="/TermsConditions">Terms of use</Link></li>
              <li>Privacy policy</li>
            </ul>
          </Row>
        </Col>
        <Col xs={""} md={3} lg={3}>
          <Row className="footer-li-second">
            <ul className=" footer-list">
              <span>Social network</span>
              <li>
                <img
                  className="social-footer-icon"
                  src={require("../images/youtube.svg").default}
                />
               <Link to="#" >Youtube</Link>
              </li>
              <li>
                <img
                  className="social-footer-fb-icon"
                  src={require("../images/facebook.svg").default}
                />
               <Link to="#" >Facebook</Link>
              </li>
              <li>
                <img
                  className="social-footer-icon"
                  src={require("../images/twitter.svg").default}
                />
               <Link to="#">Twitter</Link> 
              </li>
              <li>
                <img
                  className="social-footer-icon"
                  src={require("../images/insta.svg").default}
                />
               <Link to="#">Instagram</Link> 
              </li>
            </ul>
          </Row>
        </Col>
        <Col xs={""} md={3} lg={3}>
          <Row className="footer-li-second">
            <ul className=" footer-list">
              <span>Technologies</span>
              <li>
                <img
                  className="tech-footer-icon"
                  src={require("../images/Subtract.svg").default}
                />
                <img src={require("../images/storyboucks.svg").default} />
                
              </li>
              <li>
                <img
                  className="tech-footer-icon"
                  src={require("../images/framei.svg").default}
                />
                <img src={require("../images/frame.svg").default} />
              </li>
              <li>
                <img
                  className="tech-footer-icon"
                  src={require("../images/photoshop.svg").default}
                />
                <img src={require("../images/Adobe.svg").default} />
                
              </li>
            </ul>

          </Row>
        </Col>
        </Row>
        <Container fluid>
        <Row className="sub-footer">
        <hr />
        <Col md={4} lg={4}>
          <img src={require("../images/LLC.svg").default} />
        </Col>
        <Col md={4} lg={4} className="text-end">
          <p>info@Vimerse.com</p>
        </Col>
        <Col md={4} lg={4} className="text-end">
          <p>Boston,United States</p>
        </Col>
      </Row>
      </Container>
    </Container>

    {/* // Responsive footer // */}

    <Container fluid className="footer-bg-color respo-footer">
      <Row>
        <Col xs={12}>
          <Row className="footer-li-respo text-center">
              <img
                className="footer-logo"
                src={require("../images/LOGO.svg").default}
              />
          <p className="mt-3">info@Vimerse.com</p>
          <p>Boston,United States</p>
        
        <Col xs={12}>
          <Row className="footer-li-second">
            <ul className=" footer-list">
              <span>Technologies</span>
              <li>
                <img
                  className="tech-footer-icon"
                  src={require("../images/Subtract.svg").default}
                />
                <img src={require("../images/storyboucks.svg").default} />
                
              </li>
              <li>
                <img
                  className="tech-footer-icon"
                  src={require("../images/framei.svg").default}
                />
                <img src={require("../images/frame.svg").default} />
              </li>
              <li>
                <img
                  className="tech-footer-icon"
                  src={require("../images/photoshop.svg").default}
                />
                <img src={require("../images/Adobe.svg").default} />
                
              </li>
            </ul>
          </Row>
        </Col>
        <hr />
        <Col md={4} lg={4} className="text-center">

        <img src={require("../images/LLC.svg").default} />
        </Col>

        </Row>
        </Col>
      </Row>
      </Container>
</>

  );
};
export default Footer;
