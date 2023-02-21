import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import newproduct1 from '../NewProduct/images/products/jacket-1.jpg'
import newproduct2 from '../NewProduct/images/products/clothes-2.jpg'
import newproduct3 from '../NewProduct/images/products/clothes-3.jpg'
import newproduct4 from '../NewProduct/images/products/clothes-4.jpg'
import newproduct5 from '../NewProduct/images/products/shirt-1.jpg'
import newproduct6 from '../NewProduct/images/products/shirt-2.jpg'
import MainTitle from '../Title/MainTitle'
import '../NewProduct/css/style.css';
import { NavLink } from 'react-router-dom'

export default function MainNewProduct() {
  return (
    <>
      <div className='my-5'>
        <Container>
          <Col sm={12} md={12} lg={12}>
              <MainTitle ourTitle='New Products'/>
          </Col>
          <Row className=''>
            <Col sm={12} md={4} lg={4}>
              <div className='newproduct_item border rounded'>
                  <div className=''>
                  <img
                      className="d-block w-100"
                      src={newproduct1}
                      alt="First slide"
                    />
                  <div class="overly_newproduct">
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-heart fa-lg"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-eye"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-share-from-square"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-solid fa-cart-arrow-down"></i>
                        </a>
                    </div>
                  </div>
                </div>
                <div className='new_product_text py-3 ps-3'>
                  <h6 className='mb-2'>JACKET</h6>
                  <p className='mb-2'>Mens Winter Leathers Jackets</p>
                  <p className='mb-2 fs-4'>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    </p>
                    <div className='d-flex mb-2'>
                    <div className='me-5'>
                      <p className='fw-bolder' style={{ color:" #c39f57" }}>$150.00</p>
                    </div>
                    <div>
                      <del className='fw-normal' style={{ color:"#6c757d" }} >$200.00</del>
                    </div>
                    </div>
                    <div className='mt-4'>
                      <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                    </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className='newproduct_item border rounded'>
                  <div className=''>
                  <img
                      className="d-block w-100"
                      src={newproduct2}
                      alt="First slide"
                    />
                    <div class="overly_newproduct">
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-heart fa-lg"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-eye"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-share-from-square"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-solid fa-cart-arrow-down"></i>
                        </a>
                    </div>
                  </div>
                </div>
                <div className='new_product_text py-3 ps-3'>
                  <h6 className='mb-2'>JACKET</h6>
                  <p className='mb-2'>Mens Winter Leathers Jackets</p>
                  <p className='mb-2 fs-4'>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    </p>
                    <div className='d-flex mb-2'>
                    <div className='me-5'>
                      <p className='fw-bolder' style={{ color:" #c39f57" }}>$150.00</p>
                    </div>
                    <div>
                      <del className='fw-normal' style={{ color:"#6c757d" }} >$200.00</del>
                    </div>
                    </div>
                    <div className='mt-4'>
                      <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                    </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className='newproduct_item border rounded'>
                  <div className=''>
                  <img
                      className="d-block w-100"
                      src={newproduct3}
                      alt="First slide"
                    />
                    <div class="overly_newproduct">
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-heart fa-lg"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-eye"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-share-from-square"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-solid fa-cart-arrow-down"></i>
                        </a>
                    </div>
                  </div>
                </div>
                <div className='new_product_text py-3 ps-3'>
                  <h6 className='mb-2'>JACKET</h6>
                  <p className='mb-2'>Mens Winter Leathers Jackets</p>
                  <p className='mb-2 fs-4'>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    </p>
                    <div className='d-flex mb-2'>
                    <div className='me-5'>
                      <p className='fw-bolder' style={{ color:" #c39f57" }}>$150.00</p>
                    </div>
                    <div>
                      <del className='fw-normal' style={{ color:"#6c757d" }} >$200.00</del>
                    </div>
                    </div>
                    <div className='mt-4'>
                      <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='mt-4'>
          <Col sm={12} md={4} lg={4}>
              <div className='newproduct_item border rounded'>
                  <div className=''>
                  <img
                      className="d-block w-100"
                      src={newproduct4}
                      alt="First slide"
                    />
                    <div class="overly_newproduct">
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-heart fa-lg"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-eye"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-share-from-square"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-solid fa-cart-arrow-down"></i>
                        </a>
                    </div>
                  </div>
                </div>
                <div className='new_product_text py-3 ps-3'>
                  <h6 className='mb-2'>JACKET</h6>
                  <p className='mb-2'>Mens Winter Leathers Jackets</p>
                  <p className='mb-2 fs-4'>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    </p>
                    <div className='d-flex mb-2'>
                    <div className='me-5'>
                      <p className='fw-bolder' style={{ color:" #c39f57" }}>$150.00</p>
                    </div>
                    <div>
                      <del className='fw-normal' style={{ color:"#6c757d" }} >$200.00</del>
                    </div>
                    </div>
                    <div className='mt-4'>
                      <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                    </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className='newproduct_item border rounded'>
                  <div className=''>
                  <img
                      className="d-block w-100"
                      src={newproduct5}
                      alt="First slide"
                    />
                     <div class="overly_newproduct">
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-heart fa-lg"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-eye"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-share-from-square"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-solid fa-cart-arrow-down"></i>
                        </a>
                    </div>
                  </div>
                </div>
                <div className='new_product_text py-3 ps-3'>
                  <h6 className='mb-2'>JACKET</h6>
                  <p className='mb-2'>Mens Winter Leathers Jackets</p>
                  <p className='mb-2 fs-4'>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    </p>
                    <div className='d-flex mb-2'>
                    <div className='me-5'>
                      <p className='fw-bolder' style={{ color:" #c39f57" }}>$150.00</p>
                    </div>
                    <div>
                      <del className='fw-normal' style={{ color:"#6c757d" }} >$200.00</del>
                    </div>
                    </div>
                    <div className='mt-4'>
                      <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
                    </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className='newproduct_item border rounded'>
                  <div className=''>
                  <img
                      className="d-block w-100"
                      src={newproduct6}
                      alt="First slide"
                    />
                     <div class="overly_newproduct">
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-heart fa-lg"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-eye"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-regular fa-share-from-square"></i>
                        </a>
                    </div>
                    <div className='mb-4'>
                        <a href="#" className='rounded border p-2' style={{ color:"#6c757d" }}>
                          <i class="fa-solid fa-cart-arrow-down"></i>
                        </a>
                    </div>
                  </div>
                </div>
                <div className='new_product_text py-3 ps-3'>
                  <h6 className='mb-2'>JACKET</h6>
                  <p className='mb-2'>Mens Winter Leathers Jackets</p>
                  <p className='mb-2 fs-4'>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                      <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    </p>
                    <div className='d-flex mb-2'>
                    <div className='me-5'>
                      <p className='fw-bolder' style={{ color:" #c39f57" }}>$150.00</p>
                    </div>
                    <div>
                      <del className='fw-normal' style={{ color:"#6c757d" }} >$200.00</del>
                    </div>
                    </div>
                    <div className='mt-4'>
                      <NavLink className="fw-bold rounded p-2 mb-4" style={{ background:"#c39f57", color:"#fff" }} to ="/add_card"> ADD TO CART</NavLink>
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
