import logo from './logo.svg';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    Aos.init({duration: 2000});

  }, [])
  return (
    <div className="App">
     <h1>pricing</h1>
     <div className="grids">
     <div className="boxes">1</div>
     <div className="boxes">2</div>
     <div data-aos="fade-up" className="boxes">3</div>
     <div data-aos="zoom-in" className="boxes">4</div>
     <div data-aos="flip-up" className="boxes">5</div>
     </div>
    </div>
  );
}

export default App;
