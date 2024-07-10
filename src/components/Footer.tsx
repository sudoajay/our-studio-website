import BrandIcon from '../components/BrandIcon'
import Button from '../components/common/Button'

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          {/* Left Column */}
          <div className="w-full sm:w-1/3 flex flex-col ml-16 sm:ml-0 sm:mr-8">
            <BrandIcon />
            <p className="text-lg text-gray-400 font-light mt-4">
              Growing Your Business
              <br />
              Is Our Calling
            </p>
          </div>

          {/* Middle Column */}
          <div className="w-full sm:w-1/3 mt-8 sm:mt-0 ml-16 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Office</h1>
            <p className="text-lg text-gray-400 font-light">rac.hafidz@gmail.com</p>
            <p className="text-lg text-gray-400 font-light">Klaten, Central Java, Indonesia</p>
          </div>

          {/* Right Column */}
          <div className="w-full sm:w-1/3 mt-8 sm:mt-0 ml-16 sm:ml-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Social</h1>
            <div className="flex flex-col space-y-4">
              <Button
                href="https://www.instagram.com/racmathafidz/"
                type="link"
                target="_blank"
                className="text-lg text-gray-400 font-light hover:underline"
                isExternal
              >
                Instagram
              </Button>
              <Button
                href="https://www.linkedin.com/in/racmat-hafidz-89982a156/"
                type="link"
                target="_blank"
                className="text-lg text-gray-400 font-light hover:underline"
                isExternal
              >
                LinkedIn
              </Button>
              <Button
                href="https://github.com/racmathafidz"
                type="link"
                target="_blank"
                className="text-lg text-gray-400 font-light hover:underline"
                isExternal
              >
                Github
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2021 - All rights reserved - Racxstudio
          </p>
          <div className="flex items-center mt-2">
            <p className="text-lg text-gray-400 font-light">Made with &#x2764; by&nbsp;</p>
            <Button
              href="https://github.com/racmathafidz"
              type="link"
              target="_blank"
              className="text-lg text-theme-purple font-light"
              isExternal
            >
              Racmat Hafidz Fadli
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
