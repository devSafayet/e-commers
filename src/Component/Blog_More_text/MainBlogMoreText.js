import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import blog1 from '../Blog_More_text/images/blog/blog-1.jpg'
import blogmore1 from '../Blog_More_text/images/blog/blog-1.jpg'
import blogmore2 from '../Blog_More_text/images/blog/blog-2.jpg'
import blogmore3 from '../Blog_More_text/images/blog/blog-3.jpg'
import blogmore4 from '../Blog_More_text/images/blog/blog-4.jpg'
import MainFooter from '../Footer/MainFooter'
import MainNavber from '../Navber/MainNavber'
import MainTitle from '../Title/MainTitle'

function MainBlogMoreText() {

  
  return (
    <>
    <MainNavber/>
        <div>
          <Container>
            <Row>
              <Col sm={12} md={8} lg={8}>
                <div className='Blog_details'>
                  <img src={blog1} width="100%"/>
                </div>
                <div className='blog_text my-3'>
                  <a href='#' className='fs-3 mb-3' style={{ color:"#c39f57" }}>Fashion</a>
                  <h6 className='fs-2 fw-semibold mb-3' style={{ color:"#333333" }}>Clothes Retail KPIs 2021 Guide for Clothes Executives.</h6>
                  <p className='fs-6 mb-3' style={{ color:"#6c757d" }}>By Mr Admin / Apr 06, 2022</p>
                  <p className='fs-6 mb-3' style={{ color:"#6c757d" }}></p>
                  <Link className="fw-semibold fs-5" style={{ color:"#6c757d" }} to ="" >Read More</Link>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
              <div className='Blog_details_sidebar'>
                <InputGroup className="">
                  <Form.Control
                    placeholder="Enter your product name.."
                    type="search"
                    aria-describedby="basic-addon2"
                    className='search_bar'
                    style={{borderRight: 0}}
                  />

                  <Button className='search_btn btn btn-outline-secondary' type='submit' style={{ color:"#fff", background:"#c39f57"}} >
                      <i class="fa fa-search" aria-hidden="true"></i>
                  </Button>
                </InputGroup>
                <Col sm={12} md={12} lg={12}>
                  <MainTitle ourTitle="Populer Post" />
                </Col>
                <Row className='blog_post mb-3'>
                  <Col sm={4} md={4} lg={4}>
                    <div>
                      <img src={blogmore1} width="100%" height="70"/> 
                    </div>
                  </Col>
                  <Col sm={8} md={8} lg={8}>
                    <div>
                      <p className='fs-6 mb-1' style={{ color:"#6c757d" }}>By Mr Admin / Apr 06, 2022</p>
                      <h6 className='fs-6 fw-semibold mb-1' style={{ color:"#333333" }}>Clothes Retail KPIs 2021 Guide for Clothes Executives</h6>
                    </div>
                  </Col>
                </Row>
                <Row className='blog_post mb-3'>
                  <Col sm={4} md={4} lg={4}>
                    <div>
                      <img src={blogmore2} width="100%" height="70"/> 
                    </div>
                  </Col>
                  <Col sm={8} md={8} lg={8}>
                    <div>
                      <p className='fs-6 mb-1' style={{ color:"#6c757d" }}>By Mr Admin / Apr 06, 2022</p>
                      <h6 className='fs-6 fw-semibold mb-1' style={{ color:"#333333" }}>Clothes Retail KPIs 2021 Guide for Clothes Executives</h6>
                    </div>
                  </Col>
                </Row>
                <Row className='blog_post mb-3'>
                  <Col sm={6} md={4} lg={4}>
                    <div>
                      <img src={blogmore3} width="100%" height="70"/> 
                    </div>
                  </Col>
                  <Col sm={6} md={8} lg={8}>
                    <div>
                      <p className='fs-6 mb-1' style={{ color:"#6c757d" }}>By Mr Admin / Apr 06, 2022</p>
                      <h6 className='fs-6 fw-semibold mb-1' style={{ color:"#333333" }}>Clothes Retail KPIs 2021 Guide for Clothes Executives</h6>
                    </div>
                  </Col>
                </Row>
                <Row className='blog_post mb-3'>
                  <Col sm={6} md={4} lg={4}>
                    <div>
                      <img src={blogmore4} width="100%" height="70"/> 
                    </div>
                  </Col>
                  <Col sm={6} md={8} lg={8}>
                    <div>
                      <p className='fs-6 mb-1' style={{ color:"#6c757d" }}>By Mr Admin / Apr 06, 2022</p>
                      <h6 className='fs-6 fw-semibold mb-1' style={{ color:"#333333" }}>Clothes Retail KPIs 2021 Guide for Clothes Executives</h6>
                    </div>
                  </Col>
                </Row>
                <Col sm={12} md={12} lg={12}>
                  <MainTitle ourTitle="Categories" />
                </Col>
                <div className='blog_Sidebar_Category'>
                  <div className='d-flex align-item-center mb-4'>
                    <div className=''>
                      <a href='#'><i class="fa-solid fa-location-dot fs-4 me-2" style={{ color:"#6c757d" }}></i></a>
                    </div>
                    <div>
                      <a style={{ color:"#6c757d" }}>Fashion</a>
                    </div>
                  </div>
                  <div className='d-flex align-item-center mb-4'>
                    <div className=''>
                      <a href='#'><i class="fa-solid fa-location-dot fs-4 me-2" style={{ color:"#6c757d" }}></i></a>
                    </div>
                    <div>
                      <a style={{ color:"#6c757d" }}>Fashion</a>
                    </div>
                  </div>
                  <div className='d-flex align-item-center mb-4'>
                    <div className=''>
                      <a href='#'><i class="fa-solid fa-location-dot fs-4 me-2" style={{ color:"#6c757d" }}></i></a>
                    </div>
                    <div>
                      <a style={{ color:"#6c757d" }}>Fashion</a>
                    </div>
                  </div>
                  <div className='d-flex align-item-center mb-4'>
                    <div className=''>
                      <a href='#'><i class="fa-solid fa-location-dot fs-4 me-2" style={{ color:"#6c757d" }}></i></a>
                    </div>
                    <div>
                      <a style={{ color:"#6c757d" }}>Fashion</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            </Row>
          </Container>
        </div>
        <MainFooter/>
    </>
  )
}

export default MainBlogMoreText