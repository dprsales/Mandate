
import AboutSection from './AboutSection'
import ComprehensiveServices from './ComprehensiveServices'
import ContactSection from './ContactSection'
import DeveloperChallenge from './DeveloperChallenge'
import HeroSection from './HeroSection'
import Mission from './Mission'
import SalesCTA from './SalesCTA'
import ServicesSection from './ServicesSection'
import StrategicAlliances from './StrategicAlliances'
import WhyDevelopers from './WhyDeveloper'

const index = () => {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <Mission/>
        <DeveloperChallenge/>
        <StrategicAlliances/>
        <ServicesSection/>
        <ComprehensiveServices/>
        <WhyDevelopers/>
        <SalesCTA/>
        <ContactSection/>
    </div>
  )
}

export default index