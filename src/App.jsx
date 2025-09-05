
import './App.css'
import About from './Facto/About'
import Contact from './Facto/Contact'
import Footer from './Facto/Footer'
import Hero from './Facto/Hero'
import HowWorks from './Facto/HowWorks'
import Navbar from './Facto/Navbar'
import PricingSection from './Facto/PricingSection'
import Review from './Facto/Reviews'
import Trusted from './Facto/Trusted'
import Unlock from './Facto/Unlock'
import WhyDifferent from './Facto/WhyDifferent'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Trusted></Trusted>
    <About></About>
    <HowWorks></HowWorks>
    <WhyDifferent></WhyDifferent>
    <Review></Review>
    <PricingSection></PricingSection>
    <Contact></Contact>
    <Unlock></Unlock>
    <Footer></Footer>
    </>
  )
}

export default App
