import React, { useEffect, useState,useRef, use } from "react";
import "../styles/Home.css";
import { motion, spring, useScroll, useTransform } from "framer-motion";
import logo from '../images/cryparion.png'
import myPhoto from '../images/myphoto.jpg'
import react from '../images/React-Logo.png'
import html from '../images/html-5.png'
import css from '../images/css-3.png'
import js from '../images/js.png'
import framer from '../images/framer motion.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import instagram from '../images/instagram.png'



function Home({ onAnimationComplete }) {


//for scroll cryparion  animation

  const [cryparionComplete,setCryparionComplete]= useState(false)
  const targetRef = useRef(null)

  const {scrollYProgress}=useScroll({target:targetRef})
 
  const moveX =useTransform(scrollYProgress,[0,0.15],['0px','350px'])
  const scaleX= useTransform(scrollYProgress,[0,0.15],[1,0.30])

  const cryparion = useRef(null);


//for react animation
const [reactComplete,setReactComplete]=useState(false)
const reactMoveX = useTransform(scrollYProgress,[0,0.15],['-600px','50px'])
const reactMoveY = useTransform(scrollYProgress,[0,0.15],['-300px','200px'])
const [iconhide,setIconHide]=useState(false)

useEffect(() => {
  const scrollTrack = scrollYProgress.onChange((e) => {
    if (e >= 0.31 && e <= 1) {
      setIconHide(true);
    } else {
      setIconHide(false);
    }
  });

  return () => scrollTrack();
}, [scrollYProgress]);

const reactAnimation = (() => {
  if (iconhide) {
    return { opacity: 0 }; 
  } else if (reactComplete) {
    return { x: reactMoveX, y: reactMoveY, position: "sticky", top: 400 };
  } else {
    return {}; 
  }
})();

  
//for js animation

const [jsComplete,setJsComplete]=useState(false)
const jsMoveX = useTransform(scrollYProgress,[0,0.15],['-800px','150px'])
const jsMoveY = useTransform(scrollYProgress,[0,0.15],['-150px','230px'])

const jsAnimation = (() => {
  if(iconhide){
    return { opacity: 0 };
  }else if (jsComplete) {
    return { x: jsMoveX,y:jsMoveY, position: "sticky", top: 400 };
  } else {}
})();

//for html animation
const [htmlComplete,setHtmlComplete]=useState(false)
const htmlMoveX = useTransform(scrollYProgress,[0,0.15],['-550px','250px'])
const htmlMoveY = useTransform(scrollYProgress,[0,0.15],['0px','230px'])

const htmlAnimation = (() => {  
 if(iconhide){
  return { opacity: 0 };
  }else if (htmlComplete) {
    return { x: htmlMoveX,y:htmlMoveY, position: "sticky", top: 400 };
  } else {}
})();

//for css animation
const [cssComplete,setCssComplete]=useState(false)
const cssMoveX = useTransform(scrollYProgress,[0,0.15],['550px','350px'])
const cssMoveY = useTransform(scrollYProgress,[0,0.15],['-500px','230px'])

const cssAnimation = (() => {
  if (iconhide) {
    return { opacity: 0 };
  } else if (cssComplete) {
    return { x: cssMoveX,y:cssMoveY, position: "sticky", top: 400 };
  } else {}
})();

//for framer animation
const [framerComplete,setFramerComplete]=useState(false)
const framerMoveX = useTransform(scrollYProgress,[0,0.15],['600px','450px'])
const framerMoveY = useTransform(scrollYProgress,[0,0.15],['0px','230px'])

const framerAnimation = (() => {
 if(iconhide){
  return { opacity: 0 };
  }else if (framerComplete) {
    return { x: framerMoveX,y:framerMoveY, position: "sticky", top: 400 };
  } else {}
})();
  

//for scroll cryparion animation 2
 const [animation1Complete,setAnimation1Complete]=useState(false)

 const moveX2= useTransform(scrollYProgress,[0.3,0.45],['350px','-600px'])
 const [invisible, setInvisible] = useState(false);

 useEffect(() => {
  const scrollTrack = scrollYProgress.onChange((e) => {
    if (e >= 0.60 && e <= 1) {
      setInvisible(true);
      console.log("Invisible is true", e);
    } else {
      setInvisible(false);
      console.log("Invisible is false", e);
    }
  });

  return () => scrollTrack();
}, [scrollYProgress]);

 useEffect(()=>{
  const scrollTrack= scrollYProgress.onChange((e)=>{
    if(e>=0.3 && e<=1){
      setAnimation1Complete(true)
      setCryparionComplete(false)
    }else{
      setAnimation1Complete(false)
      setCryparionComplete(true)
    }
  });

   return()=>scrollTrack();
 },[scrollYProgress])

 const cryparionAnimation = (() => {
  if (invisible) {
    return { opacity: 0 }; 
  } else if (cryparionComplete) {
    return { x: moveX, scale: scaleX, opacity: 1 }; 
  } else if (animation1Complete) {
    return { x: moveX2, scale: scaleX, opacity: 1 }; 
  } else {
    return { opacity: 1 }; 
  }
})();


//for intro 1 animation
  const [showIntro1,setShowIntro1]=useState(false)

  useEffect(() => {
    const scrollTrack = scrollYProgress.onChange((latest) => {
      if (latest >= 0.14 && latest<=0.31) {
        setShowIntro1(true)
      }else{
        setShowIntro1(false)
      }
    });
  
    return () => scrollTrack();
  }, [scrollYProgress]);

  //for logo
  
  const [showLogo,setShowLogo]=useState(false)
  const [logoAnimationComplete,setLogoAnimationComplete]=useState(false)   

  useEffect(() => {
    const scrollTrack = scrollYProgress.onChange((latest) => {
      if (latest >= 0.14 && latest<=1) {
        setShowLogo(true)
      }else{
        
        setShowLogo(false)
      }
    },[scrollYProgress]);
  
    return () => scrollTrack();
  }, [scrollYProgress]);

const [logoPosition1,setLogoPosition1]=useState(false);
const [logoPosition2,setLogoPosition2]=useState(false);
 
useEffect(()=>{
  const scrollTrack= scrollYProgress.onChange((e)=>{
    if(e>=0.14 && e<=0.31){
      setLogoPosition1(true)
    }else{
      setLogoPosition1(false)
    }
  })
  return()=>scrollTrack();
 })

 useEffect(()=>{
  const scrollTrack= scrollYProgress.onChange((e)=>{
    if(e>=0.59 && e<=1){
      setLogoPosition2(true)
    }else{
      setLogoPosition2(false)
    }
  })
  return()=>scrollTrack();
 })

  const logoMove = useTransform(scrollYProgress,[0.3,0.45],['-300px','300px'])
  const logoMove2 = useTransform(scrollYProgress,[0.60,0.75],['300px','-300px'])
  
  const logoMoveAnimation = (() => {
    if (logoPosition2) {
     
      return { x: logoMove2 };
    } else if (logoPosition1) {
      
      return {x:-300 };
    } else if (logoAnimationComplete) {
     
      return { x: logoMove };
    } else {
      return {};
    }
  })();

//intro 2 animation

const [showIntro2,setShowIntro2]=useState(false)

useEffect(() => {
  const scrollTrack = scrollYProgress.onChange((latest) => {
    if (latest >= 0.44 && latest<=0.60) {
      setShowIntro2(true)
    }else{
      setShowIntro2(false)
    }
  });

  return () => scrollTrack();
}, [scrollYProgress]);


//myphoto animation
const [showMyPhoto,setShowMyPhoto]=useState(false)  

useEffect(() => {
  const scrollTrack = scrollYProgress.onChange((latest) => {
    if (latest >= 0.75 && latest<=1) {
      setShowMyPhoto(true)
    }else{setShowMyPhoto(false)} })
    return () => scrollTrack();
  });


//social network
const [showSocialNetwork,setShowSocialNetwork]=useState(false) 







  return (
    <div className="background" ref={targetRef} >
   
    

      
        <motion.div className="cryparion" ref={cryparion}>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onAnimationComplete={()=>setCryparionComplete(true)}
            style= {cryparionAnimation}
            
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 60,
              duration: 1.5,
              ease: "easeInOut",
            }}
            
          >
            Cryparion
          </motion.p>
        </motion.div> 
        <motion.img src={react} alt="" className="reactdm"
        initial={{x:0, y:0, opacity:0}}
        animate={{x:-600,y:-300, opacity:1}}  
        transition={{ delay: 0.5,  duration:0.5, damping:60 }}
        style={reactAnimation}
        onAnimationComplete={()=>setReactComplete(true)}/>  
        <motion.img src={js} alt="" className="react" 
        initial={{x:0, y:-150, opacity:0}}  
        animate={{x:-800,y:-150, opacity:1}}
        transition={{ delay: 0.5,  duration:0.5, damping:60 }}
        style={jsAnimation}
        onAnimationComplete={()=>setJsComplete(true)}/>
        <motion.img src={html} alt="" className="react" 
         initial={{x:0, y:-200, opacity:0}}
         animate={{x:-550,y:0,  opacity:1}}
         transition={{ delay: 0.5,  duration:0.5, damping:60 }}
          style={htmlAnimation}
         onAnimationComplete={()=>setHtmlComplete(true)}/>
        <motion.img src={css} alt="" className="react" 
        initial={{x:0, y:-250, opacity:0}}
        animate={{x:550,y:-500, opacity:1}}
        transition={{ delay: 0.5,  duration:0.5, damping:60 }}
        style={cssAnimation}
        onAnimationComplete={()=>setCssComplete(true)}/>
        <motion.img src={framer} alt="" className="react" 
        initial={{x:0, y:-300, opacity:0}}
        animate={{x:600,y:0, opacity:1}}
        transition={{ delay: 0.5,  duration:0.5, damping:60 }}
        style={framerAnimation}
        onAnimationComplete={()=>setFramerComplete(true)}/>


