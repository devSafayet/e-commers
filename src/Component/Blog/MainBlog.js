import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../Blog/images/blog-1.jpg';
import img2 from '../Blog/images/blog-2.jpg';
import img3 from '../Blog/images/blog-3.jpg';
import img4 from '../Blog/images/blog-4.jpg';
import '../Blog/css/style.css'

export default function MainBlog() {
  return (
    <>
      <div className='my-5 blog_part'>
        <Container>
          <Row>
            <Col sm={12} md={3} lg={3}>
              <div className='blog_item border rounded'>
               <img src={img2}
                className="rounded"
                width="100%"
                />
                <div className='p-3 blog_text'>
                  <a href='#' className='fs-6 mb-3' style={{ color:"#c39f57" }}>Fashion</a>
                  <h6 className='fs-6 fw-semibold mb-3' style={{ color:"#333333" }}>Clothes Retail KPIs 2021 Guide for Clothes Executives.</h6>
                  <p className='fs-6' style={{ color:"#6c757d" }}>By Mr Admin / Apr 06, 2022</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className='blog_item border rounded'>
               <img src={img3}
                className="rounded"
                width="100%"
                />
                <div className='p-3 blog_text'>
                  <a href='#' className='fs-6 mb-3' style={{ color:"#c39f57" }}>Clothes</a>
                  <h6 className='fs-6 fw-semibold mb-3' style={{ color:"#333333" }}>Curbside fashion Trends: How to Win the Pickup Battle.</h6>
                  <p className='fs-6' style={{ color:"#6c757d" }}>By Mr Robin / Jan 18, 2022</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className='blog_item border rounded'>
               <img src={img1}
                className="rounded"
                width="100%"
                />
                <div className='p-3 blog_text'>
                  <a href='#' className='fs-6 mb-3' style={{ color:"#c39f57" }}>Shoes</a>
                  <h6 className='fs-6 fw-semibold mb-3' style={{ color:"#333333" }}>EBT vendors: Claim Your Share of SNAP Online Revenue.</h6>
                  <p className='fs-6' style={{ color:"#6c757d" }}>By Mr Selsa / Feb 10, 2022</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className='blog_item border rounded'>
               <img src={img4}
                className="rounded"
                width="100%"
                />
                <div className='p-3 blog_text'>
                  <a href='#' className='fs-6 mb-3' style={{ color:"#c39f57" }}>Electronics</a>
                  <h6 className='fs-6 fw-semibold mb-3' style={{ color:"#333333" }}>Curbside fashion Trends: How to Win the Pickup Battle.</h6>
                  <p className='fs-6' style={{ color:"#6c757d" }}>By Mr Pawar / Mar 15, 2022</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
