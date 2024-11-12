import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"Vegitables"} heading={"Top's vegitable"}/>
      <HorizontalCardProduct category={"Fruits"} heading={"Popular's Fruit"}/>
      <VerticalCardProduct category={"Vegitables"} heading={"Vegitable"}/>
      <VerticalCardProduct category={"Fruits"} heading={"Fruit"}/>
    </div>
  )
}

export default Home