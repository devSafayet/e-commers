import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../Slider/images/sliders/slider-1.jpg';
import slider2 from '../Slider/images/sliders/slider-2.webp';
import slider3 from '../Slider/images/sliders/slider-3.jpg';

export default function MainSlider() {
  return (
    <>
      <div className=''>
        <Container>
          <Row>
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider2}
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider3}
                  alt="Third slide"
                />

              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    </>
  )
}
