import React from 'react'
import { Fade } from 'react-awesome-reveal'
import NotFound from '../assets/images/NotFound.png'
import Button from '../components/common/Button'

interface Project {
  id: string
  title: string
  imageUrl: string
  type: string
  responsibility: string[]
  credit: string
}

interface PortfolioDetailProps {
  data: Project[] | null
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <section className="container mx-auto">
        <Fade direction="up" triggerOnce={true}>
          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex justify-center">
              <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12 mt-5" />
            </div>
            <h1 className="text-theme-blue text-2xl text-center mt-5">Project Not Found</h1>
            <div className="flex justify-center mt-5">
              <Button
                href="/project"
                type="link"
                className="w-40 h-10 px-5 bg-theme-blue text-white rounded-full transform transition duration-500 hover:bg-gray-900"
              >
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    )
  }

  return (
    <section className="container mx-auto">
      <Fade direction="up" triggerOnce={true}>
        <Button
          type="link"
          href="/project"
          className="w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline"
        >
          <svg
            className="w-5 h-5 text-gray-400 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          See All Projects
        </Button>
      </Fade>

      {data.map((item: Project, index: number) => (
        <div className="flex flex-col mt-8" key={index}>
          <Fade direction="up" triggerOnce={true}>
            <h1 className="text-5xl text-theme-blue text-center font-bold">{item.title}</h1>
            <p className="font-light text-xl text-gray-400 text-center mb-10">{item.type}</p>
          </Fade>

          <Fade direction="up" triggerOnce={true} delay={300}>
            <div className="flex justify-center xl:mb-6">
              <img src={`../${item.imageUrl}`} alt="Project" className="w-4/5 sm:w-4/6" />
            </div>
          </Fade>

          <Fade direction="up" triggerOnce={true} delay={300}>
            <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
              <h1 className="text-3xl text-theme-blue font-bold mb-3">Project Detail</h1>
              <p className="font-light text-lg text-gray-400 text-justify">{item.imageUrl}</p>
            </div>

            <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
              <h1 className="text-3xl text-theme-blue font-bold mb-5">Project Responsibilities</h1>
              <div className="flex flex-wrap gap-4">
                {item.responsibility.map((responsibility: string, idx: number) => (
                  <div
                    key={idx}
                    className="px-6 py-3 text-theme-purple bg-opacity-20 border border-theme-purple rounded-full shadow-lg"
                  >
                    {responsibility}
                  </div>
                ))}
              </div>
            </div>

            <p className="font-light italic text-gray-400 mt-16 mx-8 sm:mx-16 xl:mx-28">
              * This project is just an example. <br />
              Original project :{' '}
              <Button type="link" href={item.credit} target="_blank" className="text-theme-purple">
                {item.credit}
              </Button>
            </p>
          </Fade>
        </div>
      ))}
    </section>
  )
}

export default PortfolioDetail
