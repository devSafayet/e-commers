import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MainFooter from '../Footer/MainFooter'
import MainNavber from '../Navber/MainNavber'
import card1 from '../AddToCard/images/products/clothes-1.jpg'
import { Link } from 'react-router-dom'

function MainAddToCard() {
  return (
    <>
    <MainNavber/>
      <div style={{ background:"#eef0f0"}} className="py-5">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} className="m-auto">
              <h2 className='shadow py-3 mb-2 bg-body text-center' style={{ color:"#6c757d" }}>Add To Cart</h2>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col sm={12} md={6} lg={6} className="m-auto">
              <div className='d-flex justify-content-around rounded shadow p-4 mb-2 bg-body rounded'>
                <div className='border rounded'>
                  <img src={card1} width="100"/>
                </div>
                <div>
                  <h6 className='mb-2'>JACKET</h6>
                  <p className='mb-2'>Mens Winter Leathers Jackets</p>
                  <p className='fw-bolder' style={{ color:" #6c757d" }}>$150.00</p>
                </div>
                <div>
                  <div className=''>
                    <a href='#' style={{ color:"#6c757d" }} className="fs-5 fw-bold"><i class="fa-solid fa-trash"></i></a>
                  </div>
                  <div>
                    <a href='#' style={{ color:"#6c757d" }} className="fs-5 fw-bold"><i class="fa-solid fa-square-check"></i></a>
                  </div>
                  <div className=''>
                    <select name="" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='rounded shadow bg-body rounded py-1 px-5'>
                <p className='fw-bolder text-end' style={{ color:" #6c757d" }}>Price: $150.00</p>
              </div>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col sm={12} md={6} lg={6} className="m-auto">
              <div className='d-flex justify-content-around rounded shadow p-4 mb-2 bg-body rounded'>
                <div className='border rounded'>
                  <img src={card1} width="100"/>
                </div>
                <div>
                  <h6 className='mb-2'>JACKET</h6>
                  <p className='mb-2'>Mens Winter Leathers Jackets</p>
                  <p className='fw-bolder' style={{ color:" #6c757d" }}>$150.00</p>
                </div>
                <div>
                  <div className=''>
                    <a href='#' style={{ color:"#6c757d" }} className="fs-5 fw-bold"><i class="fa-solid fa-trash"></i></a>
                  </div>
                  <div>
                    <a href='#' style={{ color:"#6c757d" }} className="fs-5 fw-bold"><i class="fa-solid fa-square-check"></i></a>
                  </div>
                  <div className=''>
                    <select name="" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='rounded shadow bg-body rounded py-1 px-5'>
                <p className='fw-bolder text-end' style={{ color:" #6c757d" }}>Price: $150.00</p>
              </div>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col sm={12} md={6} lg={6} className="m-auto">
              <div className='d-flex justify-content-around rounded shadow p-4 mb-2 bg-body rounded'>
                <div className='border rounded'>
                  <img src={card1} width="100"/>
                </div>
                <div>
                  <h6 className='mb-2'>JACKET</h6>
                  <p className='mb-2'>Mens Winter Leathers Jackets</p>
                  <p className='fw-bolder' style={{ color:" #6c757d" }}>$150.00</p>
                </div>
                <div>
                  <div className=''>
                    <a href='#' style={{ color:"#6c757d" }} className="fs-5 fw-bold"><i class="fa-solid fa-trash"></i></a>
                  </div>
                  <div>
                    <a href='#' style={{ color:"#6c757d" }} className="fs-5 fw-bold"><i class="fa-solid fa-square-check"></i></a>
                  </div>
                  <div className=''>
                    <select name="" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='rounded shadow bg-body rounded py-1 px-5'>
                <p className='fw-bolder text-end' style={{ color:" #6c757d" }}>Price: $150.00</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6} className="m-auto">
              <div className='d-flex justify-content-between shadow py-4 px-5 bg-body'>
              <div>
                <p className='fw-bolder text-end' style={{ color:" #6c757d" }}>Total Price: $150.00</p>
              </div>
              <div className="">
                <Link className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to =""> PROCEED</Link>
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

export default MainAddToCard