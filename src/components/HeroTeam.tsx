import { Fade } from 'react-awesome-reveal'
import Team from '../assets/images/team.png'

const HeroTeam = () => {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <Fade direction="up" triggerOnce={true}>
        <div className="w-full sm:w-3/4 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">Our Team</h1>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            Our team is full of passionate people and ready to make your dream software come true.
          </p>
        </div>
        <div className="w-full  sm:pr-12">
          <img src={Team} alt="Hero" />
        </div>
      </Fade>
    </section>
  )
}

export default HeroTeam
