import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import MainFooter from '../Footer/MainFooter'
import MainNavber from '../Navber/MainNavber'
import MainParallax from '../Parallax/MainParallax'
import MainTitle from '../Title/MainTitle'
import { Link, NavLink } from 'react-router-dom'

function MainWishList() {
  return (
    <>
    <MainNavber/>
    <MainParallax/>
      <div>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className='wishlist_item pb-5'>
                <Col sm={12} md={12} lg={12}>
                    <MainTitle ourTitle='Wishlish'/>
                </Col>
                <p className='fs-5 fw-normal mb-5' style={{ color:"#6c757d" }}>Your Wishlist is currently empty.</p>
                <NavLink className="fw-bold rounded p-2 mb-3" style={{ background:"#c39f57", color:"#fff" }} to ="/shop">RETURN TO SHOP</NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <MainFooter/>
    </>
  )
}

export default MainWishList