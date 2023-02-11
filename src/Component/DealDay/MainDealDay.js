import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import deal_img1 from '../DealDay/images/KF3.webp';
import '../DealDay/css/style.css';
import MainTitle from '../Title/MainTitle';

export default function MainDealDay() {
  return (
    <>
      <div className='my-5'>
        <Col sm={12} md={12} lg={12}>
            <MainTitle ourTitle='Deal Of The Day'/>
        </Col>
        <Container>
          <Row className='border py-4 px-2 rounded'>
            <Col sm={12} md={6}>
              <div className='deal_day_img'>
                <img src={deal_img1}
                width="100%"
                />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className='deal_day_text'>
                <p className='mb-3' style={{ color:"#c39f57" }}>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </p>
                <h5 className='mb-3' style={{ color:"#3333333" }}>SHAMPOO, CONDITIONER & FACEWASH PACKS</h5>
                <p className='mb-3' style={{ color:"#6c757d" }}>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor</p>
                <div className='d-flex mb-3'>
                <div className='me-5'>
                  <h3 className='fw-bolder fs-4' style={{ color:" #c39f57" }}>$150.00</h3>
                </div>
                <div>
                  <del className='fw-normal fs-4' style={{ color:"#6c757d" }} >$200.00</del>
                </div>
                </div>
                <Button className='mb-3 dealday_btn fw-bold' style={{ background:" #c39f57" }} >
                ADD TO CART
                </Button>
                <p className='mb-3' style={{ color:"#3333333" }} >ALREADY SOLD: <span className='fw-bolder'>20</span></p>

              <div className='deal_scrollbar mb-3 .progress-bar-warning' style={{ background:"#ced4da" }}></div>

              <p className='mb-3'  style={{ color:"#3333333" }}>HURRY UP! OFFER ENDS IN:</p>
              <div className='d-flex text-align-center'>
                <div className='p-2 border rounded me-4' style={{ background:"#ced4da" }}>
                  <p className='fw-normal fs-6' style={{ color:"#6c757d" }}>360</p>
                  <p className='fw-normal fs-6' style={{ color:"#6c757d" }}>Days</p>
                </div>
                <div className='p-2 border rounded me-4' style={{ background:"#ced4da" }}>
                  <p className='fw-normal fs-6' style={{ color:"#6c757d" }}>24</p>
                  <p className='fw-normal fs-6' style={{ color:"#6c757d" }}>Hour</p>
                </div>
                <div className='p-2 border rounded me-4' style={{ background:"#ced4da" }}>
                  <p className='fw-normal fs-6' style={{ color:"#6c757d" }}>59</p>
                  <p className='fw-normal fs-6' style={{ color:"#6c757d" }}>Min</p>
                </div>
                <div className='p-2 border rounded me-4' style={{ background:"#ced4da" }}>
                  <p className='fw-normal fs-6' style={{ color:"#6c757d" }}>00</p>
                  <p className='fw-normal fs-6' style={{ color:"#6c757d" }}>Sec</p>
                </div>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
