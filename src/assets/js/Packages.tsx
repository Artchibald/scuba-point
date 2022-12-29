import React from 'react';
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
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

   <Container>
    <Row>
     <div className="col-12 col-xl-8 offset-xl-2">
      <motion.h1
       className='col-xl-9'
       initial={{ opacity: 0 }}
       animate={{
        y: 20,
        opacity: 1,
        position: "relative",
        transition: { duration: 1, delay: 0 }
       }}>
       <span className="h1 mb-5">
        SCUBa
        <motion.span
         initial={{ opacity: 0 }}
         animate={{

          opacity: 1,
          position: "relative",
          transition: { duration: 2, delay: 1 }
         }}
        >&nbsp;POINT </motion.span>
        DIVING PACKAGES</span></motion.h1>
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
         <motion.div className="col-sm-6 col-lg-4 mb-4 p-3"
          initial={{ opacity: 0 }}
          animate={{
           y: -20,
           opacity: 1,
           position: "relative",
           transition: { duration: 0.4, delay: 0.4 }
          }}
         >
          <img className="img-fluid w-100 px-5" src={snorkle} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">SNORKLE<br />TOUR</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <Link className="btn btn-outline-dark btn-lg mx-auto w-50 d-block mb-3" to="/contact">BOOK</Link>
          <h4 className="text-center">E50.00</h4>
         </motion.div>
         <motion.div className="col-sm-6 col-lg-4 mb-4 p-3"
          initial={{ opacity: 0 }}
          animate={{
           y: -20,
           opacity: 1,
           position: "relative",
           transition: { duration: 0.4, delay: 0.7 }
          }}
         >
          <img className="img-fluid w-100 px-5" src={trial} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">TRIAL<br />DIVE</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <Link className="btn btn-outline-dark btn-lg mx-auto w-50 d-block mb-3" to="/contact">BOOK</Link>
          <h4 className="text-center">E80.00</h4>
         </motion.div>
         <motion.div className="col-sm-6 col-lg-4 mb-4 p-3"
          initial={{ opacity: 0 }}
          animate={{
           y: -20,
           opacity: 1,
           position: "relative",
           transition: { duration: 0.4, delay: 1 }
          }}
         >
          <img className="img-fluid w-100 px-5" src={fun} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">FUN<br />DIVE</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <Link className="btn btn-outline-dark btn-lg mx-auto w-50 d-block mb-3" to="/contact">BOOK</Link>
          <h4 className="text-center">E100.00</h4>
         </motion.div>
         <motion.div className="col-sm-6 col-lg-4 mb-4 p-3"
          initial={{ opacity: 0 }}
          animate={{
           y: -20,
           opacity: 1,
           position: "relative",
           transition: { duration: 0.4, delay: 1.3 }
          }}
         >
          <img className="img-fluid w-100 px-5" src={open} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">OPEN<br />WATER</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <Link className="btn btn-outline-dark btn-lg mx-auto w-50 d-block mb-3" to="/contact">BOOK</Link>
          <h4 className="text-center">E400.00</h4>
         </motion.div>
         <motion.div className="col-sm-6 col-lg-4 mb-4 p-3"
          initial={{ opacity: 0 }}
          animate={{
           y: -20,
           opacity: 1,
           position: "relative",
           transition: { duration: 0.4, delay: 1.6 }
          }}
         >
          <img className="img-fluid w-100 px-5" src={rescue} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">PADI<br />RESCUE</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <Link className="btn btn-outline-dark btn-lg mx-auto w-50 d-block mb-3" to="/contact">BOOK</Link>
          <h4 className="text-center">E250.00</h4>
         </motion.div>
         <motion.div className="col-sm-6 col-lg-4 mb-4 p-3"
          initial={{ opacity: 0 }}
          animate={{
           y: -20,
           opacity: 1,
           position: "relative",
           transition: { duration: 0.4, delay: 1.9 }
          }}
         >
          <img className="img-fluid w-100 px-5" src={master} alt="Scuba Point Packages" />
          <h2 className="text-center pt-4">PADI<br />MASTER</h2>
          <p className="text-center">Check out this dive which is for beginners. It is really awesome and bogus.</p>
          <Link className="btn btn-outline-dark btn-lg mx-auto w-50 d-block mb-3" to="/contact">BOOK</Link>
          <h4 className="text-center">E500.00</h4>
         </motion.div>
        </Row>
       </Container>
      </motion.div >
     </div>
    </Row>
   </Container>
  </motion.div >
 )
}

export default Packages