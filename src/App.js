// import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './Components/Nav';
import './App.css';
import Client from './Components/Client';
// import Whyus from './Components/Whyus';
import Banner from './Components/Banner';
// import Skills from './Components/Skills';
import Berita from './Components/Berita';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import Pricing from './Components/Pricing';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import Tentang from './Components/tentang';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    
    <Nav />
      <Banner/>
     {/* <Client /> */}
     {/* <About /> */}
     <Services />
     {/* <Cta /> */}
     <Portfolio />

     {/* <Pricing /> */}
     {/* <Berita /> */}
     <Tentang/>
     <Team />
     <Berita />
    <Contact />
     <Footer/>
    </div>
  );
}

export default App;
