
import './App.css';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import React, { useEffect, useState} from "react";
import { motion } from 'framer-motion';



function App() {
const [startAnimation, setStartAnimation] = useState(false);
 useEffect(() => {
    document.body.style.overflowY = startAnimation ? "auto" : "hidden";
    return () => {
      document.body.style.overflowY = "auto"; 
    };
  }, [startAnimation]);


  return (
    <div className='appback'> 
      <motion.div
        className="starttxt"
        animate={{ opacity: 0 }}
        transition={{ delay: 2, duration: 1 }}
        onAnimationComplete={() => setStartAnimation(true)}
        
      >
        <p className="fitsttxt">
          PS C:\Users\Sadid\Desktop\Cryparion\portfolio&gt;
        </p>
        <p className="lasttxt">npm start |</p>
      </motion.div>
      {startAnimation && (
  <>
    <Navbar  />
    <Home  />
  </>
)}
     

    </div>
  );
}

export default App;
