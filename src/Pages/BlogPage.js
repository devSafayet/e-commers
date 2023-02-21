import React from 'react'
import MainBlog from '../Component/Blog/MainBlog'
import MainBlogMoreText from '../Component/Blog_More_text/MainBlogMoreText'
import MainFooter from '../Component/Footer/MainFooter'
import MainNavber from '../Component/Navber/MainNavber'

export default function BlogPage() {
  return (
    <>
    <MainNavber/>
    <MainBlogMoreText/>
    <MainBlog/>
    <MainFooter/>
    </>
  )
}
