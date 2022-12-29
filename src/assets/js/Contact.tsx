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
   <Container className="mb-5 pb-5">
    <Row>
     <div className='col-xl-5 mb-5'>
      <motion.h1
       className='col-xl-12'
       initial={{ opacity: 0 }}
       animate={{
        y: 20,
        opacity: 1,
        position: "relative",
        transition: { duration: 1.5, delay: 0.5 }
       }}
      >CONTACT <br />SCUBa
       <motion.span
        initial={{ opacity: 0 }}
        animate={{

         opacity: 1,
         position: "relative",
         transition: { duration: 0.7, delay: 0.1 }
        }}
       >&nbsp;point </motion.span>
      </motion.h1>
      <motion.p
       className="col-xl-8 special_p"
       initial={{ opacity: 0 }}
       animate={{
        y: 20,
        opacity: 1,
        position: "relative",
        transition: { duration: 0.8, delay: 0.2 }
       }}
      >
       WE ARE BASED IN LOS CRISTIANOS, SOUTH TENERIFE.
      </motion.p>
      <motion.p
       className="col-xl-8 mb-5"
       initial={{ opacity: 0 }}
       animate={{
        y: 20,
        opacity: 1,
        position: "relative",
        transition: { duration: 0.8, delay: 0.2 }
       }}
      >
       You can get in touch with us using the mobile numbers attached, we use  Whatsapp too. You can also use the button to send us a message by email if you want.
      </motion.p>

      <motion.div
       className='col-12 col-xl-7'
       initial={{ opacity: 0 }}
       animate={{
        y: -20,
        opacity: 1,
        position: "relative",
        transition: { duration: 0.5, delay: 0.3 }
       }}
      >
       <br />
       <BookingsModal />
      </motion.div>

     </div>
     <div className='col-xl-7'>
      <div className='col-xl-12'>
       <Container>
        <Row>
         <motion.div
          className='col-3'
          initial={{ opacity: 0 }}
          animate={{
           y: -10,
           opacity: 1,
           position: "relative",
           transition: { duration: 0.6, delay: 0.3 }
          }}
         >
          <img src={team2} className='w-100 img-fluid mb-5' alt="Gonza, instructor contact number" />
         </motion.div>
         <div className='col-9'>
          <motion.h2
           className='col-xl-12'
           initial={{ opacity: 0 }}
           animate={{
            y: 40,
            opacity: 1,
            position: "relative",
            transition: { duration: 0.7, delay: 0.6 }
           }}
          >GONZA<br />
           <span> <img width="30px" className="mr-2" src={whatsapp} alt="Scuba Point Whatsapp" />
            &nbsp;+34 633 04 48 85 </span>
          </motion.h2></div>
        </Row></Container>
      </div>

      <div
       className='col-xl-12'
      >
       <Container><Row>
        <motion.div className='col-3'
         initial={{ opacity: 0 }}
         animate={{
          y: -10,
          opacity: 1,
          position: "relative",
          transition: { duration: 0.9, delay: 1.2 }
         }}
        ><img src={team1} className='w-100 img-fluid' alt="Gonza, instructor contact number" /></motion.div>
        <div className='col-9'>
         <motion.h2
          className='col-xl-12'
          initial={{ opacity: 0 }}
          animate={{
           y: 40,
           opacity: 1,
           position: "relative",
           transition: { duration: 0.6, delay: 0.9 }
          }}
         >MARCOS<br />
          <span><img width="30px" className="mr-2" src={whatsapp} alt="Scuba Point Whatsapp" />
           &nbsp;+34 633 04 48 85 </span>
         </motion.h2></div>
       </Row></Container>
      </div>
     </div>
    </Row>
   </Container>
   <br />
  </motion.div >
 )
}

export default Contact