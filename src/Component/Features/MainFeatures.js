import React from "react";
import Button from "react-bootstrap/Button";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import product1 from "../Features/images/ilyn/product-1.webp";
import product2 from "../Features/images/ilyn/product-2.webp";
import product3 from "../Features/images/ilyn/product-3.webp";
import "../Features/css/style.css";
import MainTitle from "../Title/MainTitle";
import { NavLink } from "react-router-dom";

export default function MainFeatures() {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <MainTitle ourTitle="Our Feature Products" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="">
        <Container fluid>
          <Row>
            <Carousel>
              <Carousel.Item>
                <div className="fluid p-4" style={{ background: "#F5F4EF" }}>
                  <Row>
                    <Col sm={12} md={4} lg={4}>
                      <div
                        className="pb-4 border"
                        style={{ background: "#FFFFFF" }}
                      >
                        <img
                          className="d-block w-100"
                          src={product1}
                          alt="First slide"
                        />
                        <div className="ms-4 mt-4">
                          <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                      <div
                        className="pb-4 border"
                        style={{ background: "#FFFFFF" }}
                      >
                        <img
                          className="d-block w-100"
                          src={product2}
                          alt="First slide"
                        />
                       <div className="ms-4 mt-4">
                          <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                      <div
                        className="pb-4 border"
                        style={{ background: "#FFFFFF" }}
                      >
                        <img
                          className="d-block w-100"
                          src={product3}
                          alt="First slide"
                        />
                        <div className="ms-4 mt-4">
                          <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="fluid p-4" style={{ background: "#F5F4EF" }}>
                  <Row>
                    <Col sm={12} md={4} lg={4}>
                      <div
                        className="pb-4 border"
                        style={{ background: "#FFFFFF" }}
                      >
                        <img
                          className="d-block w-100"
                          src={product1}
                          alt="First slide"
                        />
                        <div className="ms-4 mt-4">
                          <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                      <div
                        className="pb-4 border"
                        style={{ background: "#FFFFFF" }}
                      >
                        <img
                          className="d-block w-100"
                          src={product2}
                          alt="First slide"
                        />
                        <div className="ms-4 mt-4">
                          <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                      <div
                        className="pb-4 border"
                        style={{ background: "#FFFFFF" }}
                      >
                        <img
                          className="d-block w-100"
                          src={product3}
                          alt="First slide"
                        />
                        <div className="ms-4 mt-4">
                          <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="fluid p-4" style={{ background: "#F5F4EF" }}>
                  <Row>
                    <Col sm={12} md={4} lg={4}>
                      <div
                        className="pb-4 border"
                        style={{ background: "#FFFFFF" }}
                      >
                        <img
                          className="d-block w-100"
                          src={product1}
                          alt="First slide"
                        />
                        <div className="ms-4 mt-4">
                          <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                      <div
                        className="pb-4 border"
                        style={{ background: "#FFFFFF" }}
                      >
                        <img
                          className="d-block w-100"
                          src={product2}
                          alt="First slide"
                        />
                        <div className="ms-4 mt-4">
                          <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                      <div
                        className="pb-4 border"
                        style={{ background: "#FFFFFF" }}
                      >
                        <img
                          className="d-block w-100"
                          src={product3}
                          alt="First slide"
                        />
                        <div className="ms-4 mt-4">
                          <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    </>
  );
}
