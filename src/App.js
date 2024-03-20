import logo from './logo.svg';
import './App.css';
import HeroComponent from './component/hero';
import Hero1 from './component/hero1';
import Toe from './component/toe';
import Gallery from './component/gallery';
import Io from './component/io';
import Contact from './component/contact';
import Lines from './component/lines';

function App() {
  return (
    <div className="App">
      <HeroComponent/>
      <Hero1/>
      <Toe/>
      <Io/>
      <Gallery/>
      <Contact/>
      <Lines/>
    </div>
  );
}

export default App;
