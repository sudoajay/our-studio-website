interface PreloaderProps {
  margin?: string
}

const Preloader = ({ margin }: PreloaderProps) => (
  <div className={`flex justify-center items-center flex-col ${margin || 'my-24 sm:my-36'}`}>
    <div
      className="animate-spin rounded-full border-8 border-t-blue-500 border-b-blue-500
                border-gray-200 h-12 w-12 mb-8 mx-auto"
    />
  </div>
)

export default Preloader
