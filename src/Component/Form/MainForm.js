import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../Form/css/style.css';

export default function MainForm() {
  return (
    <>
      <div className='py-5' style={{ background:"#808080" }}>
        <Container>
          <Row>
            <Col sm={12}>
              <div className='text-center'>
                <h1 className='fw-bold'style={{ color:"#fff" }}>BE THE FIRST</h1>
                <p className='py-3 text-wrap w-25 m-auto' style={{ color:"#C39F57" }}>New arrivals. Exclusive previews. First access to sales. Sign
                up to stay in the know.</p>
                <div className='my-3'>
                <Form className='d-flex justify-content-center'>
                  <Form.Group className="w-50" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Button className='form_btn ms-3' type='submit' style={{ background:" #c39f57" }} >
                     Submit
                  </Button>
                </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
