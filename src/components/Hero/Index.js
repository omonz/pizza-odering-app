import React, { useState } from 'react'
import Sidebar from '../Sidebar/Index'
import Navbar from './../Navbar/index'
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroItems,
  HeroBtn,
} from './HeroElements'

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 Seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
