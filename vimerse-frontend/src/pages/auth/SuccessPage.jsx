import { Container, Row, Col, Button } from "reactstrap";
import sImage from "../../images/Image-up.png";
const Spage = () => {
  return (
    <Container className="main-container">
      <Row className="main-container-row">
        <Col md={12} xs={12} lg={6} className="success-class">
          <img src={require("../../images/successPage.svg").default} />
          <h3>Success</h3>
          <p>
            We sent you a confirmation email. Please follow the link from the
            email to finish the registration process
          </p>
          <Button>Send email again</Button>
          <p>Resend will be available in 00:59 seconds</p>
        </Col>
        <Col md={12} xs={12} lg={6} className="Side-img">
          <img
            src={sImage}
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Spage;
