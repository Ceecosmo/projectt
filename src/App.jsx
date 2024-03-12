
import React, { useEffect } from 'react';
import NAV from './components/Headers'
import HOME from './components/HomePage'
import SERVICE from './components/Service'
import TRACKING from './components/Tracking'
import CONTACT from './components/Contact'
import FOOTER from './components/Footer'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      duration: 3000, once: false, // Whether animation should happen only once while scrolling down
    });
  }, []); // Ensure this useEffect runs only once after component mount
 
  return (
    <>
      <NAV>
      </NAV>
      
      
     
      <Router>
      <Routes>
     
      <Route exact path='/' element={<HOME/>}/>
      <Route exact path='/Service' element={<SERVICE/>}/>
      <Route exact path='/Tracking' element={<TRACKING/>}/>
      <Route exact path='/Contact' element={<CONTACT/>}/>
      
     
     
      </Routes>
      </Router>


      <FOOTER>
    </FOOTER>
      
    </>
  )
}



export default App



