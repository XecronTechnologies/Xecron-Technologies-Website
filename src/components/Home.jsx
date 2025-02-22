import HeroSection from './HeroSection'
import Footer from './Footer'
import FeaturesSection from './FeaturesSection'

import NavigationBar from './NavigationBar'
const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  )
}

export default Home
