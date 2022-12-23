import React from 'react'
import { motion } from 'framer-motion'
function Gallery() {
 return (
  <motion.div
   initial={{ width: 0 }}
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
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
   <h1>This is the Gallery page</h1>
  </motion.div>
 )
}

export default Gallery