import { useEffect } from 'react'
import HeroTeam from '../components/HeroTeam'
import AllTeam from '../components/AllTeam'
import Data from '../json/landingPage.json'
import { LandingPageData } from '../types/types'

const TeamPage = () => {
  const landingPageData: LandingPageData = Data as LandingPageData

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroTeam />
      <AllTeam data={landingPageData.team} />
    </>
  )
}

export default TeamPage
