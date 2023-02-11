import React from 'react'
import { Col, InputGroup, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../Navber/images/logo/mustakim.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function MainNavber() {
  return (
    <>

    {/* header top */}

    <div className='py-2 top_header border-bottom'>
      <Container>
        <Row>
            <div className='header_item d-flex justify-content-between'>
              <div className='top_text d-flex' style={{ background:"#fff" }}>
                  <div className=''>
                    <ul className='d-flex'>
                      <li><a href='#'><i class="fa-brands fa-facebook header_social_icon fs-6 me-3  rounded p-1"></i></a></li>
                      <li><a href='#'><i class="fa-brands fa-facebook header_social_icon fs-6 me-3  rounded p-1"></i></a></li>
                      <li><a href='#'><i class="fa-brands fa-facebook header_social_icon fs-6 me-3  rounded p-1"></i></a></li>
                      <li><a href='#'><i class="fa-brands fa-facebook header_social_icon fs-6 me-3  rounded p-1"></i></a></li>
                    </ul>
                  </div>
                  <div class="header_news fw-normal fs-6">
                    <p className='text-uppercase' style={{ color:"#6c757d" }}>
                    <b className='me-2 fs-6 fw-normal'>Free Shipping</b>
                    This Week Order Over - $55
                  </p>
                  </div>
              </div>
              <div>
                <p className='fw-normal fs-6' style={{ color:"#6c757d" }}>Example@Gmail.Com</p>
              </div>
            </div>
        </Row>
      </Container>
    </div>

    {/* logo part */}

      <Navbar expand="lg" className="py-2 nav_Logo border-bottom">
        <Container>
          <Navbar.Brand className="m-auto" href="#home">
          <img
              src={img1}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* navber search */}

      <div className='py-4 border-bottom'>
        <Container>
          <Row>
            <Col sm={12} md={3} lg={3}>
                <div className='py-3'>
                </div>
            </Col>
              <Col sm={12} md={6} lg={6}>
                {/* <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Enter your product name.."
                    type="search"
                    aria-describedby="basic-addon2"
                    className='search_bar'
                  />

                  <Button className='search_btn' type='submit' style={{ color:"#c39f57" }} >
                      <i class="fa fa-search" aria-hidden="true"></i>
                  </Button>
                </InputGroup> */}
                
                <Form className="d-flex search_bar py-3">
                  <Form.Control
                    type="search"
                    placeholder="Enter your product name.."
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className='btn search_btn border-0' style={{ background:"none"}}>
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </Button>
                </Form>
              </Col>
              <Col sm={12} md={3} lg={3}>
                <div className='d-flex justify-content-evenly py-3'>
                  <button className='border-0' style={{ background:"none" }}>
                    <i class="fa fa-user fs-2 header_icon" style={{ color:"#6c757d" }}  aria-hidden="true"></i>
                  </button>
                  <button className='border-0' style={{ background:"none" }}>
                    <i class="fa fa-heart fs-2 header_icon" style={{ color:"#6c757d"}} aria-hidden="true"></i>
                  </button>
                  <button className='border-0' style={{ background:"none" }}>
                    <i class="fa fa-shopping-bag fs-2 header_icon" style={{ color:"#6c757d"}} aria-hidden="true"></i>
                  </button>
                </div>
              </Col>
          </Row>
        </Container>
      </div>
      

      {/* navber part */}

      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav main_menu">
            <Nav className="m-auto menu_nav ps-0">
              <Link to="/" className='mx-3 '>Home</Link>
              <Link to="/about" className='mx-3 '>ABOUT US</Link>
              <Link to="/shop" className='mx-3 '>SHOP</Link>
              <Link to="/blog" className='mx-3 '>BLOG</Link>
              <Link to="/contact" className='mx-3'>CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  )
}
