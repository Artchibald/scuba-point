import React from 'react';
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingsModal from "./BookingsModal"
import whatsapp from './../img/icons/whatsapp.svg';
import team1 from './../img/team1.png';
import team2 from './../img/team2.png';
function Contact() {

 return (
  <motion.div
   className="wrapper"
   initial={{ width: "0%" }}
   animate={{ width: "100%" }}
   exit={{ transform: "translate(100%, 0)", transition: { duration: 0.5 } }}
  >
   <Container>
    <Row>
     <div className='col-xl-5'>
      <motion.h1
       className='col-xl-12'
       initial={{ opacity: 0 }}
       animate={{
        y: 20,
        opacity: 1,
        position: "relative",
        transition: { duration: 0.5, delay: 0.5 }
       }}
      >CONTACT <br />SCUBa
       <motion.span
        initial={{ opacity: 0 }}
        animate={{

         opacity: 1,
         position: "relative",
         transition: { duration: 0.75, delay: 0.75 }
        }}
       >&nbsp;point </motion.span>
      </motion.h1>

      <motion.p
       className="col-xl-8 mb-5"
       initial={{ opacity: 0 }}
       animate={{
        y: 20,
        opacity: 1,
        position: "relative",
        transition: { duration: 1, delay: 1 }
       }}
      >
       You can get in touch with us using the mobile numbers below, we use  Whatsapp too. You can also use the button to send us a message by email.
      </motion.p>
      <motion.div
       className='col-12 col-xl-7'
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

     </div>
     <div className='col-xl-7'>
      <motion.div
       className='col-xl-12'
       initial={{ opacity: 0 }}
       animate={{
        y: 20,
        opacity: 1,
        position: "relative",
        transition: { duration: 2.5, delay: 2.5 }
       }}
      >
       <Container><Row>
        <div className='col-3'><img src={team2} className='w-100 img-fluid mb-5' alt="Gonza, instructor contact number" /></div>
        <div className='col-9'>
         <motion.h2
          className='col-xl-12'
          initial={{ opacity: 0 }}
          animate={{
           y: 40,
           opacity: 1,
           position: "relative",
           transition: { duration: 1.5, delay: 1.5 }
          }}
         >GONZA<br />
          <motion.span
           initial={{ opacity: 0 }}
           animate={{

            opacity: 1,
            position: "relative",
            transition: { duration: 1.75, delay: 1.75 }
           }}
          > <img width="30px" className="mr-2" src={whatsapp} alt="Scuba Point Whatsapp" />&nbsp;+34 633 04 48 85 </motion.span>
         </motion.h2></div>
       </Row></Container>
      </motion.div>

      <motion.div
       className='col-xl-12'
       initial={{ opacity: 0 }}
       animate={{
        y: 20,
        opacity: 1,
        position: "relative",
        transition: { duration: 2.5, delay: 2.5 }
       }}
      >
       <Container><Row>
        <div className='col-3'><img src={team1} className='w-100 img-fluid' alt="Gonza, instructor contact number" /></div>
        <div className='col-9'>
         <motion.h2
          className='col-xl-12'
          initial={{ opacity: 0 }}
          animate={{
           y: 40,
           opacity: 1,
           position: "relative",
           transition: { duration: 1.5, delay: 1.5 }
          }}
         >MARCOS<br />
          <motion.span
           initial={{ opacity: 0 }}
           animate={{

            opacity: 1,
            position: "relative",
            transition: { duration: 1.75, delay: 1.75 }
           }}
          > <img width="30px" className="mr-2" src={whatsapp} alt="Scuba Point Whatsapp" />&nbsp;+34 633 04 48 85 </motion.span>
         </motion.h2></div>
       </Row></Container>
      </motion.div>



     </div>
    </Row>
   </Container>

  </motion.div >
 )
}

export default Contact