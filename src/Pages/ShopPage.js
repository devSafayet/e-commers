import React from 'react'
import MainFooter from '../Component/Footer/MainFooter'
import MainNavber from '../Component/Navber/MainNavber'
import MainShop from '../Component/Shop/MainShop'

export default function ShopPage() {
  return (
    <>
      <MainNavber/>
      {/* <ShopPage/> */}
      <MainShop/>
      <MainFooter/>
    </>
  )
}
