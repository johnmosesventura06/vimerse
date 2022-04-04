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
import Google from "../../images/google-icon.svg";
import Simg from "../../images/Image-up.png";
import lock from "../../images/lock.svg";
import mail from "../../images/mail.svg";
import Eye from "../../images/eye.svg";
import Eye2 from "../../images/eye2.svg";
import {login} from "../../redux/action"
// import {useSelector,useDispatch} from "react-redux";
import "../../Components/CSS/SignUp.css";
import axios from "axios";

const SignIn = () => {
  const [inputtext, setinputtext] = useState({
    email: "",
    password: "",
  });

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setlastName] = useState("");

  console.log(inputtext);
  const [eye, seteye] = useState(true);
  

  const setType = () => {
    if (eye) {
      seteye(false);
     // setpassword("text");
    } else {
      seteye(true);
    // setpassword("password");
    }
  };
  const submitForm = async () =>{
   
      const data = await axios.post(`http://localhost:3002/login`,
                {
                  email: email,
                  password: password,
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
  // const dispatch= useDispatch()
  
  return (
    <Container className="main-container">
      <Row className="main-container-row">
        <Col md={12} xs={12} lg={6} className="bg-color-Signin">
          <div className="App">
            <h2>Sign In</h2>
            <Row>
              <Col md={12} xs={12} lg={12} className="text-center">
                <Button href="#" className="badge">
                  <img src={Google} className="mx-1" />
                  Continue with Google
                </Button>
              </Col>
              {/* <Col md={6} xs={12} lg={6}>
                  <Button href="#" className="badge">
                  </Button>
                </Col>  */}
            </Row>
            <hr className="hr-line" />
            <Form className="form" autoComplete="off">
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
                <Row className="hl-text">
                  <Col md={12} xs={12} lg={12}>
                    <span>{inputtext.email?.length} / 255</span>
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
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="b-right"
                    />
                  </Col>
                  <Col md={1} xs={1} className="mp eye">
                    {eye ? (
                      <img src={Eye} onClick={() => setType()} />
                    ) : (
                      <img
                        src={Eye2}
                        className="eye2 "
                        onClick={() => setType()}
                      />
                    )}
                  </Col>
                </Row>
                <Row className="hl-text">
                  <Col md={12} xs={12} lg={12}>
                    <span>{inputtext.password?.length} / 128</span>
                  </Col>
                </Row>
              </FormGroup>
              <Row>
              <Col
                md={12}
                xs={12}
                lg={12}
                className="forget-p text-center mt-2"
              >
                <Link to="/recover-password">Forget password?</Link>
              </Col>
              
             <Col md={12} xs={12} lg={12} className="text-center ">
                  <Button className="btnClass btn-orange" onClick={() => submitForm()}>Sign In</Button>
                </Col>
            </Row>

            </Form>
           
          </div>
        </Col>
        
                <Col md={12} xs={12} lg={6} className="Side-img">
          <img
            src={Simg}
            height="560px"
            width="100%"
            style={{ objectFit: "revert" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default SignIn;
