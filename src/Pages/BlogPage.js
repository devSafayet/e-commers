import React from 'react'
import MainBlog from '../Component/Blog/MainBlog'
import MainFooter from '../Component/Footer/MainFooter'
import MainNavber from '../Component/Navber/MainNavber'
import MainParallax from '../Component/Parallax/MainParallax'

export default function BlogPage() {
  return (
    <>
    <MainNavber/>
    <MainParallax/>
    <MainBlog/>
    <MainFooter/>
    </>
  )
}
