import { Fade } from 'react-awesome-reveal'
import heroPortfolio from '../assets/images/portfolioHero.png'

const HeroPortfolio = () => {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <Fade direction="up" triggerOnce={true}>
        <div className="w-full sm:w-4/6 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">Portfolio</h1>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            As a Software House that designs and develops websites, mobile apps, and UI/UX design,
            we have been trusted by our clients from all around the world.
          </p>
        </div>
        <div className="w-full ">
          <img src={heroPortfolio} alt="Hero" />
        </div>
      </Fade>
    </section>
  )
}

export default HeroPortfolio
