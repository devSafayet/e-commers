import React from 'react'
import MainAbout from '../Component/About/MainAbout'
import MainBlog from '../Component/Blog/MainBlog'
import MainCategory from '../Component/Category/MainCategory'
import MainDealDay from '../Component/DealDay/MainDealDay'
import MainFeatures from '../Component/Features/MainFeatures'
import MainFooter from '../Component/Footer/MainFooter'
import MainNavber from '../Component/Navber/MainNavber'
import MainNewProduct from '../Component/NewProduct/MainNewProduct'
import MainSlider from '../Component/Slider/MainSlider'
import MainTestimonial from '../Component/Testimonial/MainTestimonial'
import MainForm from '../Component/Form/MainForm'
import MainParallax from '../Component/Parallax/MainParallax'

export default function HomePage() {
  return (
    <>
      <MainNavber/>
      <MainSlider/>
      <MainCategory/>
      <MainAbout/>
      <MainDealDay/>
      <MainNewProduct/>
      <MainParallax/>
      <MainFeatures/>
      <MainTestimonial/>
      <MainBlog/>
      <MainForm/>
      <MainFooter/>
    </>
  )
}