{showIntro1 && (
  <motion.div
    className="intro1"
    initial={{ x: 300 }}
    animate={{ x: 300 }}
  >
    <motion.p className="typewriter1">
      <span className="line" style={{ animationDelay: "0s" }}>
        This is
      </span>
      <br /><br />
      <span className="line" style={{ animationDelay: "0.5s" }}>
        A Frontend Web Developer
      </span>
      <br /><br />
      <span className="line" style={{ animationDelay: "1s" }}>
        Technologies I use--
      </span>
    </motion.p>
  </motion.div>
)}

      {showLogo && (
        <motion.img src={logo} className="logo"
        initial={{ scale:0,opacity:0} }
        animate={{ scale:1,opacity:1}}
        style={logoMoveAnimation}
        transition={{duration:0.5, damping:60, ease: "easeInOut"}}
       onAnimationComplete={()=>setLogoAnimationComplete(true)}></motion.img>
      )}

        {showIntro2 && (
          <motion.div
            className="intro2"
            initial={{ x: -390 }}
            animate={{ x: -390 }}
          >
            <motion.p className="typewriter2">
              <span className="line" style={{ animationDelay: "0s" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is specialized in
              </span>
              <br /><br />
              <span className="line" style={{ animationDelay: "0.5s" }}>
                Designs, Animation & Branding
              </span>
            </motion.p>
          </motion.div>
        )}

      {showMyPhoto && (<>
        <motion.div className="connect"><p>Connect With Me</p></motion.div>
        <motion.img src={myPhoto} className="myPhoto" 
        initial={{x:-300,y:50}}
        animate={{x:300,y:50 }}
        transition={{damping:60}}
        onAnimationComplete={()=>setShowSocialNetwork(true)}
        ></motion.img>
        {showSocialNetwork && (<>
        <motion.img className="linkedin" src={linkedin} alt="linkedin" 
        initial={{x:-150,y:200}}
        animate={{x:-150,y:0}}/>
        <motion.img className="github" src={github} alt="github"
        initial={{y:200}}
        animate={{y:0}}/>
        <motion.img className="instagram" src={instagram} alt="instagram" 
        initial={{x:150,y:200}}
        animate={{x:150,y:0}}/>
        </>
      )}
        </>
      )}

      
        

      
    </div>
  );
}

export default Home;
