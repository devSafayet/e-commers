import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../Blog/css/style.css';
import blogdata from '../../data/blogdata/main_blogdata';
import { NavLink } from 'react-router-dom';

export default function MainBlog() {
  
  const BlogCard = () => {
    return blogdata.map( (item) => {
      return(
        <Col sm={12} md={3} lg={3}>
          <div className='blog_item border rounded'>
          <img src={item.image}
            className="rounded"
            width="100%"
            />
            <div className='p-3 blog_text'>
              <a href='#' className='fs-6 mb-3' style={{ color:"#c39f57" }}>{item.categories}</a>
              <h6 className='fs-6 fw-semibold mb-3' style={{ color:"#333333" }}>{item.title}</h6>
              <p className='fs-6 mb-3' style={{ color:"#6c757d" }}>{item.author} / {item.date}</p>
              <NavLink className="fw-bold rounded p-2 mb-3" style={{ background:"#c39f57", color:"#fff" }} to ={`/blog-details/${item.id}`}>Detailes</NavLink>
            </div>
          </div>
        </Col>
      )
    })
  }

  return (
    <>
      <div className='my-5 blog_part'>
        <Container>
          <Row>
            <BlogCard/>
          </Row>
        </Container>
      </div>
    </>
  )
}
