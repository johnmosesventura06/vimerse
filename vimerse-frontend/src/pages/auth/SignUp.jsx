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
import Google from "../../images/google-icon.svg";
import Simg from "../../images/Image-up.png";
import lock from "../../images/lock.svg";
import mail from "../../images/mail.svg";
import Eye from "../../images/eye.svg";
import Eye2 from "../../images/eye2.svg";
import People from "../../images/people.svg";
import "../../Components/CSS/SignUp.css";
import axios from "axios";
const SignUp = () => {
  const [inputtext, setinputtext] = useState({
    email: "",
    password: "",
    lastname: "",
    firstname: ""
  });

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setlastName] = useState("");

  console.log(inputtext);
  const [eye, seteye] = useState(true);
  
  const submitForm = async ()  => {
    console.log('test');
    
    const data = await axios.post(`http://localhost:3002/users`,
              {
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
                usertype: 'client'
              }
              // {
              //   headers: {
              //     // this header is required,
              //     // this is the only security the
              //     // endpoint has
              //     // POST /auth/token MUST NOT be called
              //     // in a client app
              //     'x-api-key': process.env.API_KEY
              //   },
              // }
            ).catch(function (error) {
              if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              };
           
            });

         console.log(data)
    
  }
  const setType = () => {
    if (eye) {
      seteye(false);
      //setpassword("text");
    } else {
      seteye(true);
      //setpassword("password");
    }
  };
  return (
    <Container className="main-container">
      <Row className="main-container-row">
        <Col md={12} xs={12} lg={6} className="bg-color-Signin">
          <div className="App">
            <h2>Sign up</h2>
            <Row>
              <Col md={12} xs={12} lg={12} className="text-center">
                <Button href="#" className="badge">
                  <img src={Google} className="mx-1" />
                  Continue with Google
                </Button>
              </Col>
            </Row>
            <hr />
            <Form className="form" autoComplete="off">
            <FormGroup>
                <Row>
                  <Label>Last Name</Label>
                  <Col md={1} xs={1} className="mp mail-lock">
                    <img src={People} />
                  </Col>
                  <Col md={11} xs={11} className="mp">
                    <Input
                      type="text"
                      name="lastname"
                      id="lastName"
                      placeholder="Last Name"
                      onChange={(e) => setlastName(e.target.value)}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Label>First Name</Label>
                  <Col md={1} xs={1} className="mp mail-lock">
                    <img src={People} />
                  </Col>
                  <Col md={11} xs={11} className="mp">
                    <Input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="First Name"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Label>Email</Label>
                  <Col md={1} xs={1} className="mp mail-lock">
                    <img src={mail} />
                  </Col>
                  <Col md={11} xs={11} className="mp">
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="hl-text pd-0">
                  <Col md={9} xs={9} lg={9} className="mp">
                    <p className="mb-0">Please enter a valid email address</p>
                  </Col>
                  <Col md={3} xs={3} lg={3}>
                    <span className="mb-0">{inputtext.email?.length || 0} / 255</span>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Label>Password</Label>
                  <Col md={1} xs={1} className="mp mail-lock">
                    <img src={lock} />
                  </Col>
                  <Col md={10} xs={10} className="mp">
                    <Input
                      type={password}
                      name="password"
                      id="examplePassword"
                      placeholder="Password"
                      className="b-right"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                  <Col md={1} xs={1} className="mp eye">
                    {eye ? (
                      <img src={Eye} onClick={() => setType()} />
                    ) : (
                      <img
                        src={Eye2}
                        className="eye2"
                        onClick={() => setType()}
                      />
                    )}
                  </Col>
                </Row>
                <Row className="hl-text pd-0">
                  <Col md={9} xs={9} lg={9} className="mp">
                    <p className="mb-0">
                      Must include 1 uppercase, 1 lowercase and 1 number,
                      minimum 8 characters
                    </p>
                  </Col>
                  <Col md={3} xs={3} lg={3}>
                    <span className="mb-0">{inputtext.password?.length || 0}/ 128</span>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Label>Confirm Password</Label>
                  <Col md={1} xs={1} className="mp mail-lock">
                    <img src={lock} />
                  </Col>
                  <Col md={10} xs={10} className="mp">
                    <Input
                      type={password}
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="Confirm Password"
                      className="b-right"
                      onChange={(e) =>
                        setinputtext({ inputtext, confirmpassword: e.target.value })
                      }
                    />
                  </Col>
                  <Col md={1} xs={1} className="mp eye">
                    {eye ? (
                      <img src={Eye} onClick={() => setType()} />
                    ) : (
                      <img
                        src={Eye2}
                        className="eye2"
                        onClick={() => setType()}
                      />
                    )}
                  </Col>
                </Row>
              </FormGroup>
              <Row>
                <Col md={12} xs={12} lg={12} className="text-center ">
                  <Button className="btnClass btn-orange" onClick={() => submitForm()}>Sign up</Button>
                </Col>
              </Row>
            </Form>
            <Row>
              <Col md={12} xs={12} lg={12}>
                <p className="ft-content">
                  By proceeding,you agree to our <a href="#">Term of Use</a> and
                  confirm you have read our <a href="#">Privacy</a> and{" "}
                  <a href="#"> Cookie Statement</a>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={12} xs={12} lg={6} className="Side-img">
          <img
            src={Simg}
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
