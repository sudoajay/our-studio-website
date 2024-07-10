import Button from '../components/common/Button'
import NotFoundImage from '../assets/images/NotFound.png'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="flex justify-center">
        <img src={NotFoundImage} alt="Not Found" className="sm:w-3/4 xl:w-5/12" />
      </div>
      <h1 className="text-2xl mt-5">You weren't supposed to find this place...</h1>
      <div className="mt-5">
        <Button
          href="/"
          type="link"
          className="px-5 py-2 bg-gray-600 text-white rounded hover:bg-gray-900 transition duration-500"
        >
          Go Back
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
