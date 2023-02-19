import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../Footer/css/style.css';
import payment from '../Footer/images/payment.png';
import logofooter from '../Footer/images/mustakim.png';
import { Link, NavLink } from 'react-router-dom';
export default function MainFooter() {
  return (
    <>
    <div className='py-5 border-bottom' style={{ background:"#212529" }}>
      <Container>
        <Row>
          <Col sm={12} md={3}>
            <div className='footer_item text-center'>
              <img src={logofooter} width="40%"/>
              <p className='fs-6 fw-normal mt-3' style={{ color:"#6c757d" }}>Collaboratively administrate empowered markets via plug-and-play maintain networks.</p>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className='footer_item'>
            <h5 className='text-uppercase fw-semibold fs-5 footer_border mb-3' style={{ color:"#fff" }}>USEFULL LINK</h5>
              <ul className=''>
                <li className=''>
                  <NavLink to='/' className='d-block mb-2 footer_text_hover' style={{ color:"#6c757d" }}>Home</NavLink>
                  <NavLink to='/about' className='d-block mb-2 footer_text_hover' style={{ color:"#6c757d" }}>About</NavLink>
                  <NavLink to='/shop' className='d-block mb-2 footer_text_hover' style={{ color:"#6c757d" }}>Shop</NavLink>
                  <NavLink to='/blog' className='d-block mb-2 footer_text_hover' style={{ color:"#6c757d" }}>Blog</NavLink>
                  <NavLink to='/contact' className='d-block mb-2 footer_text_hover' style={{ color:"#6c757d" }}>Contact</NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className='footer_item'>
            <h5 className='text-uppercase fw-semibold fs-5 footer_border mb-3' style={{ color:"#fff" }}>CATEGORIES</h5>
              <ul className=''>
                <li className=''>
                  <a href='#' className='d-block mb-2 footer_text_hover' style={{ color:"#6c757d" }}>DRESS & FROCK</a>
                  <a href='#' className='d-block mb-2 footer_text_hover' style={{ color:"#6c757d" }}>WINTER WEAR</a>
                  <a href='#' className='d-block mb-2 footer_text_hover' style={{ color:"#6c757d" }}>GLASSES & LENS</a>
                  <a href='#' className='d-block mb-2 footer_text_hover' style={{ color:"#6c757d" }}>SHORTS & JEANS</a>
                  <a href='#' className='d-block mb-2 footer_text_hover' style={{ color:"#6c757d" }}>Secure Payment</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className='footer_item'>
            <h5 className='text-uppercase fw-semibold fs-5 footer_border mb-3' style={{ color:"#fff" }}>CONTACT</h5>
            <div className='d-flex align-item-center mb-4 footer_p_hover'>
              <div className=''>
                <a href='#'><i class="fa-solid fa-location-dot fs-4 me-2" style={{ color:"#6c757d" }}></i></a>
              </div>
              <div>
                <p style={{ color:"#6c757d" }}>419 State 414 Rte Beaver Dams, New York(NY), 14812, USA</p>
              </div>
            </div>
            <div className='d-flex align-item-center mb-4 footer_p_hover'>
              <div>
              <a href='#'><i class="fa-solid fa-phone fs-4 me-2" style={{ color:"#6c757d" }}></i></a>
              </div>
              <div>
                <p style={{ color:"#6c757d" }}>(607) 936-8058</p>
              </div>
            </div>
            <div className='d-flex align-item-center mb-4 footer_p_hover'>
              <div>
                <a href='#'><i class="fa-solid fa-envelope fs-4 me-2" style={{ color:"#6c757d" }}></i></a>
              </div>
              <div>
                <p style={{ color:"#6c757d" }}>Example@Gmail.Com</p>
              </div>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='py-4' style={{ background:"#212529" }}>
      <Container>
        <Row>
          <Col sm={12}>
            <div className='footer_payment text-center'>
              <div>
                <img src={payment}
                />
              </div>
              <p className='mt-2' style={{ color:"#6c757d" }}>Copyright © <a href='#' style={{ color:"#6c757d" }}>Anon</a> All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}
