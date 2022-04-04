import { Container,Row,Col } from "reactstrap";

const View=()=>{

    return(
<Container>
    <Row>
        <Col xs={12} md={12} lg={12} className="parent-view">
            <h1>How to choose the right music for your video</h1>
            <img height="100%" width="100%"  src={require("../images/Article-img.svg").default} />
            <p>We all know music plays a big role in any successful video, because you can make people feel a wide spectrum of emotions with the right song. In the same way, having the wrong music can easily ruin your video, so I want to give you the top 3 tips as a professional video editor for you to choose the perfect song for your next project.</p>
        </Col>
    </Row>
</Container>

    )
}
export default View;