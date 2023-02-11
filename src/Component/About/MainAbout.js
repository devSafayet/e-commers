import React from 'react'
import MainTitle from '../Title/MainTitle'
import Button from 'react-bootstrap/Button';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import product1 from '../About/images/ilyn/product-1.webp'; 
import product2 from '../About/images/ilyn/product-2.webp'; 
import product3 from '../About/images/ilyn/product-3.webp'; 
import '../About/css/style.css';

export default function MainAbout() {
  return (
    <>
      <div>
        <Container>
          <Row>
          <Col sm={12} md={12} lg={12}>
                <MainTitle ourTitle='Our Recent Products'/>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='' style={{ background:"#F5F4EF" }} >
          <Row>
          <Carousel>
              <Carousel.Item>
              <div className='fluid p-4' style={{ background:"#F5F4EF" }}>
                  <Row>
                    <Col sm={12} md={4} lg={4}>
                      <div className='pb-4 border' style={{ background:"#FFFFFF" }}>
                        <img
                            className="d-block w-100"
                            src={product1}
                            alt="First slide"
                          />
                          <Button className='dealday_btn mt-4 about_btn' style={{ background:" #c39f57" }} >
                              Details
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </Button>
                        </div>
                        </Col>
                      <Col sm={12} md={4} lg={4}>
                        <div className='pb-4 border' style={{ background:"#FFFFFF" }}>
                        <img
                            className="d-block w-100"
                            src={product2}
                            alt="First slide"
                          />
                          <Button className='dealday_btn mt-4 about_btn' style={{ background:" #c39f57" }} >
                              Details
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </Button>
                        </div>
                      </Col>
                      <Col sm={12} md={4} lg={4}>
                      <div className='pb-4 border' style={{ background:"#FFFFFF" }}>
                        <img
                            className="d-block w-100"
                            src={product3}
                            alt="First slide"
                          />
                          <Button className='dealday_btn mt-4 about_btn' style={{ background:" #c39f57" }} >
                              Details
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </Button>
                          </div>
                      </Col>
                  </Row>
                </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className='fluid p-4' style={{ background:"#F5F4EF" }}>
                  <Row>
                    <Col sm={12} md={4} lg={4}>
                      <div className='pb-4 border' style={{ background:"#FFFFFF" }}>
                        <img
                            className="d-block w-100"
                            src={product1}
                            alt="First slide"
                          />
                          <Button className='dealday_btn mt-4 about_btn' style={{ background:" #c39f57" }} >
                              Details
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </Button>
                        </div>
                        </Col>
                      <Col sm={12} md={4} lg={4}>
                        <div className='pb-4 border' style={{ background:"#FFFFFF" }}>
                        <img
                            className="d-block w-100"
                            src={product2}
                            alt="First slide"
                          />
                          <Button className='dealday_btn mt-4 about_btn' style={{ background:" #c39f57" }} >
                              Details
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </Button>
                        </div>
                      </Col>
                      <Col sm={12} md={4} lg={4}>
                      <div className='pb-4 border' style={{ background:"#FFFFFF" }}>
                        <img
                            className="d-block w-100"
                            src={product3}
                            alt="First slide"
                          />
                          <Button className='dealday_btn mt-4 about_btn' style={{ background:" #c39f57" }} >
                              Details
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </Button>
                          </div>
                      </Col>
                  </Row>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='fluid p-4' style={{ background:"#F5F4EF" }}>
                  <Row>
                    <Col sm={12} md={4} lg={4}>
                      <div className='pb-4 border' style={{ background:"#FFFFFF" }}>
                        <img
                            className="d-block w-100"
                            src={product1}
                            alt="First slide"
                          />
                          <Button className='dealday_btn mt-4 about_btn' style={{ background:" #c39f57" }} >
                              Details
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </Button>
                        </div>
                        </Col>
                      <Col sm={12} md={4} lg={4}>
                        <div className='pb-4 border' style={{ background:"#FFFFFF" }}>
                        <img
                            className="d-block w-100"
                            src={product2}
                            alt="First slide"
                          />
                          <Button className='dealday_btn mt-4 about_btn' style={{ background:" #c39f57" }} >
                              Details
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </Button>
                        </div>
                      </Col>
                      <Col sm={12} md={4} lg={4}>
                      <div className='pb-4 border' style={{ background:"#FFFFFF" }}>
                        <img
                            className="d-block w-100"
                            src={product3}
                            alt="First slide"
                          />
                          <Button className='dealday_btn mt-4 about_btn' style={{ background:" #c39f57" }} >
                              Details
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </Button>
                          </div>
                      </Col>
                  </Row>
                </div>
              </Carousel.Item>
            </Carousel>
          </Row>
      </div>
      
    </>

   
  )
}
