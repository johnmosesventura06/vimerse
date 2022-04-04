import { useState } from "react";
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
import { Link } from "react-router-dom";
import mail from "../../images/mail.svg";
import Rrimg from "../../images/Recoverimg.svg";
import "../../Components/CSS/SignUp.css";

const RecoverPassword = () => {
  const [inputtext, setinputtext] = useState({
    email: "",
    password: "",
  });
  return (
    <Container className="m-container">
      <Row className="m-row">
        <Col md={12} xs={12} lg={6} className="col-pd bg-white">
          <h1>
            Password <span>recovery </span>
          </h1>
          <p>
            Submit an email to which the account was registered, and we will
            send you an email with a link to recover your password
          </p>
          <Form className="form" autoComplete="off">
            <FormGroup>
              <Row className="f-row">
                <Label>Email</Label>

                <Col md={1} xs={1} lg={1} className="mp mail-lock">
                  <img src={mail} />
                </Col>
                <Col md={11} xs={11} lg={11} className="mp">
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                    //   onChange={(e)=>setinputtext({...inputtext,email:e.target.value})}
                  />
                </Col>
              </Row>
              <Row className="hl-text fm-row">
                <Col md={12} xs={12} lg={12}>
                  <span>{inputtext.email?.length} / 255</span>
                </Col>
              </Row>
            </FormGroup>
          </Form>
          <Row>
            <Col md={12} xs={12} lg={12} className="text-center mt-5">
              <Link to="/home" className=" btn-orange">Submit</Link>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12} lg={12} className="forget-p text-center mt-3">
              <Link to="/signin">SignIn</Link>
            </Col>
          </Row>
        </Col>
        <Col md={6} lg={6} className="Side-img">
          <img src={Rrimg} width="100%" style={{ objectFit: "cover" }} />
        </Col>
      </Row>
    </Container>
  );
};
export default RecoverPassword;
