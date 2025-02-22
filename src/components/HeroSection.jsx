import video1 from "../assets/HeroSection_video1.mp4"
import video2 from "../assets/HeroSection_video2.mp4"

// const video1 = "/home/user/Xecron-Technologies-Website/src/assets/HeroSection_video1.mp4"
const image  = "../assets/xecron-logo.png"
const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Welcome To&nbsp;
           <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
           Xecron Technologies
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Innovating the Future with Cutting-Edge Solutions. Explore our advanced tech services today!
        </p>
      </div>

      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">Start for Free</a>
        <a href="#" className="py-3 px-4 mx-3 border rounded-md">Documentation</a>
      </div>

      <div className="flex mt-10 justify-center">
{/* 
        <img src={image}className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"></img> */}
        <video src={video1} autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
          <source type="video/mp4" />
          Your Bowser does not support the video tag.
        </video>
        <video src={video2} autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
          <source type="video/mp4" />
          Your Bowser does not support the video tag.
        </video>
      </div>

    </>    
  )
}

export default HeroSection
