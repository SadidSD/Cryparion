import React, { useEffect, useRef, useState } from 'react';
import '../Components/Navbar.css';
import { motion } from 'framer-motion';

function Navbar({ propNavAnimation }) {
  const [navAnimationComplete, setNavAnimationComplete] = useState(false);
  const navBar = useRef(null);

  useEffect(() => {
    if (navAnimationComplete && navBar.current) {
      navBar.current.style.position = 'fixed';
    }
  }, [navAnimationComplete, navBar]);

  return (
    <>
      
        <motion.div
          ref={navBar}
          className="navbar"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 500, damping: 60 }}
          onAnimationComplete={() => setNavAnimationComplete(true)}
        >
          <div className="leftside"></div>
          <div className="rightside">
            <p className="projects">Projects</p>
            <p className="about">About Me</p>
            <p className="contact">Contact</p>
          </div>
        </motion.div>
      
    </>
  );
}

export default Navbar;