import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Product from "../Video/Product-Replace.mp4";
import Twitch from "../Video/Twitch-Replace.mp4";
import "./CSS/Article.css";
const Article = () => {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 100) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "Read more >" : " show less"}
        </span>
      </p>
    );
  };
  return (
    <>
      <Header multiNavigate={true} />
      <Container>
        <Row className="pd-bottom">
          <Col md={12} lg={12} xs={12} className="text-center">
            <h1 className="article-heading">Articles</h1>
          </Col>
          <Col md={12} lg={12} xs={12}>
            <Row>
              <Col md={6} lg={6} xs={12} className="space ">
                <Card className="cardx1">
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/viewed.svg").default}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="card-box">
                      <h4>
                        This is how much YouTube paid for 1 000 000 viewed video
                      </h4>
                    </CardTitle>
                    <CardText>
                      <ReadMore>
                        Istarted making videos in 2009, back before being a
                        YouTuber was a thing. I always enjoyed editing videos
                        and photos and started posting them on YouTube when I
                        was 14.
                      </ReadMore>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6} lg={6} xs={12} className="space cardx1">
                <Card className="cardx1">
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/science.svg").default}
                    alt="Card image cap"
                  />
                  <CardBody className="card-box ">
                    <CardTitle className="card-box">
                      <h4>
                        YouTube science videos: The channels you should
                        subscri...
                      </h4>
                    </CardTitle>
                    <CardText>
                      <ReadMore>
                        Meet the science YouTubers Simon Clark, Inés Dawson,
                        Simone Giertz and more who make videos spanning rubbish
                        robots, Star Wars planets and hijacking a Bieber hit.
                        Sometimes...
                      </ReadMore>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6} lg={6} xs={12} className="space mt-3 cardx1">
                <Card className="cardx1">
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/Binge.svg").default}
                    alt="Card image cap"
                  />
                  <CardBody className="card-box ">
                    <CardTitle className="card-box">
                      <h4 className="paddingforx4">
                        Binge-watching your favourite TV show
                      </h4>
                    </CardTitle>
                    <CardText>
                      <ReadMore>
                        ONCE, we had to wait to watch television programmes when
                        they were broadcast. Now, video on demand is taking
                        over. Globally, more than 600 million people subscribe
                        to streamin...
                      </ReadMore>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6} lg={6} xs={12} className="space mt-3 cardx1">
                <Card className="cardx1">
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/youtubewatch.svg").default}
                    alt="Card image cap"
                  />
                  <CardBody className="card-box ">
                    <CardTitle className="card-box">
                      <h4 className="paddingforx4">Top 10 YouTube videos</h4>
                    </CardTitle>
                    <CardText>
                      <ReadMore>
                        Life is an open book and we’re writing in it. A team at
                        Harvard University has used the CRISPR genome-editing
                        tool. WWWWWWWWWWWWWWWWWWWWWWWW
                      </ReadMore>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6} lg={6} xs={12} className="space mt-3 cardx1">
                <Card className="cardx1">
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/Designing.svg").default}
                    alt="Card image cap"
                  />
                  <CardBody className="card-box ">
                    <CardTitle className="card-box">
                      <h4 className="paddingforx4">
                        Designing lower thirds like a pro
                      </h4>
                    </CardTitle>
                    <CardText>
                      <ReadMore>
                        For video editors who find themselves working on a
                        project that involves generating lower thirds graphics,
                        here’s an article from Shutterstock that covers the
                        basics.
                      </ReadMore>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6} lg={6} xs={12} className="space mt-3 cardx1">
                <Card className="cardx1">
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/techniques.svg").default}
                    alt="Card image cap"
                  />
                  <CardBody className="card-box ">
                    <CardTitle className="card-box">
                      <h4 className="">
                        Professional video editing tips and techniques
                      </h4>
                    </CardTitle>
                    <CardText>
                      <ReadMore>
                        Keeping an eye on the industry and staying refreshed is
                        a great way to improve your video editing game. These
                        must-read video editing articles have something helpful
                        for pros and ...
                      </ReadMore>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6} lg={6} xs={12} className="space mt-3 cardx1">
                <Card className="cardx1">
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/mistake.svg").default}
                    alt="Card image cap"
                  />
                  <CardBody className="card-box ">
                    <CardTitle className="card-box">
                      <h4 className="paddingforx4">
                        Common mistakes that amateur editors make
                      </h4>
                    </CardTitle>
                    <CardText>
                      <ReadMore>
                        Over at RocketStock, professional cinematographer,
                        director, and editor Noam Kroll offers a list of common
                        editing mistakes that rookie editors are prone to making
                        in thei...
                      </ReadMore>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6} lg={6} xs={12} className="space mt-3">
                <Card className=" cardx1">
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/trick.svg").default}
                    alt="Card image cap"
                  />
                  <CardBody className="card-box ">
                    <CardTitle className="card-box">
                      <h4 className="paddingforx4">
                        Video editing tricks to increase your editing speed
                      </h4>
                    </CardTitle>
                    <CardText>
                      <ReadMore>
                        Some of the tricks he covers: knowing how to use a J
                        cut, cleaning up dialogue, using natural segues, and
                        even adding markers. These tips aren’t mind blowing, but
                        they are essentia...
                      </ReadMore>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Article;
