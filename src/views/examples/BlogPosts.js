import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterGray from "components/Footers/FooterGray.js";

function BlogPosts() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-posts");
    };
  });
  return (
    <>
      <DangerNavbar />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>A place for storytelling</h2>
                  <h3 className="title-uppercase">
                    <small>Written by designers for designers</small>
                  </h3>
                </Col>
              </Row>
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={
                              require("assets/img/sections/bruno-abatti.jpg")
                                .default
                            }
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="primary">
                            Featured
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            My Review of Pitchfork’s ‘Indie 500’ Album Review
                          </CardTitle>
                        </a>
                        <div className="card-description">
                          <p>
                            In the first sentence of Pitchfork’s review of my
                            collaborative project with 9th Wonder, INDIE 500, a
                            reviewer who is associated with music review site
                            rhapsody.com writes about how I criticize and then
                            distance myself from “celebrity straw men” with the
                            line “celebrities be making money...
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={
                              require("assets/img/sections/federico-beccari.jpg")
                                .default
                            }
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Popular
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            You Should Get Excited About Virtual Reality.
                          </CardTitle>
                          <h6 className="title-uppercase">October 20, 2016</h6>
                        </a>
                        <div className="card-description">
                          <p>
                            In the first sentence of Pitchfork’s review of my
                            collaborative project with 9th Wonder, INDIE 500, a
                            reviewer who is associated with music review site
                            rhapsody.com writes about how I criticize and then
                            distance myself from “celebrity straw men” with the
                            line “celebrities be making money...
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
              <div className="article">
                <Col className="ml-auto mr-auto" md="8">
                  <Card className="card-blog card-plain text-center">
                    <div className="card-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={
                            require("assets/img/sections/leonard-cotte.jpg")
                              .default
                          }
                        />
                        <p className="image-thumb">Photo by Cam Adams</p>
                      </a>
                    </div>
                    <CardBody>
                      <div className="card-category">
                        <Badge className="main-tag" color="warning">
                          Trending
                        </Badge>
                      </div>
                      <a href="javascrip: void(0);">
                        <CardTitle tag="h3">
                          Make Somebody Nervous Before You Die
                        </CardTitle>
                        <h6 className="title-uppercase">October 20, 2016</h6>
                      </a>
                      <div className="card-description">
                        <p>
                          You won’t find many concepts that are very useful or
                          important if you insist on having a worldview that’s
                          void of controversy, invulnerable to criticism, and
                          incapable of making others feel confused...
                        </p>
                      </div>
                    </CardBody>
                    <Button className="btn-round" color="danger" size="sm">
                      Read more
                    </Button>
                  </Card>
                </Col>
              </div>
              <hr />
              <Row>
                <Col md="12">
                  <div className="pull-left">
                    <Button
                      className="btn-link btn-move-left"
                      color="default"
                      size="sm"
                    >
                      <i className="fa fa-angle-left mr-1" />
                      Older Posts
                    </Button>
                  </div>
                  <div className="pull-right">
                    <Button
                      className="btn-link btn-move-right"
                      color="default"
                      size="sm"
                    >
                      Newer Posts <i className="fa fa-angle-right" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <FooterGray />
    </>
  );
}

export default BlogPosts;
