import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from './components/Hero/Index'
import Products from './components/Products/Index'
import { GlobalStyle } from './glabalStyle'
import { productsData, productsDataTwo } from './components/Products/Data'
import Features from './components/Features/Index'
import Footer from './components/Footer/Index'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <HeroSection />
      <Products heading='Choose your favorite' data={productsData} />
      <Features />
      <Products heading='Sweet Potatoes' data={productsDataTwo} />
      <Footer />
    </Router>
  )
}

export default App
