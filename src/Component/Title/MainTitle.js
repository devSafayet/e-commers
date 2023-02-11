import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function MainTitle(props) {
  return (
    <>
      <div className='py-5'>
        <Container>
          <Row>
            <div className='border-bottom'>
              <h2 className='pb-3 fs-4 fw-semibold' style={{ color:"#333333" }}>{props.ourTitle}</h2>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}
