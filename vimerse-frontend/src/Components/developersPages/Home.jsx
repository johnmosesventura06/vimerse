import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  CardTitle,
  CardImg,
} from "reactstrap";
import Hassle from "../../images/Hassle.svg";
import Captivating from "../../images/Captivating.svg";
import Free from "../../images/Free.svg";
import Fast from "../../images/Fast.svg";
import Gift from "../../images/gift.svg";
import badge from "../../images/badge.svg";
import Triangle from "../../images/tri-1.svg";
import Triangle2 from "../../images/tri-2.svg";
import Triangle3 from "../../images/tri-3.svg";
import bgVideo from "../../images/bg-banner.mp4";
import info from "../../images/info.svg";
import info2 from "../../images/LOGO1.svg";
import phoneIcon from "../../images/phone-ringing.svg";
import Beauty from "../../Video/Beauty-Replace.mp4";
import Cooking from "../../Video/Cooking-Replace.mp4";
import Fitness from "../../Video/Fitness-Replace.mp4";
import Product from "../../Video/Product-Replace.mp4";
import Twitch from "../../Video/Twitch-Replace.mp4";
import Vlog from "../../Video/Vlog-Replace.mp4";
import "../developersPages/CSS/DevHome.css";
import Devheader from "./Devheader"

const DevHome = () => {
  const [inputtext, setinputtext] = useState({
    firstName: "",
    lastName:"",
    Email: "",
  });
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
  return (
    <>
      {/* section 1 */}
      <Devheader multiNavigate={false} />
      <section>
        <video
          className="hero-img"
          id="myVideo"
          muted
          autoPlay={"autoplay"}
          loop
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="content">
          <Row className="home-row">
            <Col xs={12} md={12} lg={12} className="text-center">
              <h1>Hate video editing?</h1>
              <p>
                Our team of professional video editors will take care of it -
                storyline, music and effects. So you have more time to immerse
                yourself in creativity
              </p>
              <Button className="btn-home">Start creating</Button>
            </Col>
          </Row>
        </div>
        <Container fluid className="responsive-bg none-display">
          <Row
            className="justify-content-center align-items-center "
            style={{ height: "100vh" }}
          >
            <Col xs={12} md={12} lg={12} className="mainDiv-class text-center">
              <h1>Hate video editing?</h1>
              <p>
                Our team of professional video editors will take care of it -
                storyline, music and effects. So you have more time to immerse
                yourself in creativity
              </p>
              <Button className="btn-home">Start creating</Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section 1 end */}
      {/* section 2 start */}
      <section className="section-2">
        <Container className="">
          <Row>
            <Col xs={12} md={12} lg={12} className="text-center">
              <h2 className="top-text">Why Vimerse?</h2>
            </Col>
            <Col xs={12} md={4} lg={4} className="hassle text-center pd-left">
              <img src={Hassle} />
              <h5 className="title text-start">Hassle-free</h5>
              <p className="text-start">
                Creating content is already cumbersome. So, we do not want to
                pressure you with a monthly subscription. We charge per video.
                Spend 5 minutes filling out the form in order to have
                premium-quality video content created for you in two calendar
                days.
              </p>
            </Col>
            <Col
              xs={12}
              md={4}
              lg={4}
              className="Captivating text-center pd-left"
            >
              <img src={Captivating} />
              <h5 className="title text-start">Captivating</h5>
              <p className="pg-content text-start">
                Our editing takes your videos to the next level. In addition to
                years of experience, we have researched editing techniques that
                help extend the viewer's watch time. This means greater
                engagement and more monetization opportunities for creators.
              </p>
            </Col>
            <Col xs={12} md={4} lg={4} className="free text-center">
              <img src={Free} />
              <h5 className="title text-start">Free trial</h5>
              <p className="pg-content text-start">
                We understand that these promises might sound too good to be
                true. So, we offer the first video editing service for free. As
                long as your raw footage is less than 45 minutes, it is free! No
                watermarks. No restriction on sharing the content.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section 2 end */}
      {/* section 3 start */}
      <section className="section-3">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12} className="text-center">
              <h2 className="top-text">Exclusive benefits</h2>
            </Col>
            <Col xs={12} md={12} lg={12}>
              <Row className="row-color">
                <Col xs={12} md={4} lg={4}>
                  <img src={Fast} />
                  <h5 className="fast">Fast</h5>
                  <p className="S3-content">
                    Two-day
                    <br /> turnaround
                  </p>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <img src={badge} />
                  <h5 className="fast">First-class</h5>
                  <p className="S3-content">
                    100% money-back
                    <br /> guarantee in 14 days
                  </p>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <img src={Gift} />
                  <h5 className="fast">Free trial</h5>
                  <p className="S3-content">
                    First full
                    <br /> video editing
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section 3 end */}
      {/* section 4 start */}
      <section className="section-4">
        <a name="howitworkrs">
          <Container>
            <Row>
              <Col xs={12} md={12} lg={12} className="text-center">
                <h2 className="top-text">How it works</h2>
              </Col>
              <Row className="space">
                <Col xs={12} md={4} lg={4} className="S4-cards">
                  <img src={Triangle} className="m-top" />
                  <h5 className="">Prepare raw footage</h5>
                  <p className="T-content">
                    Once your raw footage is ready, please submit your contact.
                    Next, you will be redirected to an ordering form. One free
                    trial for new users.
                  </p>
                </Col>
                <Col xs={12} md={4} lg={4} className="S4-cards">
                  <img src={Triangle2} className="m-top" />
                  <h5 className="">Revisions</h5>
                  <p className="T-content">
                    Our video editors will complete the first draft in two
                    calendar days. Through our video collaboration tool, you can
                    make revision requests.
                  </p>
                </Col>
                <Col xs={12} md={4} lg={4} className="S4-cards">
                  <img src={Triangle3} className="m-top" />
                  <h5 className="">Complete</h5>
                  <p className="T-content">
                    You will receive final videos in two calendar days following
                    your submission of revision requests. Then, you can start
                    sharing!
                  </p>
                </Col>
              </Row>
            </Row>
          </Container>
        </a>
      </section>
      {/* section  4 end  */}
      {/* section 5 start */}
      <section className="section-5">
        <a name="pricing">
          <Container>
            <Row>
              <Col xs={12} md={12} lg={12} className="text-center">
                <h2 className="top-text">Pricing</h2>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <Row className="space">
                  <Col xs={12} md={4} lg={4} className="videoCardx1">
                    <Row>
                      <Col xs={12} md={12} lg={12}>
                        <h5 className="section-5-title">VIDEO CALL</h5>
                      </Col>
                      <Col xs={12} md={12} lg={12} className="section-border">
                        <h4 className="Video-cardx1">
                        FREE
                        </h4>
                      </Col>
                      <Col xs={12} md={12} lg={12}>
                        <ul>
                          <li>
                          15-min video call to understand your process of content creation
                          </li>
                          <li>Get professional tips on your existing videos</li>
                          <li>Experience an immediate boost to your viewership</li>
                        </ul>
                      </Col>
                      <Col xs={12} md={12} lg={12}>
                        <Button className="btn-round mt-105">
                        Request Now
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={4} lg={4} className="gold-card">
                    <Row>
                      <Col xs={12} md={12} lg={12}>
                        <h5 className="section-5-title2">ONE TRIAL</h5>
                      </Col>
                      <Col xs={12} md={12} lg={12} className="dev-section-card-border">
                        <h4 className="Video-cardx12">
                        FREE
                        </h4>
                      </Col>
                      <Col xs={12} md={12} lg={12}>
                        <ul>
                          <li>
                          Max 15-min running time  <img src={info} />
                          </li>
                          <li> One free thumbnail</li>
                          <li>
                            One round of revisions <img src={info} />
                          </li>
                          <li> High-quality royalty-free music</li>
                          <li> Pro cuts & transitions</li>
                          <li> Color correction & light correction</li>
                          <li> Text and lower thirds</li>
                          <li>
                            Standard features <img src={info} />
                          </li>
                        </ul>
                      </Col>
                      <Col xs={12} md={12} lg={12}>
                        <Button className="btn-round  mt-16">Sign up</Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={4} lg={4} className="Arialx1">
                    <Row>
                      <Col xs={12} md={12} lg={12}>
                        <h5 className="section-5-title">AFTER TRIAL</h5>
                      </Col>
                      <Col xs={12} md={12} lg={12} className="Arialx1-border">
                        <h4 className="">
                        $13.00 /hr
                        </h4>
                      </Col>
                      <Col xs={12} md={12} lg={12}>
                        <ul>
                          <li>Tailored to your specific requirements</li>
                          <li>
                          Unlimited running time
                          </li>
                          <li>Unlimited b-rolls</li>
                          <li>
                          Unlimited visual & sound effects 
                          </li>
                          <li>
                          Unlimited subtitles
                           
                          </li>
                          <li>
                            Unlimited revisions
                          </li>
                          <li>Standard features <img src={info2} /></li>
                        </ul>
                      </Col>
                      <Col xs={12} md={12} lg={12}>
                        <Button className="btn-round areamt-1">Sign up</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </a>
      </section>
      {/* section 5 end */}
      {/* section 6 start */}
      <section className="section-6">
        <a name="portfolio">
          <Container>
            <Row>
              <Col md={12} lg={12} xs={12} className="text-center">
                <h2 className="top-text-section">Portfolio</h2>
                <p className="top-sectionContent">
                We help content creators make more and better video content. Here are the major video categories we cover
                </p>
              </Col>
              <Col md={12} lg={12} xs={12}>
                <Row>
                  <Col md={4} lg={4} xs={12} className="pd-tblr">
                  <Card className="card-radius">
            <img src={require("../../images/portfolio1.svg").default} />
            <CardTitle className="card-title-top">Twitch stream highlights</CardTitle>
      </Card>
                  </Col>
                  <Col md={4} lg={4} xs={12} className="pd-tblr">
                  <Card className="card-radius">
            <img src={require("../../images/portfolio2.svg").default} />
            <CardTitle className="card-title-top">Fashion and beauty</CardTitle>
      </Card>
      </Col>
                  <Col md={4} lg={4} xs={12} className="pd-tblr">
                  <Card className="card-radius">
            <img src={require("../../images/portfolio3.svg").default} />
            <CardTitle className="card-title-top">Cooking</CardTitle>
      </Card>
                  </Col>
                  <Col md={4} lg={4} xs={12} className="pd-tblr">
                  <Card className="card-radius">
            <img src={require("../../images/portfolio4.svg").default} />
            <CardTitle className="card-title-top">Vlog</CardTitle>
      </Card>
                  </Col>
                  <Col md={4} lg={4} xs={12} className="pd-tblr">
                  <Card className="card-radius">
            <img src={require("../../images/portfolio5.svg").default} />
            <CardTitle className="card-title-top">Product review</CardTitle>
      </Card>
                  </Col>
                  <Col md={4} lg={4} xs={12} className="pd-tblr">
                  <Card  className="card-radius">
            <img src={require("../../images/portfolio6.svg").default} />
            <CardTitle className="card-title-top">Fitness</CardTitle>
      </Card>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={12} lg={12} className="text-center mt-5">
                <Button className="portfolio-btn">View Portfolio</Button>
              </Col>
            </Row>
          </Container>
        </a>
      </section>
      {/* section 6 end */}
      {/* section 7  start*/}
      <section className="section-7">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12} className="text-center">
              <h2 className="top-text">
                First-class video
                <br />
                editing service
              </h2>
            </Col>
          </Row>
          <Row className="align-items-center pt-5">
            <Col xs={12} md={6} lg={6} className="text-center img-hidden2">
              <img src={require("../../images/reel.svg").default} height="230px" />
            </Col>
            <Col xs={12} md={6} lg={6} className="editing-service">
              <h5 className="pb-2">
                Let that content and character stand out!
              </h5>
              <p>
                Your content is one of a kind. Your content will have an impact
                on many others and possibly become an important part of cultural
                trends. We have worked on thousands of projects and can confirm
                that what people are creating is absolutely amazing. Your
                personality may not appeal to everyone, right? But, you deserve
                a group of fans that will appreciate your uniqueness and its
                appeal. You are charming because you are honest about yourself
                and are willing to express yourself creatively. You are
                courageous to do so, and that courage is what makes you
                charming. We all admire you.
              </p>
            </Col>
            <Col xs={12} md={6} lg={6} className="text-center img-hidden">
              <img src={require("../../images/reel.svg").default} height="230px" />
            </Col>
          </Row>
          <Row className="align-items-center pt-5">
            <Col xs={12} md={6} lg={6} className="text-center">
              <img src={require("../../images/pr.svg").default} height="230px" />
            </Col>
            <Col xs={12} md={6} lg={6} className="editing-service">
              <h5 className="pb-2">
                You deserve an audience, and your
                <br /> audience deserves the best in you
              </h5>
              <p>
                Think of your content and character as cooking ingredients. It
                is not always you that could make the best dish out of these
                cooking ingredients. A professional chef, who knows good
                recipes, has years of experience and has the best equipment,
                might be the one to create a perfect course meal with the given
                ingredients. Your content and character deserve the best chef,
                in this case, the best video editors. Vimerse, a team of the
                best video editors, is here to help bring out the best in you,
                your brand, and your content.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center pt-5">
            <Col xs={12} md={6} lg={6} className="text-center img-hidden2">
              <img src={require("../../images/news.svg").default} height="230px" />
            </Col>
            <Col xs={12} md={6} lg={6} className="editing-service">
              <h5 className="pb-2">There are no shortcuts</h5>
              <p>
                Video editing is both technical process and art. Otherwise, why
                would there be an Academy Award for Best Film Editing? Tried
                different video editing software but cannot remove the
                watermarks? Tried templates but got loads of limitations?
                Wondering why your video does not have good music or sound
                effects? Find video editing mundane and time-consuming? We can
                help you. We love video editing, and we have all the answers you
                are looking for thanks to years of experience. There might be no
                shortcuts to the perfect video editing. Vimerse, a team of the
                video editors, can be the shortcut for you in your content
                creation journey.
              </p>
            </Col>
            <Col xs={12} md={6} lg={6} className="text-center img-hidden">
              <img src={require("../../images/news.svg").default} height="230px" />
            </Col>
          </Row>
          <Row className="align-items-center pt-5">
            <Col xs={12} md={6} lg={6} className="text-center">
              <img
                src={require("../../images/light.svg").default}
                height="230px"
              />
            </Col>
            <Col xs={12} md={6} lg={6} className="editing-service">
              <h5 className="pb-2">Make more time for your creativity</h5>
              <p>
                Video editing takes time, and we want to take that baggage off
                of you. If you are recording and editing videos all the time,
                when do you have time to get inspired? Even if some good ideas
                seem to hatch when you are under pressure, the groundwork for
                those ideas should have started a long time ago. And if you
                continue to try to make content under time pressure, you can
                easily burn out. What is the source of your creativity? It might
                be your experience, your friends, or your family members. Your
                ideas might be inspired by a new book, a trip, or Youtube
                videos. Give yourself more room for creativity.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center pt-5">
            <Col xs={12} md={6} lg={6} className="text-center img-hidden2">
              <img
                src={require("../../images/social-media.svg").default}
                height="230px"
              />
            </Col>
            <Col xs={12} md={6} lg={6} className="editing-service">
              <h5 className="pb-2">Invest in yourself and your brand</h5>
              <p>
                Through your creativity and video content, you gain influence.
                In essence, you are building your brand. Big companies are where
                they are right now because they invest in their brands for
                multiple years, if not decades. The same should be true for your
                personal branding. It needs proper and consistent investment.
                The core of your branding is video editing. Excellent and
                efficient video editing will help you build and nurture it.
                Repurposed videos for Facebook, Instagram, and TikTok can reach
                more people in your audience categories. Without ample
                investment, brands do not survive. We, at Vimerse, just do not
                want your brand to survive, we want it to thrive and be known.
              </p>
            </Col>
            <Col xs={12} md={6} lg={6} className="text-center img-hidden">
              <img
                src={require("../../images/social-media.svg").default}
                height="230px"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* section 7 end  */}
      {/* section 8 start */}
      <section className="section-8">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12} className="text-center">
              <h2 className="top-text">Customer reviews</h2>
            </Col>
            <Row>
              <Col xs={12} md={6} lg={6} className="pd-right">
                <Card className="main-card">
                  <CardBody>
                    <div className="parent-card d-flex">
                      <CardImg
                        variant="top"
                        height="55px"
                        width="55px"
                        src={require("../../images/Photo.svg").default}
                      />
                      <div className="child-card">
                        <CardTitle> Jennifer Wakumelo</CardTitle>
                        <CardSubtitle className=" text-muted">
                        Instagram Influencer
                        </CardSubtitle>
                      </div>
                    </div>

                    <CardText>
                      <hr />
                      Working with Vimerse is an amazing experience! It is crazy how I can just shoot raw content and provide a little background, and they magically turn it into an engaging and mesmerizing high-quality video! Before, I would shoot a ton of content but realistically be unable to take time to make the necessary edits and be happy with them to post. Having hou...
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={6} className="pd-right">
                <Card className="main-card">
                  <CardBody>
                    <div className="parent-card d-flex">
                      <CardImg
                        variant="top"
                        height="55px"
                        width="55px"
                        src={require("../../images/Photo2.svg").default}
                      />
                      <div className="child-card">
                        <CardTitle>Crescentine</CardTitle>
                        <CardSubtitle className=" text-muted">
                        Twitch Streamer
                        </CardSubtitle>
                      </div>
                    </div>

                    <CardText>
                      <hr />
                      Working with the Vimerse team for video editing is my first experience working with professional video editors and they DID NOT disappoint! I used to spend hours editing my own videos thinking that no one will ever get my brand / style right but Vimerse was able to take my instructions and raw footage, and they turned it into something better than I could have ev...
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={6} className="mt-2 pd-right">
                <Card className="second-card">
                  <CardBody>
                    <div className="parent-card d-flex">
                      <CardImg
                        variant="top"
                        height="55px"
                        width="55px"
                        src={require("../../images/PhotoVlasta.svg").default}
                      />
                      <div className="child-card">
                        <CardTitle>Arianna</CardTitle>
                        <CardSubtitle className=" text-muted">
                        Twitch Streamer
                        </CardSubtitle>
                      </div>
                    </div>

                    <CardText>
                      <hr />
                      I am impressed with the speed of editing and response time. The questions that were asked prior to editing were very helpful to communicate wishes without a one-on-one conversation. The note-system where I could give feedback on specific parts of the video was also really helpful! Giving feedback was made very easy.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={6} className="pd-right mt-2">
                <Card className="second-card">
                  <CardBody>
                    <div className="parent-card d-flex">
                      <CardImg
                        variant="top"
                        height="55px"
                        width="55px"
                        src={require("../../images/PhotoVigrin.svg").default}
                      />
                      <div className="child-card">
                        <CardTitle>Angela Zacharias</CardTitle>
                        <CardSubtitle className=" text-muted">
                        Instagram Influencer
                        </CardSubtitle>
                      </div>
                    </div>

                    <CardText>
                      <hr />
                      This service is fantastic! Everything was exceptional from start to finish! The communication was clear and concise, the instructions were detailed, and the editing was amazing! Made my life so easy, they took care of everything for me. I would highly recommend Vimerse to anyone that is needing a project edited to perfection.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={6} className=" mt-2 pd-right">
                <Card className="main-card">
                  <CardBody>
                    <div className="parent-card d-flex">
                      <CardImg
                        variant="top"
                        height="55px"
                        width="55px"
                        src={require("../../images/Photo.svg").default}
                      />
                      <div className="child-card">
                        <CardTitle>James Han</CardTitle>
                        <CardSubtitle className=" text-muted">
                        Entrepreneur
                        </CardSubtitle>
                      </div>
                    </div>

                    <CardText>
                      <hr />
                      When I asked Vimerse to edit the intro video for my restaurant, I honestly didn't expect this level of quality. From seamless connections and transitions between clips, clean editing of intro and ending, to the introduction of appropriate sound effects, Vimerse certainly impressed me. The carefully adjusted frame of the original clips that had been filmed at a...
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={6} className="mt-2 pd-right">
                <Card className="main-card">
                  <CardBody>
                    <div className="parent-card d-flex">
                      <CardImg
                        variant="top"
                        height="55px"
                        width="55px"
                        src={require("../../images/Photo-z.svg").default}
                      />
                      <div className="child-card">
                        <CardTitle>RAYM</CardTitle>
                        <CardSubtitle className=" text-muted">
                        Twitch Streamer
                        </CardSubtitle>
                      </div>
                    </div>

                    <CardText>
                      <hr />
                      I think it really fits the vibe of my stream perfectly. Your turnaround time is also incredible!
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Col xs={12} md={12} lg={12} className="text-center mb-5 mt-5">
              <Button className="footer-btn-2">Show more</Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section 8 end */}
      {/* section 9 start */}
      <section className="section-9">
        <Container className="main-container">
          <Row className="main-container-row">
            <Col md={6} xs={12} lg={6} className="left-img-bg">
              <Row className="align-items-center pt-5 pd-lr">
                <Col xs={12} md={12} lg={12} className="parent-column">
                  <h2>Start creating</h2>
                  <p className="content-p">
                    Let’s turn your footage into an engaging video{" "}
                  </p>
                  <p>
                    Once your raw footage is ready, please submit your contact.{" "}
                    <span>
                      Next, you will be redirected to an ordering form. It is a
                      simple, straightforward process with a two-calendar day
                      turnaround. One free trial for first-time users.
                    </span>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={6} xs={12} lg={6} className="right-bg">
              <Row className="top-right-row">
                <Col md={12} xs={12} lg={12}>
                  <Row>
                    <div className="footer-hr">
                      <img
                        className="img-size"
                        src={require("../../images/hrFont.svg").default}
                      />
                    </div>
                  </Row>
                </Col>
                <Col xs={12} md={12} lg={12} className="tb-padding">
                  <Form className="form" autoComplete="off">
                    <FormGroup>
                      <Row>
                        <Label>First Name</Label>
                        <Col md={12} xs={12} lg={12} className="mp">
                          <Input
                            type="name"
                            name="name"
                            id="exampleEmail"
                            placeholder="Name"
                            onChange={(e) =>
                              setinputtext({
                                ...inputtext,
                                firstName: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col xs={12} md={12} lg={12}>
                          <Row className="hl-text">
                            <Col md={9} xs={9} lg={9} className="mp">
                              <p>Please enter a valid first name</p>
                            </Col>
                            <Col md={3} xs={3} lg={3}>
                              <span>{inputtext.Name?.length || 0} /80</span>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <FormGroup>
                      <Row>
                        <Label>Last Name</Label>
                        <Col md={12} xs={12} lg={12} className="mp">
                          <Input
                            type="lastname"
                            name="name"
                            id="exampleEmail"
                            placeholder="Name"
                            onChange={(e) =>
                              setinputtext({
                                ...inputtext,
                                lastName: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col xs={12} md={12} lg={12}>
                          <Row className="hl-text">
                            <Col md={9} xs={9} lg={9} className="mp">
                              <p>Please enter a valid last name</p>
                            </Col>
                            <Col md={3} xs={3} lg={3}>
                              <span>{inputtext.Name?.length || 0} /80</span>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      </FormGroup>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label>Email</Label>
                        <Col md={12} xs={12} lg={12} className="mp">
                          <Input
                            type="name"
                            name="name"
                            id="exampleEmail"
                            placeholder="Name"
                            onChange={(e) =>
                              setinputtext({
                                ...inputtext,
                                Email: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col xs={12} md={12} lg={12}>
                          <Row className="hl-text">
                            <Col md={9} xs={9} lg={9} className="mp">
                              <p>Please enter a valid email address</p>
                            </Col>
                            <Col md={3} xs={3} lg={3}>
                              <span>{inputtext.Email?.length || 0} / 255</span>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </FormGroup>
                    <Row>
                      <Col md={12} xs={12} lg={12} className="text-center ">
                        <Button className="btnClass btn-orange">
                          Sign up                     </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <div className="footer-hr">
                    <img
                      className="img-size"
                      src={require("../../images/hrFont.svg").default}
                    />
                  </div>
                  <p className="form-footer">
                    By proceeding, you agree to our Terms of Use and confirm you
                    have read our Privacy and Cookie Statement
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <Footer /> */}
    </>
  );
};
export default DevHome;
