import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
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
import './../css/Packages.scss'
function Packages() {

  const [Package1Modal, setPackage1Modal] = useState(false);
  const handlePackage1Close = () => setPackage1Modal(false);
  const handlePackage1Show = () => setPackage1Modal(true);
  const [Package2Modal, setPackage2Modal] = useState(false);
  const handlePackage2Close = () => setPackage2Modal(false);
  const handlePackage2Show = () => setPackage2Modal(true);
  const [Package3Modal, setPackage3Modal] = useState(false);
  const handlePackage3Close = () => setPackage3Modal(false);
  const handlePackage3Show = () => setPackage3Modal(true);


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
              className='col-12 col-xl-12 mb-2'
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
                      y: 20,
                      opacity: 1,
                      position: "relative",
                      transition: { duration: 0.4, delay: 0.4 }
                    }}
                  >
                    <img className="img-fluid w-100" src={snorkle} alt="Scuba Point Packages" />
                    <div className="sparkle"></div>
                    <h2 className="text-center pt-4">SNORKEL<br />BOAT TOUR</h2>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-100 d-block mb-3" to="/contact">READ MORE</Link>
                    <p className="text-center">Check the scene without getting involved with the technical stuff.</p>

                    <h4 className="text-center">€50.00</h4>
                    <span className="btn btn-outline-dark btn-lg mx-auto w-100 d-block mb-3" onClick={handlePackage1Show}>BOOK&nbsp;NOW</span>
                    <Modal
                      keyboard={false}
                      show={Package1Modal}
                      onHide={handlePackage1Close}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title><h2 className='mt-3'>Package1 bio</h2></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Package1 is a diving instructor with 17 years of experience.
                        <p>He is based in Tenerife, and has extensive knowledge of the local diving spots.</p>
                        <p>He is an experienced and skilled instructor who is passionate about diving and dedicated to ensuring his students have a safe and enjoyable experience.</p>

                      </Modal.Body>
                    </Modal>
                  </motion.div>
                  <motion.div className="col-sm-6 col-lg-4 mb-4 p-3"
                    initial={{ opacity: 0 }}
                    animate={{
                      y: 20,
                      opacity: 1,
                      position: "relative",
                      transition: { duration: 0.4, delay: 0.7 }
                    }}
                  >
                    <img className="img-fluid w-100" src={trial} alt="Scuba Point Packages" />
                    <div className="sparkle"></div>
                    <h2 className="text-center pt-4">TRIAL<br />DIVE</h2>
                    <p className="text-center">Try scuba diving for the first time and see if it is your type of cake.</p>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-50 d-block mb-3" to="/contact">BOOK</Link>
                    <h4 className="text-center">€80.00</h4>
                  </motion.div>
                  <motion.div className="col-sm-6 col-lg-4 mb-4 p-3"
                    initial={{ opacity: 0 }}
                    animate={{
                      y: 20,
                      opacity: 1,
                      position: "relative",
                      transition: { duration: 0.4, delay: 1 }
                    }}
                  >
                    <img className="img-fluid w-100" src={fun} alt="Scuba Point Packages" />
                    <div className="sparkle"></div>
                    <h2 className="text-center pt-4">FUN<br />DIVE</h2>
                    <p className="text-center">A little experience already? We can take you to explore something fun!</p>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-50 d-block mb-3" to="/contact">BOOK</Link>
                    <h4 className="text-center">€100.00</h4>
                  </motion.div>
                  <motion.div className="col-sm-6 col-lg-4 mb-4 p-3"
                    initial={{ opacity: 0 }}
                    animate={{
                      y: 20,
                      opacity: 1,
                      position: "relative",
                      transition: { duration: 0.4, delay: 1.3 }
                    }}
                  >
                    <img className="img-fluid w-100" src={open} alt="Scuba Point Packages" />
                    <div className="sparkle"></div>
                    <h2 className="text-center pt-4">OPEN<br />WATER</h2>
                    <p className="text-center">Do the 3 day Open Water course and pass the theory test. Then dive anywhere!</p>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-50 d-block mb-3" to="/contact">BOOK</Link>
                    <h4 className="text-center">€400.00</h4>
                  </motion.div>
                  <motion.div className="col-sm-6 col-lg-4 mb-4 p-3"
                    initial={{ opacity: 0 }}
                    animate={{
                      y: 20,
                      opacity: 1,
                      position: "relative",
                      transition: { duration: 0.4, delay: 1.6 }
                    }}
                  >
                    <img className="img-fluid w-100" src={rescue} alt="Scuba Point Packages" />
                    <div className="sparkle"></div>
                    <h2 className="text-center pt-4">PADI<br />RESCUE</h2>
                    <p className="text-center">Learn the intermediate certificate that will teach you about search and rescue.</p>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-50 d-block mb-3" to="/contact">BOOK</Link>
                    <h4 className="text-center">€250.00</h4>
                  </motion.div>
                  <motion.div className="col-sm-6 col-lg-4 mb-4 p-3"
                    initial={{ opacity: 0 }}
                    animate={{
                      y: 20,
                      opacity: 1,
                      position: "relative",
                      transition: { duration: 0.4, delay: 1.9 }
                    }}
                  >
                    <img className="img-fluid w-100" src={master} alt="Scuba Point Packages" />
                    <div className="sparkle"></div>
                    <h2 className="text-center pt-4">PADI<br />MASTER</h2>
                    <p className="text-center">Become a scuba diving jedi master and help others use the force while underwater.</p>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-50 d-block mb-3" to="/contact">BOOK</Link>
                    <h4 className="text-center">€500.00</h4>
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