import { useEffect } from 'react'

import HeroPortfolio from '../components/HeroPortfolio'
import Discuss from '../components/Discuss'
import AllPortfolio from '../components/AllPortfolio'

import Data from '../json/landingPage.json'
import { LandingPageData } from '../types/types'

interface PortfolioItem {
  id: number
  title: string
  type: string
  imageUrl: string
}

const ProjectPage = () => {
  // TypeScript will infer the type from the JSON import
  const landingPageData: LandingPageData = Data as LandingPageData

  // Perform type assertion here
  const portfolioItems: PortfolioItem[] = landingPageData.portfolio.map((item) => ({
    id: parseInt(item.id), // Assuming id is a string, convert it to number
    title: item.title,
    type: item.type,
    imageUrl: item.imageUrl
  }))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroPortfolio />
      <AllPortfolio data={portfolioItems} />
      <Discuss />
    </>
  )
}

export default ProjectPage
