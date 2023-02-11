import React from 'react'
import MainContact from '../Component/Contact/MainContact'
import MainFooter from '../Component/Footer/MainFooter'
import MainNavber from '../Component/Navber/MainNavber'
import MainParallax from '../Component/Parallax/MainParallax'

export default function ContactPage() {
  return (
    <>
      <MainNavber/>
      <MainParallax/>
      <MainContact/>
      <MainFooter/>
      
    </>
  )
}
