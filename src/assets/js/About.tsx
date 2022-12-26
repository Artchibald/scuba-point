
import React from 'react'
import { motion } from 'framer-motion'
import BookingsModal from "./BookingsModal"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/Wrapper.scss'
function About() {

 return (
  <motion.div
   className="wrapper"
   initial={{ width: "0%" }}
   animate={{ width: "100%" }}
   exit={{ transform: "translate(100%, 0)", transition: { duration: 0.5 } }}
  >
   <Container>
    <Row>
     <motion.div
      className='mb-2 col-12'
      initial={{ opacity: 0 }}
      animate={{
       y: 30,
       opacity: 1,
       position: "relative",
       transition: { duration: 0.5, delay: 0.5 }
      }}
     ><span className="h1 mb-5">ABOUT THE scuba
       <motion.span
        initial={{ opacity: 0 }}
        animate={{
         y: 60,
         opacity: 1,
         position: "relative",
         transition: { duration: 2.5, delay: 0.5 }
        }}
       >&nbsp;point&nbsp;</motion.span>
       DIVING SCHOOL LOCATED IN SOUTH TENERIFE</span> </motion.div>

     <motion.p
      className='col-xs-12 col-md-6 special_p'
      initial={{ opacity: 0 }}
      animate={{
       y: 40,
       opacity: 1,
       position: "relative",
       transition: { duration: 0.75, delay: 0.75 }
      }}
     >We are the diving school you want to dive with in Tenerife. We have been organizing excursions in Santa Cruz de Tenerife for over 10 years.</motion.p>
     <motion.p
      className='col-xs-12 col-md-6 special_p'
      initial={{ opacity: 0 }}
      animate={{
       y: 40,
       opacity: 1,
       position: "relative",
       transition: { duration: 1, delay: 1 }
      }}
     >
      We are the diving school you want to dive with in Tenerife. We have been organizing excursions in Santa Cruz de Tenerife for over 10 years.</motion.p>
     <motion.p
      className='col-xs-12 col-md-6'
      initial={{ opacity: 0 }}
      animate={{
       y: 40,
       opacity: 1,
       position: "relative",
       transition: { duration: 1.25, delay: 1.25 }
      }}
     >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sem ornare, imperdiet ante a, aliquet risus. Donec velit est, congue vel mauris ut, mattis tristique ipsum. Vestibulum commodo faucibus iaculis. Donec pellentesque, dolor sed pretium hendrerit, tortor odio varius sapien, non lobortis metus metus nec ipsum. Duis tempor ut sem vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur mauris arcu, non hendrerit lorem faucibus eu.
     </motion.p>
     <motion.p
      className='col-xs-12 col-md-6'
      initial={{ opacity: 0 }}
      animate={{
       y: 40,
       opacity: 1,
       position: "relative",
       transition: { duration: 1.5, delay: 1.5 }
      }}
     >
      Suspendisse ac sem aliquam, imperdiet justo non, elementum nibh. Fusce fringilla ipsum eu purus ornare blandit. Cras pharetra purus tortor, sit amet efficitur tellus mattis eu. Maecenas lobortis imperdiet augue. Phasellus sed aliquet augue. Phasellus leo risus, consectetur a facilisis eu, laoreet at orci. Suspendisse facilisis nisi quis porta tempor. Nullam felis diam, lacinia in pretium lobortis, ornare vel felis. Mauris massa est, porttitor eu pulvinar vitae, volutpat eget lectus.
     </motion.p>
     <motion.p
      className='col-xs-12 col-md-6'
      initial={{ opacity: 0 }}
      animate={{
       y: 40,
       opacity: 1,
       position: "relative",
       transition: { duration: 1.75, delay: 1.75 }
      }}
     >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sem ornare, imperdiet ante a, aliquet risus. Donec velit est, congue vel mauris ut, mattis tristique ipsum. Vestibulum commodo faucibus iaculis. Donec pellentesque, dolor sed pretium hendrerit, tortor odio varius sapien, non lobortis metus metus nec ipsum. Duis tempor ut sem vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur mauris arcu, non hendrerit lorem faucibus eu.
     </motion.p>
     <motion.p
      className='col-xs-12 col-md-6'
      initial={{ opacity: 0 }}
      animate={{
       y: 40,
       opacity: 1,
       position: "relative",
       transition: { duration: 2, delay: 2 }
      }}
     >
      Suspendisse ac sem aliquam, imperdiet justo non, elementum nibh. Fusce fringilla ipsum eu purus ornare blandit. Cras pharetra purus tortor, sit amet efficitur tellus mattis eu. Maecenas lobortis imperdiet augue. Phasellus sed aliquet augue. Phasellus leo risus, consectetur a facilisis eu, laoreet at orci. Suspendisse facilisis nisi quis porta tempor. Nullam felis diam, lacinia in pretium lobortis, ornare vel felis. Mauris massa est, porttitor eu pulvinar vitae, volutpat eget lectus.

     </motion.p>
     <motion.div
      className='col-xs-12 col-md-6'
      initial={{ opacity: 0 }}
      animate={{
       y: 40,
       opacity: 1,
       position: "relative",
       transition: { duration: 2.25, delay: 2.25 }
      }}
     >
      <br />
      <BookingsModal />
     </motion.div>
    </Row>
   </Container>

  </motion.div >
 )
}

export default About