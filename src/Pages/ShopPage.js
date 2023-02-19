import React from 'react'
import MainFooter from '../Component/Footer/MainFooter'
import MainNavber from '../Component/Navber/MainNavber'
import MainNewProduct from '../Component/NewProduct/MainNewProduct'
import MainShop from '../Component/Shop/MainShop'

export default function ShopPage() {
  return (
    <>
      <MainNavber/>
      <MainShop/>
      <MainNewProduct/>
      <MainFooter/>
    </>
  )
}
