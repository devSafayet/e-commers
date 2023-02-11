import React from 'react';
import '../Contact/css/style.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default function MainContact() {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <div className='Contact_section py-5 rounded' style={{ background:"#eef0f0" }}>
                <div className='Contact_text text-center'>
                  <h4 className='fw-bolder fs-4 mb-2' style={{ color:"#c39f57" }}>NEED HELP?</h4>
                  <h1 className='fw-bolder fs-1 mb-3' style={{ color:"#333333" }}>Contact With Us</h1>
                  <p className='fw-normal fs-6 mb-4' style={{ color:"#6c757d"}}>If you have any questions, just fill in the contact form, and we will answer you shortly.</p>
                </div>
                  <Form className=''>
                  <Form.Group className="mb-3 w-75 m-auto" controlId="formBasicPassword">
                      <Form.Label className='fw-normal fs-5'>Full Name:</Form.Label>
                      <Form.Control type="text" placeholder="Enter your Full Name"/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 m-auto" controlId="formBasicEmail">
                      <Form.Label className='fw-normal fs-5'>Email Address:</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email address" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 m-auto" controlId="formBasicPassword">
                      <Form.Label className='fw-normal fs-5'>Number:</Form.Label>
                      <Form.Control type="text" placeholder="Enter your phone number"/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 m-auto" controlId="formBasicPassword">
                      <Form.Label className='fw-normal fs-5'>Subject:</Form.Label>
                      <Form.Control type="text" placeholder="Enter your phone subject"/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 m-auto" controlId="exampleForm.ControlTextarea1">
                      <Form.Label className='fw-normal fs-5'>Message</Form.Label>
                      <Form.Control as="textarea" placeholder='Write your message here' rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 m-auto" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <div className='w-25 m-auto text-center'>
                      <Button className='contact_btn' type='submit' style={{ background:" #c39f57" }} >
                      Submit
                    </Button>
                    </div>
                  </Form>
                </div>
              </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
