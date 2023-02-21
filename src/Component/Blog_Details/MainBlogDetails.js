import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import blogdata from '../../data/blogdata/main_blogdata';
import MainFooter from '../Footer/MainFooter';
import MainNavber from '../Navber/MainNavber';
import MainTitle from '../Title/MainTitle';
import { Link } from 'react-router-dom';
import blog1 from '../Blog_Details/images/blog-1.jpg'
import blogdetails1 from '../Blog_Details/images/blog-1.jpg'
import blogdetails2 from '../Blog_Details/images/blog-2.jpg'
import blogdetails3 from '../Blog_Details/images/blog-3.jpg'
import blogdetails4 from '../Blog_Details/images/blog-4.jpg'


function MainBlogDetails() {

  const {id} = useParams();

  let n_data = blogdata.filter((cur_post) => {
    return cur_post.id == id;
  });

  console.log(n_data[0].item);

  
  return (
    <>
    <MainNavber/>
        <div>
          <Container>
            <Row>
              <Col sm={12} md={8} lg={8}>
                <div className='Blog_details'>
                  <img src={blog1} width="100%"/>
                </div>
                <div className='blog_text my-3'>
                  <a href='#' className='fs-3 mb-3' style={{ color:"#c39f57" }}>Fashion</a>
                  <h6 className='fs-2 fw-semibold mb-3' style={{ color:"#333333" }}>Clothes Retail KPIs 2021 Guide for Clothes Executives.</h6>
                  <p className='fs-6 mb-3' style={{ color:"#6c757d" }}>By Mr Admin / Apr 06, 2022</p>
                  <p className='fs-6 mb-3 text-justify' style={{ color:"#6c757d" }}>Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus, vel auctor tortor iaculis. Vivamus aliquet ipsum purus, vel auctor felis interdum at. Praesent quis fringilla justo. Ut non dui at mi laoreet gravida vitae eu elit. Aliquam in elit eget purus scelerisque efficitur vel ac sem. Etiam ante magna, vehicula et vulputate in, aliquam sit amet metus. Donec mauris eros, aliquet in nibh quis, semper suscipit nunc. Phasellus ornare nibh vitae dapibus tempor.</p>
                  <p className='fs-6 mb-5 text-justify' style={{ color:"#6c757d" }}>Donec feugiat tincidunt eros, ac aliquam purus egestas condimentum. Curabitur imperdiet at leo pellentesque mattis. Fusce a dignissim est. In enim nisi, hendrerit placerat nunc quis, porttitor lobortis neque. Donec nec nulla arcu. Proin felis augue, volutpat ac nunc a, semper egestas dolor. Sed varius magna non lacus viverra, at dapibus sem interdum. Proin urna nibh, maximus nec interdum ut, hendrerit et arcu. Nunc venenatis eget nulla at tempor. Duis sed tellus placerat, bibendum felis quis, efficitur nisi. Morbi porta placerat urna et pharetra. Proin condimentum, libero ac feugiat efficitur, est orci consectetur sapien, a pretium leo leo in elit. Quisque fringilla finibus arcu, pretium posuere urna posuere sit amet. Nullam quis sapien a augue aliquet accumsan eget eu risus. Ut at mi sed velit condimentum porta. Proin vestibulum congue ullamcorper.</p>
                </div>
                <h5 className='fs-2 fw-semibold mb-3 border-top py-4' style={{ color:"#333333" }}>3 THOUGHTS ON “THE BEST PRODUCTS THAT SHAPE FASHION”</h5>
                <div className='blog_comment d-flex'>
                  <div>
                    <img src={blog1} width="50%" className=''/>
                  </div>
                  <div>
                    <h5 className='fs-3 mb-3' style={{ color:"#333333" }}>Elliot Alderson</h5>
                    <p className='fs-6 mb-3' style={{ color:"#6c757d" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <a href='#'>Reply</a>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
              <div className='Blog_details_sidebar'>
                <InputGroup className="">
                  <Form.Control
                    placeholder="Enter your product name.."
                    type="search"
                    aria-describedby="basic-addon2"
                    className='search_bar'
                    style={{borderRight: 0}}
                  />

                  <Button className='search_btn btn btn-outline-secondary' type='submit' style={{ color:"#fff", background:"#c39f57"}} >
                      <i class="fa fa-search" aria-hidden="true"></i>
                  </Button>
                </InputGroup>
                <Col sm={12} md={12} lg={12}>
                  <MainTitle ourTitle="Populer Post" />
                </Col>
                <Row className='blog_post mb-3'>
                  <Col sm={4} md={4} lg={4}>
                    <div>
                      <img src={blogdetails1} width="100%" height="70"/> 
                    </div>
                  </Col>
                  <Col sm={8} md={8} lg={8}>
                    <div>
                      <p className='fs-6 mb-1' style={{ color:"#6c757d" }}>By Mr Admin / Apr 06, 2022</p>
                      <h6 className='fs-6 fw-semibold mb-1' style={{ color:"#333333" }}>Clothes Retail KPIs 2021 Guide for Clothes Executives</h6>
                    </div>
                  </Col>
                </Row>
                <Row className='blog_post mb-3'>
                  <Col sm={4} md={4} lg={4}>
                    <div>
                      <img src={blogdetails2} width="100%" height="70"/> 
                    </div>
                  </Col>
                  <Col sm={8} md={8} lg={8}>
                    <div>
                      <p className='fs-6 mb-1' style={{ color:"#6c757d" }}>By Mr Admin / Apr 06, 2022</p>
                      <h6 className='fs-6 fw-semibold mb-1' style={{ color:"#333333" }}>Clothes Retail KPIs 2021 Guide for Clothes Executives</h6>
                    </div>
                  </Col>
                </Row>
                <Row className='blog_post mb-3'>
                  <Col sm={6} md={4} lg={4}>
                    <div>
                      <img src={blogdetails3} width="100%" height="70"/> 
                    </div>
                  </Col>
                  <Col sm={6} md={8} lg={8}>
                    <div>
                      <p className='fs-6 mb-1' style={{ color:"#6c757d" }}>By Mr Admin / Apr 06, 2022</p>
                      <h6 className='fs-6 fw-semibold mb-1' style={{ color:"#333333" }}>Clothes Retail KPIs 2021 Guide for Clothes Executives</h6>
                    </div>
                  </Col>
                </Row>
                <Row className='blog_post mb-3'>
                  <Col sm={6} md={4} lg={4}>
                    <div>
                      <img src={blogdetails4} width="100%" height="70"/> 
                    </div>
                  </Col>
                  <Col sm={6} md={8} lg={8}>
                    <div>
                      <p className='fs-6 mb-1' style={{ color:"#6c757d" }}>By Mr Admin / Apr 06, 2022</p>
                      <h6 className='fs-6 fw-semibold mb-1' style={{ color:"#333333" }}>Clothes Retail KPIs 2021 Guide for Clothes Executives</h6>
                    </div>
                  </Col>
                </Row>
                <Col sm={12} md={12} lg={12}>
                  <MainTitle ourTitle="Categories" />
                </Col>
                <div className='blog_Sidebar_Category'>
                  <div className='d-flex align-item-center mb-4'>
                    <div className=''>
                      <a href='#'><i class="fa-solid fa-location-dot fs-4 me-2" style={{ color:"#6c757d" }}></i></a>
                    </div>
                    <div>
                      <a style={{ color:"#6c757d" }}>Fashion</a>
                    </div>
                  </div>
                  <div className='d-flex align-item-center mb-4'>
                    <div className=''>
                      <a href='#'><i class="fa-solid fa-location-dot fs-4 me-2" style={{ color:"#6c757d" }}></i></a>
                    </div>
                    <div>
                      <a style={{ color:"#6c757d" }}>Fashion</a>
                    </div>
                  </div>
                  <div className='d-flex align-item-center mb-4'>
                    <div className=''>
                      <a href='#'><i class="fa-solid fa-location-dot fs-4 me-2" style={{ color:"#6c757d" }}></i></a>
                    </div>
                    <div>
                      <a style={{ color:"#6c757d" }}>Fashion</a>
                    </div>
                  </div>
                  <div className='d-flex align-item-center mb-4'>
                    <div className=''>
                      <a href='#'><i class="fa-solid fa-location-dot fs-4 me-2" style={{ color:"#6c757d" }}></i></a>
                    </div>
                    <div>
                      <a style={{ color:"#6c757d" }}>Fashion</a>
                    </div>
                  </div>
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

export default MainBlogDetails