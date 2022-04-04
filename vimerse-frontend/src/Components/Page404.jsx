import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import "./CSS/Home.css";
const PageFor = () => {
  return (
    <Container>
      <Row className="page-error text-center">
        <Col xs={12} md={12} lg={12}>
          <img src={require("../images/pagerror.svg").default} />
          <h3>Looks like you’re lost</h3>
          <p>The page you are looking for is not available</p>
          <Button className="btn-page">Go to homepage</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default PageFor;
