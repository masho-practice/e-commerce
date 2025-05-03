import React from 'react'
import Hero from './Hero'
import PopularProduct from './PopularProduct'
import ExclusiveOffer from './ExclusiveOffer'
import NewCollections from './NewCollections'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <PopularProduct />
      <ExclusiveOffer />
      <NewCollections />
      <Contact />
    </div>
  )
}

export default Home