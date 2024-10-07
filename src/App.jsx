import './App.css'
import About from './components/About'
import Campus from './components/Campus'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Title from './components/Title'
import VideoPlayer from './components/VideoPlayer'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer' />
        <Programs />
        <About />
        <Title subtitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subtitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials />
        <Title subtitle='Contact US' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
