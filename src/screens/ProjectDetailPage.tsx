import React, { useEffect } from 'react'
import PortfolioDetail from '../components/PortfolioDetail'
import Data from '../json/landingPage.json'
import { LandingPageData } from '../types/types'

export default function ProjectDetailPage() {
  const landingPageData: LandingPageData = Data as LandingPageData

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const id = '0'
  const detailData = landingPageData.portfolio.find((item) => item.id === id)

  return (
    <>
      <PortfolioDetail data={detailData ? [detailData] : null} />
    </>
  )
}
