import React from 'react';
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import InnerGallery from './InnerGallery';
import BookingsModal from "./BookingsModal"
function Gallery() {

 return (
  <motion.div
   className="wrapper"
   initial={{ width: "0%" }}
   animate={{ width: "100%" }}
   exit={{ transform: "translate(100%, 0)", transition: { duration: 0.5 } }}
  >
   <Container>
    <Row>

     <motion.h1
      className='col-xl-7'
      initial={{ opacity: 0 }}
      animate={{
       y: 20,
       opacity: 1,
       position: "relative",
       transition: { duration: 0.5, delay: 0.5 }
      }}
     >WELCOME TO THE SCUBa
      <motion.span
       initial={{ opacity: 0 }}
       animate={{

        opacity: 1,
        position: "relative",
        transition: { duration: 0.75, delay: 0.75 }
       }}
      >&nbsp;point </motion.span>
      GALLERY</motion.h1>
     <motion.p
      className="col-xl-6 mb-5"
      initial={{ opacity: 0 }}
      animate={{
       y: 20,
       opacity: 1,
       position: "relative",
       transition: { duration: 1.5, delay: 1.5 }
      }}
     >
      Please feel free to take a second to check out our gallery of previous trips by scrolling down. If you have any questions, please feel free to contact us at any time.
     </motion.p>
     <motion.div
      className='col-12 col-xl-12'
      initial={{ opacity: 0 }}
      animate={{
       y: -20,
       opacity: 1,
       position: "relative",
       transition: { duration: 1.25, delay: 1.25 }
      }}
     >
      <br />
      <BookingsModal />
     </motion.div>
    </Row>
   </Container>
   <InnerGallery />

  </motion.div >
 )
}

export default Gallery