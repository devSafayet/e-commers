import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import icon1 from '../Category/images/icons/dress.svg';
import icon2 from '../Category/images/icons/coat.svg';
import icon3 from '../Category/images/icons/glasses.svg';
import icon4 from '../Category/images/icons/shorts.svg';
import MainTitle from '../Title/MainTitle';

export default function MainCategory() {
  return (
    <>
      <div className='py-4'>
        <Container>
          <Row>
              <Col sm={12} md={3} lg={3}>
                <div className='d-flex card_part border rounded p-3'>
                  <div className='align-middle p-2 me-2 border rounded' style={{background:"#FFFFFF"}}>
                  <img
                    className="card_img"
                    src={icon1}
                    alt="Category"
                    height="50"
                    width="50"
                  />
                  </div>
                  <div className='ms-1'>
                    <h5 className='fs-6 mb-4' style={{ color:"#333333" }}>DRESS & FROCK</h5>
                    <a href='#' style={{ color:"#c39f57" }}>Show All</a>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={3} lg={3}>
                <div className='d-flex card_part border rounded p-3'>
                  <div className='align-middle p-2 me-2 border rounded' style={{background:"#FFFFFF"}}>
                  <img
                    className="card_img "
                    src={icon2}
                    alt="Category"
                    height="50"
                    width="50"
                  />
                  </div>
                  <div className='ms-1'>
                    <h5 className='fs-6 mb-4' style={{ color:"#333333" }}>WINTER WEAR</h5>
                    <a href='#' style={{ color:"#c39f57" }}>Show All</a>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={3} lg={3}>
                <div className='d-flex card_part border rounded p-3'>
                  <div className='align-middle p-2 me-2 border rounded' style={{background:"#FFFFFF"}}>
                  <img
                    className="card_img "
                    src={icon3}
                    alt="Category"
                    height="50"
                    width="50"
                  />
                  </div>
                  <div className='ms-1'>
                    <h5 className='fs-6 mb-4' style={{ color:"#333333" }}>GLASSES & LENS</h5>
                    <a href='#' style={{ color:"#c39f57" }}>Show All</a>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={3} lg={3}>
                <div className='d-flex card_part border rounded p-3'>
                  <div className='align-middle p-2 me-2 border rounded' style={{background:"#FFFFFF"}}>
                  <img
                    className="card_img "
                    src={icon4}
                    alt="Category"
                    height="50"
                    width="50"
                  />
                  </div>
                  <div className='ms-1'>
                    <h5 className='fs-6 mb-4' style={{ color:"#333333" }}>SHORTS & JEANS</h5>
                    <a href='#' style={{ color:"#c39f57" }}>Show All</a>
                  </div>
                </div>
              </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
