import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainTitle from "../Title/MainTitle";
import aboutimg1 from "../About_Us/images/about_us_img_11-1.png";
import men1 from "../About_Us/images/team_11-1.png";
export default function MainAboutUs() {
  return (
    <>
      <div className="my-5">
        <Container>
          <Row className="shadow p-3 mb-5 bg-body rounded">
            <Col sm={12} md={6} className="p-4 pt-0">
              <Col sm={12} md={12} lg={12}>
                <MainTitle ourTitle="OUR HISTORY" />
              </Col>
              <h1
                className="fs-1 fw-semibold pb-3"
                style={{ color: "#333333" }}
              >
                Creative and renovate fashion trends
              </h1>
              <p className="fs-6 fw-normal pb-3" style={{ color: "#6c757d", textAlign: 'justify' }}>
                Collaboratively administrate empowered markets via plug-and-play
                maintain networks. Dynamically usable procrastinate B2B users
                after installed base benefits. Dramatically visualize customer
                directed convergence without revolutionary ROI.
              </p>
              <div className="about_counter d-flex">
                <Col
                  sm={3}
                  md={3}
                  lg={3}
                  className="border rounded text-center p-1 m-1"
                >
                  <h1 className="fs-3 fw-bold" style={{ color: "#c39f57" }}>
                    12
                  </h1>
                  <h5 className="fs-6 fw-semibold" style={{ color: "#6c757d" }}>
                    Years Experience
                  </h5>
                </Col>
                <Col
                  sm={3}
                  md={3}
                  lg={3}
                  className="border rounded text-center p-1 m-1"
                >
                  <h1 className="fs-3 fw-bold" style={{ color: "#c39f57" }}>
                    20K
                  </h1>
                  <h5 className="fs-6 fw-semibold" style={{ color: "#6c757d" }}>
                    Happy Customers
                  </h5>
                </Col>
                <Col
                  sm={3}
                  md={3}
                  lg={3}
                  className="border rounded text-center p-1 m-1"
                >
                  <h1 className="fs-3 fw-bold" style={{ color: "#c39f57" }}>
                    12
                  </h1>
                  <h5 className="fs-6 fw-semibold" style={{ color: "#6c757d" }}>
                    Clients Satisfaction
                  </h5>
                </Col>
              </div>
            </Col>
            <Col sm={12} md={6} className="p-0">
              <div>
                <img src={aboutimg1} height="530" width="100%" />
              </div>
            </Col>
          </Row>
          <Row className="my-5 border rounded">
            <Col sm={12} md={12} lg={12}>
              <MainTitle ourTitle="Meet With Our Team" />
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="about_us_item border rounded mb-3">
                <div className="">
                  <img className="d-block w-100" src={men1} alt="First slide" />
                </div>
                <div className="about_us_text py-3 ps-3">
                  <h6 className="mb-2">Shazda Priya</h6>
                  <p className="mb-2">Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="about_us_item border rounded mb-3">
                <div className="">
                  <img className="d-block w-100" src={men1} alt="First slide" />
                </div>
                <div className="about_us_text py-3 ps-3">
                  <h6 className="mb-2">Shazda Priya</h6>
                  <p className="mb-2">Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="about_us_item border rounded mb-3">
                <div className="">
                  <img className="d-block w-100" src={men1} alt="First slide" />
                </div>
                <div className="about_us_text py-3 ps-3">
                  <h6 className="mb-2">Shazda Priya</h6>
                  <p className="mb-2">Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="about_us_item border rounded mb-3">
                <div className="">
                  <img className="d-block w-100" src={men1} alt="First slide" />
                </div>
                <div className="about_us_text py-3 ps-3">
                  <h6 className="mb-2">Shazda Priya</h6>
                  <p className="mb-2">Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="about_us_item border rounded mb-3">
                <div className="">
                  <img className="d-block w-100" src={men1} alt="First slide" />
                </div>
                <div className="about_us_text py-3 ps-3">
                  <h6 className="mb-2">Shazda Priya</h6>
                  <p className="mb-2">Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="about_us_item border rounded mb-3">
                <div className="">
                  <img className="d-block w-100" src={men1} alt="First slide" />
                </div>
                <div className="about_us_text py-3 ps-3">
                  <h6 className="mb-2">Shazda Priya</h6>
                  <p className="mb-2">Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="about_us_item border rounded mb-3">
                <div className="">
                  <img className="d-block w-100" src={men1} alt="First slide" />
                </div>
                <div className="about_us_text py-3 ps-3">
                  <h6 className="mb-2">Shazda Priya</h6>
                  <p className="mb-2">Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="about_us_item border rounded mb-3">
                <div className="">
                  <img className="d-block w-100" src={men1} alt="First slide" />
                </div>
                <div className="about_us_text py-3 ps-3">
                  <h6 className="mb-2">Shazda Priya</h6>
                  <p className="mb-2">Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="about_us_item border rounded mb-3">
                <div className="">
                  <img className="d-block w-100" src={men1} alt="First slide" />
                </div>
                <div className="about_us_text py-3 ps-3">
                  <h6 className="mb-2">Shazda Priya</h6>
                  <p className="mb-2">Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="about_us_item border rounded mb-3">
                <div className="">
                  <img className="d-block w-100" src={men1} alt="First slide" />
                </div>
                <div className="about_us_text py-3 ps-3">
                  <h6 className="mb-2">Shazda Priya</h6>
                  <p className="mb-2">Frontend Developer</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
