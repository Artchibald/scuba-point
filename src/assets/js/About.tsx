
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
   <div>
    <motion.h1
     initial={{ opacity: 0 }}
     animate={{
      y: -20,
      opacity: 1,
      position: "relative",
      transition: { duration: 1.5 }
     }}
    >This is the about page</motion.h1>
   </div>
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