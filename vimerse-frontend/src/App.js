import { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Google from "./images/google-icon.svg";
import Apple from "./images/apple.svg";
import Simg from "./images/ImageSup.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container className="main-container">
        <Row>
          <Col md={6} xs={12} lg={6}>
            <div className="App">
              <h2>Sign up</h2>
              <Row>
                <Col md={6} xs={12} lg={6} className="text-end">
                  <Button href="#" className="badge">
                    <img src={Google} className="mx-1" /> Google
                  </Button>
                </Col>
                <Col md={6} xs={12} lg={6}>
                  <Button href="#" className="badge">
                    <img src={Apple} className="mx-1" /> Apple
                  </Button>
                </Col>
              </Row>
              <hr />
              <Form className="form">
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                  />
                  <p>
                    Please enter a valid email address <span>0 / 255</span>
                  </p>
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                  />
                </FormGroup>
                <Row>
                  <Col md={12} xs={12} lg={12} className="text-center ">
                    <Button className="btnClass btn-orange">Sign up</Button>
                  </Col>
                </Row>
              </Form>
              <Row>
                <Col md={12} xs={12} lg={12}>
                  <p className="f-content">
                    By proceeding,you agree to our <a href="#">Term of Use</a>{" "}
                    and confirm you have read our <a href="#">Privacy</a> and{" "}
                    <a href="#"> Cookie Statement</a>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6} xs={12} lg={6}>
            <img
              src={Simg}
              height="auto"
              width="100%"
              style={{ objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
