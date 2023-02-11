import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../Footer/css/style.css';
import payment from '../Footer/images/payment.png';

export default function MainFooter() {
  return (
    <>
    <div className='py-5 border-bottom' style={{ background:"#212529" }}>
      <Container>
        <Row>
          <Col sm={12} md={12}>
          <div className='link_item d-flex mb-3'>
            <div>
              <h5 className='fs-6 fw-semibold text-uppercase' style={{ color:"#6c757d" }}>Fashion :</h5>
            </div>
            <div>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>T-shirt |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>shirt |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Shorts & Jeans |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Jacket |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Dress & Frock |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Innerwear </a>
            </div>
          </div>
          <div className='link_item d-flex mb-3'>
            <div>
              <h5 className='fs-6 fw-semibold text-uppercase' style={{ color:"#6c757d" }}>FOOTWEAR :</h5>
            </div>
            <div>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>T-shirt |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>shirt |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Shorts & Jeans |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Jacket |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Dress & Frock |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Innerwear |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Hosiery |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Innerwear </a>
            </div>
          </div>
          <div className='link_item d-flex mb-3'>
            <div>
              <h5 className='fs-6 fw-semibold text-uppercase' style={{ color:"#6c757d" }}>JEWELLERY :</h5>
            </div>
            <div>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>T-shirt |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>shirt |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Shorts & Jeans |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Jacket |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Dress & Frock |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Innerwear |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Hosiery |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Innerwear |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Hosiery </a>
            </div>
          </div>
          <div className='link_item d-flex'>
            <div>
              <h5 className='fs-6 fw-semibold text-uppercase' style={{ color:"#6c757d" }}>COSMETICS :</h5>
            </div>
            <div>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>T-shirt |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>shirt |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Shorts & Jeans |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Jacket |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Dress & Frock |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Innerwear |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Skin Loson |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Innerwear |</a>
              <a href='#' className='mx-3 fw-normal text-capitalize' style={{ color:"#6c757d" }}>Innerwear </a>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='py-5 border-bottom' style={{ background:"#212529" }}>
      <Container>
        <Row>
          <Col sm={12} md={3}>
            <div className='footer_item'>
            <h5 className='text-uppercase fw-semibold fs-5 footer_border mb-3' style={{ color:"#fff" }}>POPULAR CATEGORIES</h5>
              <ul className=''>
                <li className=''>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Fashion</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Electronic</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Cosmetic</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Health</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Watches</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={2}>
            <div className='footer_item'>
            <h5 className='text-uppercase fw-semibold fs-5 footer_border mb-3' style={{ color:"#fff" }}>PRODUCTS</h5>
              <ul className=''>
                <li className=''>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Prices Drop</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>New Products</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Best Sales</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Contact Us</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Sitemap</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={2}>
            <div className='footer_item'>
            <h5 className='text-uppercase fw-semibold fs-5 footer_border mb-3' style={{ color:"#fff" }}> OUR COMPANY</h5>
              <ul className=''>
                <li className=''>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Delivery</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Legal Notice</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Terms And Conditions</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>About Us</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Secure Payment</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={2}>
            <div className='footer_item'>
            <h5 className='text-uppercase fw-semibold fs-5 footer_border mb-3' style={{ color:"#fff" }}>  SERVICES</h5>
              <ul className=''>
                <li className=''>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Delivery</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Prices Drop Notice</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>New Products</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Contact Us</a>
                  <a href='#' className='d-block mb-2' style={{ color:"#6c757d" }}>Sitemap</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className='footer_item'>
            <h5 className='text-uppercase fw-semibold fs-5 footer_border mb-3' style={{ color:"#fff" }}>  SERVICES</h5>
            <div className='d-flex align-item-center mb-2'>
              <div>
                <a href='#'><i class="fa fa-star me-2" aria-hidden="true " style={{ color:"#6c757d" }}></i></a>
              </div>
              <div>
                <p style={{ color:"#6c757d" }}>419 State 414 Rte Beaver Dams, New York(NY), 14812, USA</p>
              </div>
            </div>
            <div className='d-flex align-item-center mb-2'>
              <div>
                <a href='#'><i class="fa fa-star me-2" aria-hidden="true " style={{ color:"#6c757d" }}></i></a>
              </div>
              <div>
                <p style={{ color:"#6c757d" }}>(607) 936-8058</p>
              </div>
            </div>
            <div className='d-flex align-item-center mb-2'>
              <div>
                <a href='#'><i class="fa fa-star me-2" aria-hidden="true " style={{ color:"#6c757d" }}></i></a>
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
    <div className='py-5' style={{ background:"#212529" }}>
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
