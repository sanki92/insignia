
import './App.css';
import About from './components/About';
import Downloadapp from './components/Downloadapp';
import Features from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <section>
      <Navbar/>
      <Section1/>
      <About/>
      <Features/>
      <Downloadapp/>
      <Testimonials/>
      <Footer/>
    </section>
  );
}

export default App;
