import HeroSection from './HeroSection'
import Footer from './Footer'
import Workflow from './Workflow'
import FeaturesSection from './FeaturesSection'

import NavigationBar from './NavigationBar'
const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturesSection />
        <Workflow />
      </div>
      <Footer />
    </div>
  )
}

export default Home
