import React from 'react';
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import InnerGallery from './InnerGallery';
import BookingsModal from './BookingsModal';
import fun from './../img/packages/fun.png';
import master from './../img/packages/master.png';
import open from './../img/packages/open.png';
import rescue from './../img/packages/rescue.png';
import snorkle from './../img/packages/snorkle.png';
import trial from './../img/packages/try.png';

function Packages() {

 return (
  <motion.div
   className="wrapper"
   initial={{ width: "0%" }}
   animate={{ width: "100%" }}
   exit={{ transform: "translate(100%, 0)", transition: { duration: 0.5 } }}
  >
   <div className="col-12 col-xl-8 offset-xl-2">
    <Container>
     <Row>

      <motion.h1
       className='col-xl-9'
       initial={{ opacity: 0 }}
       animate={{
        y: 20,
        opacity: 1,
        position: "relative",
        transition: { duration: 1, delay: 0 }
       }}
      >Checkout our awesome SCUBa
       <motion.span
        initial={{ opacity: 0 }}
        animate={{

         opacity: 1,
         position: "relative",
         transition: { duration: 0.2, delay: 0.2 }
        }}
       >&nbsp;POINT </motion.span>
       PACKAGES</motion.h1>
      <motion.p
       className="col-xl-9 mb-5"
       initial={{ opacity: 0 }}
       animate={{
        y: 20,
        opacity: 1,
        position: "relative",
        transition: { duration: 0.3, delay: 0.3 }
       }}
      >
       We have a variety of different adventure packages to try! There are fun times to be had for all levels and ages. For more information on packages, please get in touch.
      </motion.p>
      <motion.div
       className='col-12 col-xl-12 mb-5'
       initial={{ opacity: 0 }}
       animate={{
        y: -20,
        opacity: 1,
        position: "relative",
        transition: { duration: 0.4, delay: 0.4 }
       }}
      >
       <br />
       <BookingsModal />
      </motion.div>
      <motion.div
       className='col-12 col-xl-12'
       initial={{ opacity: 0 }}
       animate={{
        y: -20,
        opacity: 1,
        position: "relative",
        transition: { duration: 0.4, delay: 0.4 }
       }}
      >
       <Container>
        <Row>
         <div className="col-md-4 mb-4 p-3">
          <img className="img-fluid w-100 px-5" src={trial} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">TRIAL DIVE</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <h3 className="text-center">E80.00</h3>
         </div>
         <div className="col-md-4 mb-4 p-3">
          <img className="img-fluid w-100 px-5" src={snorkle} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">SNORKLING</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <h3 className="text-center">E50.00</h3>
         </div>
         <div className="col-md-4 mb-4 p-3">
          <img className="img-fluid w-100 px-5" src={fun} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">FUN DIVE</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <h3 className="text-center">E100.00</h3>
         </div>
         <div className="col-md-4 mb-4 p-3">
          <img className="img-fluid w-100 px-5" src={open} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">OPEN WATER</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <h3 className="text-center">E400.00</h3>
         </div>
         <div className="col-md-4 mb-4 p-3">
          <img className="img-fluid w-100 px-5" src={rescue} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">PADI RESCUE</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <h3 className="text-center">E250.00</h3>
         </div>
         <div className="col-md-4 mb-4 p-3">
          <img className="img-fluid w-100 px-5" src={master} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">PADI MASTER</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <h3 className="text-center">E500.00</h3>
         </div>
        </Row>
       </Container>

      </motion.div >
     </Row>
    </Container>
   </div>
  </motion.div >
 )
}

export default Packages