import { Container, Row, Col } from "reactstrap";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./CSS/AboutUs.css";
import "./CSS/Header.css";
import fitness from "../Video/Fitness-Replace.mp4";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header multiNavigate={true} />
      <Container>
        <Row className="">
          <Col xs={12} md={12} lg={12} className="text-center top-col-heading">
            <h1>About us</h1>
          </Col>
          <Col xs={12} md={12} lg={12} className="text-center top-heading">
            <img src={require("../images/peoples.svg").default} />
          </Col>
          <Col xs={12} md={12} lg={12} className="text-center top-heading">
            <h3>Our portfolio</h3>
            <video
              height="70%"
              width="100%"
              id="myVideo"
              muted
              controls
              loop
              className="fashionc-video"
              style={{ objectFit: "cover" }}
            >
              <source src={fitness} type="video/mp4" />
            </video>
          </Col>
          <Col xs={12} md={12} lg={12} className="text-center top-heading">
            <h3>How it started</h3>
            <p>
              After 15 years of global investing, Hyunjae was ready to try
              something new and looked for real-life problems to solve. During
              the pandemic, he learned new skills such as cooking and home
              improvement, all from YouTube. Intrigued by the power of video
              contents, he spoke to over 60 content creators and found out that
              video editing is the typical bottleneck in the content creation
              process and that many are eager to outsource editing without
              knowing how. That is why Hyunjae started Vimerse LLC.
            </p>
          </Col>
          <Col xs={12} md={12} lg={12} className="text-center top-heading">
            <h3>Our mission</h3>
            <p>
              We aim to become the best partner for video content creators. We
              provide high-quality video editing services at a reasonable cost
              and with a quick turnaround. Our services will not only take away
              stress and save time for content creators but will also help them
              increase viewer’s watch time. We create captivating content with
              entertaining storytelling and effective delivery of emotions.
            </p>
          </Col>
          <Col xs={12} md={12} lg={12} className="text-center top-heading">
            <h3> Our approach</h3>
            <p>
              Our one-of-a-kind approach is that we sourced editors from all
              over the world. Our Managing Editors have extensive networks in
              their respective regions, allowing them to hire the best-quality
              video editors. This method has two distinct advantages. First, we
              find appealing rates that allow us to offer competitive pricing.
              Second, we keep our operations running 24 hours a day, seven days
              a week to ensure a quick turnaround.
              <span>
                Our second feature is that all our editors have undergone
                extensive in-house training in addition to their years of
                experience. All editors are skilled in implementing editing
                techniques that are particularly effective in extending watch
                time, as a result, our editors will be able to tell your stories
                in a more engaging manner.
              </span>
            </p>
          </Col>
          <Col xs={12} md={12} lg={12} className="text-center top-heading">
            <h3>Our differentiations</h3>
            <p>
              It should take five months to become skillful at a new video
              editing software. It should take five days to find a freelancer
              who can easily turn out to be unreliable. It would take just 5
              minutes to submit an ordering form to Vimerse.
              <span>
                If you’ve tried learning video editing software, you’re probably
                aware of how limited they can be. Many apps require users to
                sign up for “pro” versions to enable key features. Or some apps
                add watermarks for their free versions. Consider the time you
                must spend to learn how to use these apps as well. Try our
                service. It should take 5 minutes to submit our ordering form if
                you have your footage ready. Then, you will receive a
                wonderfully edited video in 2 calendar days!
              </span>
              <span>
                If you've used freelancer websites before, you're probably aware
                of how time-consuming it can be to interview each candidate.
                Also, you're probably aware of how much your own experience
                differs from reviews. You can rely on us for a curated list of
                video editors because of our process and strict quality control.
              </span>
              <span>
                If you've worked with a dedicated editor before, you're probably
                aware of how costly they can be, or their styles might be too
                limited. Our editors can adapt to your style thanks to our
                research and training. And we are much cheaper than a dedicated
                editor!
              </span>
              <span>
                We have refined the ordering process so that you can submit your
                raw footage and instructions quickly and accurately. Our highly
                trained editors will apply trendy editing techniques while
                following your instructions. We save your time and help you
                stand out with your video content.
              </span>
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />{" "}
    </>
  );
};
export default About;
