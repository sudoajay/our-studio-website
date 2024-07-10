// src/screens/LandingPage.tsx
import React, { useEffect } from 'react'

import Hero from '../components/Hero'
import Service from '../components/Service'
import Portfolio from '../components/Portfolio'
import Advantage from '../components/Advantage'
import Testimonial from '../components/Testimonial'
import Discuss from '../components/Discuss'

import Data from '../json/landingPage.json'
import { LandingPageData } from '../types/types'

const LandingPage: React.FC = () => {
  // TypeScript will infer the type from the JSON import
  const landingPageData: LandingPageData = Data as LandingPageData

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) // Empty dependency array means this effect runs only once after initial render

  return (
    <>
      <Hero />
      <Service data={landingPageData.service} />
      <Portfolio data={landingPageData.portfolio} />
      <Advantage data={landingPageData.advantage} />
      <Testimonial data={landingPageData.testimonial} />
      <Discuss />
    </>
  )
}

export default LandingPage
