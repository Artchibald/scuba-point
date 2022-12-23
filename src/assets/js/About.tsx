
import React from 'react'
import { motion } from 'framer-motion'
function About() {
 return (
  <motion.div
   initial={{ width: "0%" }}
   animate={{ width: "100%" }}
   exit={{ transform: "translate(100%, 0)", transition: { duration: 0.5 } }}

  >
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <motion.div
    animate={{

     x: 0,
     backgroundColor: "#000",
     boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
     position: "fixed",
     transitionEnd: {
      display: "none",
     },
     transition: { duration: 2.5 }
    }}
   > <h1>This is the about page</h1></motion.div>

   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
   <h1>This is the about page</h1>
  </motion.div>
 )
}

export default About