import HeroSection from './HeroSection'
import NavigationBar from './NavigationBar'
const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
    </div>
  )
}

export default Home
