import React from 'react'
import { Col, InputGroup, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_img from '../Navber/images/logo/mustakim.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, NavLink } from 'react-router-dom';
import '../Navber/css/style.css';

export default function MainNavber() {
  return (
    <>

    {/* header top/ */}

    <div className='py-2 top_header border-bottom'>
      <Container>
        <Row>
            <div className='header_item d-flex justify-content-between'>
              <div className='top_text d-flex' style={{ background:"#fff" }}>
                  <div className=''>
                    <ul className='d-flex'>
                      <li><a href='#'> <i class="fa-brands fa-square-facebook header_social_icon fs-6 me-3  rounded p-1"></i> </a></li>
                      <li><a href='#'><i class="fa-brands fs-6 me-3 header_social_icon rounded p-1 fa-twitter "></i></a></li>
                      <li><a href='#'><i class="fa-brands fa-square-instagram header_social_icon fs-6 me-3  rounded p-1"></i></a></li>
                      <li><a href='#'><i class="fa-brands fa-linkedin header_social_icon fs-6 me-3  rounded p-1"></i></a></li>
                    </ul>
                  </div>
                  <div class="header_news fw-normal fs-6">
                    <p className='text-uppercase' style={{ color:"#6c757d" }}>
                    <b className='me-2 fs-6 fw-normal'>Free Shipping</b>
                    This Week Order Over - $55
                  </p>
                  </div>
              </div>
              <div className='flex'>
                <i class="fa-solid fa-location-dot header_social_icon fs-6 me-2 rounded p-1"></i>
                <NavLink to="/" className='fw-normal fs-6' style={{ color:"#6c757d" }}>Order Tracking</NavLink>
              </div>
            </div>
        </Row>
      </Container>
    </div>

    {/* logo part */}

      <Navbar expand="lg" className="py-2 nav_Logo border-bottom ">
        <Container>
          <Navbar.Brand className="m-auto" href="/">
          <img
              src={logo_img}
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
                <InputGroup className="mb-3 py-2">
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
              </Col>
              <Col sm={12} md={3} lg={3}>
                <div className='d-flex justify-content-evenly py-2'>
                  <NavLink to="/login" className='border-0' style={{ background:"none" }}>
                    <i class="fa fa-user fs-2 header_icon" style={{ color:"#6c757d" }}  aria-hidden="true"></i>
                  </NavLink>
                  <NavLink to="/wishlist" className='border-0' style={{ background:"none" }}>
                    <i class="fa fa-heart fs-2 header_icon" style={{ color:"#6c757d"}} aria-hidden="true"></i>
                  </NavLink>
                  <NavLink to="/add_card" className='border-0' style={{ background:"none" }}>
                    <i class="fa fa-shopping-bag fs-2 header_icon" style={{ color:"#6c757d"}} aria-hidden="true">
                    </i>
                  </NavLink>
                
                {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Launch demo modal
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div> */}
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
              <NavLink className='mx-3 linav' to="/">HOME</NavLink>
              <NavLink className='mx-3 linav' to="/about">ABOUT US</NavLink>
              <NavLink className='mx-3 linav' to="/shop" >SHOP</NavLink>
              <NavLink className='mx-3 linav' to="/blog" >BLOG</NavLink>
              <NavLink className='mx-3 linav' to="/contact">CONTACT US</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  )
}
