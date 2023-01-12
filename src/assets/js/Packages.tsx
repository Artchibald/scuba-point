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
import rescue1 from './../img/packages/rescue1.png';
import snorkle from './../img/packages/snorkle.png';
import trial from './../img/packages/try.png';
import efr from './../img/packages/efr.png';
import special from './../img/packages/special.png';
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
  const [Package4Modal, setPackage4Modal] = useState(false);
  const handlePackage4Close = () => setPackage4Modal(false);
  const handlePackage4Show = () => setPackage4Modal(true);
  const [Package5Modal, setPackage5Modal] = useState(false);
  const handlePackage5Close = () => setPackage5Modal(false);
  const handlePackage5Show = () => setPackage5Modal(true);
  const [Package6Modal, setPackage6Modal] = useState(false);
  const handlePackage6Close = () => setPackage6Modal(false);
  const handlePackage6Show = () => setPackage6Modal(true);
  const [Package7Modal, setPackage7Modal] = useState(false);
  const handlePackage7Close = () => setPackage7Modal(false);
  const handlePackage7Show = () => setPackage7Modal(true);
  const [Package8Modal, setPackage8Modal] = useState(false);
  const handlePackage8Close = () => setPackage8Modal(false);
  const handlePackage8Show = () => setPackage8Modal(true);
  const [Package9Modal, setPackage9Modal] = useState(false);
  const handlePackage9Close = () => setPackage9Modal(false);
  const handlePackage9Show = () => setPackage9Modal(true);

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
                    <p className="text-center">Check the scene without getting involved with the technical stuff.</p>
                    <span className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" onClick={handlePackage1Show}>READ&nbsp;MORE</span>
                    <Modal
                      keyboard={false}
                      show={Package1Modal}
                      onHide={handlePackage1Close}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title><h2 className='mt-3'>SNORKEL BOAT&nbsp;TRIP</h2></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        A snorkeling boat tour of Tenerife is a half-day adventure that takes you to some of the most beautiful and diverse marine habitats in the Canary Islands.
                        <p className="mt-3">The tour, which costs 50 euros per person, departs from the port of Tenerife and takes you on a journey to the clear waters of the Atlantic Ocean.
                        </p>
                        <p>During the tour, you will have the opportunity to explore a variety of different snorkeling sites, where you can see a wide range of marine life such as tropical fish, sea turtles, and even dolphins. The tour guides will provide you with all the necessary equipment, including snorkels, masks, and fins, as well as give you a detailed briefing on the best ways to enjoy your time in the water. You'll also be able to relax and enjoy the scenery on the boat trip.</p>
                        <Link className="btn btn-outline-dark btn-lg d-block mb-3" to="/contact">BOOK NOW</Link>
                      </Modal.Body>
                    </Modal>
                    <h4 className="text-center">€50.00</h4>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" to="/contact">BOOK NOW</Link>

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
                    <span className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" onClick={handlePackage2Show}>READ&nbsp;MORE</span>
                    <Modal
                      keyboard={false}
                      show={Package2Modal}
                      onHide={handlePackage2Close}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title><h2 className='mt-3'>TRIAL DIVE</h2></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        A half-day trial scuba diving session in Tenerife is the perfect way to experience the underwater world of the Canary Islands.
                        <p className="mt-3"> The session is designed for those who have never dived before or are looking to try it out before committing to a full certification course. It typically lasts for about 3-4 hours and begins with a brief training session on land, where you will learn the basics of diving, such as how to use the equipment and important safety procedures.
                        </p>
                        <p>After the training, you will head out to the dive site with a certified instructor who will guide you through the dive, helping you to feel comfortable and safe underwater. You will have the opportunity to explore the clear waters and see a variety of marine life.
                          You will also get an opportunity to practice your newly learned skills and enjoy the sea bed in a safe and controlled environment.</p>

                        <Link className="btn btn-outline-dark btn-lg d-block mb-3" to="/contact">BOOK NOW</Link>

                      </Modal.Body>
                    </Modal>
                    <h4 className="text-center">€65.00</h4>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" to="/contact">BOOK NOW</Link>
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
                    <span className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" onClick={handlePackage3Show}>READ&nbsp;MORE</span>
                    <Modal
                      keyboard={false}
                      show={Package3Modal}
                      onHide={handlePackage3Close}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title><h2 className='mt-3'>FUN DIVE</h2></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Fun dives at Tenerife based scuba diving club Scuba Point are the perfect way for intermediate divers to explore the beautiful waters of the Canary Islands.
                        <p className="mt-3">  The club offers a variety of dive sites to choose from, each with its own unique marine life and underwater landscapes. The dive sites are suitable for divers who have dived before and have an Open Water or equivalent certification.
                        </p>
                        <p> Please note that boat dives are 12e more per dive, every diver must have their own insurance, otherwise we can provide you our DAN insurance per day, month or year. We go diving every day to the best diving sites in Tenerife for certified divers, both from the boat and from the coast. </p>
                        <p>The fun dives are led by experienced and certified dive instructors who will guide you through the dive, ensuring your safety and helping you to make the most of your underwater experience. They'll also give you a briefing on the dive site, pointing out the best places to see marine life and interesting features.</p>
                        <p>Scuba Point typically offer 2 dive options. A morning dive and an afternoon dive, allowing you to choose the one that best fits your schedule. We also provide all the necessary equipment, including tanks, weights, and dive computers.</p>
                        <p>The fun dives are a great opportunity for intermediate divers to improve their diving skills, explore new dive sites, and see some of the most spectacular marine environments.</p>
                        <Link className="btn btn-outline-dark btn-lg d-block mb-3" to="/contact">BOOK NOW</Link>
                      </Modal.Body>
                    </Modal>
                    <h4 className="text-center">€50/€90</h4>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" to="/contact">BOOK&nbsp;NOW</Link>

                  </motion.div>
                  <motion.h1
                    className='col-xl-9 mt-5'
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
                      COURSES</span></motion.h1>
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
                    We have a variety of different diving courses which can help you become certified.
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
                    <h2 className="text-center pt-4">PADI<br />OPEN<br />WATER</h2>
                    <p className="text-center">Do the 3 day Open Water course and pass the theory test. Then dive anywhere!</p>
                    <span className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" onClick={handlePackage4Show}>READ&nbsp;MORE</span>
                    <Modal
                      keyboard={false}
                      show={Package4Modal}
                      onHide={handlePackage4Close}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title><h2 className='mt-3'>OPEN WATER PADI CERTIFICATION</h2></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        In this course, you will become a certified diver. You will learn to assemble your own diving equipment, the necessary skills to feel confident and safe underwater as well as enjoy the experience much more.

                        <p className="mt-3">  The course consists of a practical part in the water where we will do 5 dives, and a theoretical part where you must take a final exam to later receive certification as a certified diver.
                        </p>
                        <p>The PADI Open Water Diving course in Tenerife is a great way to learn how to dive in a beautiful location. The course typically lasts 2-3 days, with a maximum depth of 18 meters.  </p>
                        <p>You will learn the basics of diving including safety procedures, diving equipment, and underwater communication. You will also have the opportunity to explore the diverse marine life of the Tenerife waters. </p>
                        <p>Upon completion of the course, you will be certified as a PADI Open Water Diver, allowing you to dive independently with a buddy to a maximum depth of 18 meters. Tenerife is a great place to learn to dive, with crystal clear waters and a wide variety of marine life, it's an unforgettable experience.</p>
                        <Link className="btn btn-outline-dark btn-lg d-block mb-3" to="/contact">BOOK NOW</Link>
                      </Modal.Body>
                    </Modal>
                    <h4 className="text-center">€395.00</h4>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" to="/contact">BOOK&nbsp;NOW</Link>
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
                    <h2 className="text-center pt-4">ADVANCED OPEN WATER</h2>
                    <p className="text-center">Learn the intermediate certificate that will teach you about search and rescue.</p>
                    <span className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" onClick={handlePackage5Show}>READ&nbsp;MORE</span>
                    <Modal
                      keyboard={false}
                      show={Package5Modal}
                      onHide={handlePackage5Close}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title><h2 className='mt-3'>PADI ADVANCED OPEN WATER</h2></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        The PADI advanced open water course is a fundamental step in your career as a diver, where you can continue to go deeper.



                        <p className="mt-3">With this course you will learn the skills to be able to go up to 30 meters, but it is not only that! You will also become a good underwater navigator because we will teach you how to navigate, just as we will greatly improve our buoyancy, we can also opt for a night dive, a shipwreck dive or a search and recovery of objects. It is one of the most fun and dynamic courses and it does not have a final exam! Do not miss it!
                        </p>
                        <p>The PADI Advanced Open Water course in Tenerife is a great way to take your diving skills to the next level. The course typically lasts 2 days and includes a total of 5 dives, with a maximum depth of 30 meters. You will learn advanced diving techniques such as deep diving, navigation and peak performance buoyancy.  </p>
                        <p>You will also have the opportunity to explore the diverse marine life at deeper depths in the Tenerife waters. Upon completion of the course, you will be certified as a PADI Advanced Open Water Diver, allowing you to dive to a maximum depth of 30 meters and participate in a variety of specialty dives such as Wreck, Night and Deep diving. Tenerife offers crystal clear waters and a wide variety of marine life that will make your course an unforgettable experience. </p>
                        <Link className="btn btn-outline-dark btn-lg d-block mb-3" to="/contact">BOOK NOW</Link>
                      </Modal.Body>
                    </Modal>
                    <h4 className="text-center">€365.00</h4>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" to="/contact">BOOK&nbsp;NOW</Link>
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
                    <img className="img-fluid w-100" src={rescue1} alt="Scuba Point Packages" />
                    <div className="sparkle"></div>
                    <h2 className="text-center pt-4">PADI<br />RESCUE<br />DIVER</h2>
                    <p className="text-center">Prepare yourself to manage all kinds of stress or rescue situations for other divers</p>
                    <span className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" onClick={handlePackage7Show}>READ&nbsp;MORE</span>
                    <Modal
                      keyboard={false}
                      show={Package7Modal}
                      onHide={handlePackage7Close}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title><h2 className='mt-3'>PADI RESCUE DIVER </h2></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        The PADI Rescue Diver course in Tenerife is a 2-day program that equips divers with the skills and knowledge to effectively manage stress and handle rescue situations. This course is designed for divers who are looking to expand their knowledge and improve their safety skills.
                        <p className="mt-3"> During the course, you will learn how to recognize and respond to dive emergencies, as well as how to assist injured or panicked divers. You will also learn how to provide first aid and perform rescue breathing, which are crucial skills for any diver.
                        </p>
                        <p> The course is taught by certified PADI instructors and is conducted in a safe and controlled environment. Upon completion of the course, you will be awarded a PADI Rescue Diver certification.</p>
                        <Link className="btn btn-outline-dark btn-lg d-block mb-3" to="/contact">BOOK NOW</Link>
                      </Modal.Body>
                    </Modal>
                    <h4 className="text-center">€365.00</h4>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" to="/contact">BOOK&nbsp;NOW</Link>
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
                    <img className="img-fluid w-100" src={efr} alt="Scuba Point Packages" />
                    <div className="sparkle"></div>
                    <h2 className="text-center pt-4">EMERGENCY<br />FIRST<br />RESPONSE</h2>
                    <p className="text-center">Respond to accidents not only in the water as a diver, but also in daily life.

                    </p>
                    <span className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" onClick={handlePackage8Show}>READ&nbsp;MORE</span>
                    <Modal
                      keyboard={false}
                      show={Package8Modal}
                      onHide={handlePackage8Close}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title><h2 className='mt-3'>PADI FIRST RESPONSE (EFR) </h2></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        The PADI Emergency First Response (EFR) course in Tenerife is a one-day program that teaches individuals how to provide emergency care and first aid in a scuba diving environment.
                        <p className="mt-3">  The course is designed for divers and non-divers alike, and it is a prerequisite for the PADI Rescue Diver course. The course covers essential topics such as basic life support, cardiopulmonary resuscitation (CPR) and injury management.
                          Your instructor will teach you how to give CPR correctly, and how to respond to accidents that will make you not only a better diver but also a better prepared citizen to attend to emergencies that can happen in life itself.
                          This course is a mandatory requirement to be certified as a rescue diver.

                        </p>
                        <p> During the course, you will learn how to recognize and respond to emergencies, as well as how to provide basic life support and first aid. You will also learn how to perform CPR, which is a vital skill for any diver. The course is taught by certified PADI instructors, and it is conducted in a classroom setting. The course also includes hands-on practice scenarios, so you can apply the skills you have learned.

                          Upon completion of the course, you will be awarded a PADI Emergency First Response certification. This certification is internationally recognized and it is valid for 2 years. The EFR course is an excellent way to learn essential life-saving skills, and it provides a solid foundation for more advanced rescue training.</p>
                        <Link className="btn btn-outline-dark btn-lg d-block mb-3" to="/contact">BOOK NOW</Link>
                      </Modal.Body>
                    </Modal>
                    <h4 className="text-center">€320.00</h4>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" to="/contact">BOOK&nbsp;NOW</Link>
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
                    <h2 className="text-center pt-4">PADI<br />DIVE<br />MASTER</h2>
                    <p className="text-center">Become a scuba diving jedi master and help others use the force while underwater.</p>
                    <span className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" onClick={handlePackage6Show}>READ&nbsp;MORE</span>
                    <Modal
                      keyboard={false}
                      show={Package6Modal}
                      onHide={handlePackage6Close}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title><h2 className='mt-3'>PADI MASTER DIVER </h2></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        The PADI Master course in Tenerife is a comprehensive professional program designed for experienced divers who want to take their diving skills to the professional level, with this diploma  you can work in the industry anywhere in the world.
                        <p className="mt-3"> The course typically lasts 2 weeks and costs 725 euros. During the course, you will learn advanced diving techniques such as dive planning, equipment configuration, and risk management.
                        </p>
                        <p>You will also have the opportunity to gain experience in leadership and dive supervision, as well as refining your rescue skills. Upon completion of the course, you will be certified as a PADI Divemaster, the first level of professional certification, allowing you to assist PADI Instructors in training and leading certified divers.  </p>
                        <p> Tenerife offers great diving locations, crystal clear waters, and a wide variety of marine life, which makes it an ideal place to take the PADI Master course.</p>
                        <Link className="btn btn-outline-dark btn-lg d-block mb-3" to="/contact">BOOK NOW</Link>
                      </Modal.Body>
                    </Modal>
                    <h4 className="text-center">€725.00</h4>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" to="/contact">BOOK&nbsp;NOW</Link>
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
                    <img className="img-fluid w-100" src={special} alt="Scuba Point Special dives in Tenerife" />
                    <div className="sparkle"></div>
                    <h2 className="text-center pt-4">PADI<br />SPECIAL<br />DIVES</h2>
                    <p className="text-center">Ask us about our special dives: Deep dier, wreck diver, dive vehicle propulsion (DVP).</p>
                    <span className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" onClick={handlePackage9Show}>READ&nbsp;MORE</span>
                    <Modal
                      keyboard={false}
                      show={Package9Modal}
                      onHide={handlePackage9Close}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title><h2 className='mt-3'>SPECIAL DIVES </h2></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        The PADI Master course in Tenerife is a comprehensive professional program designed for experienced divers who want to take their diving skills to the professional level, with this diploma  you can work in the industry anywhere in the world.
                        <p className="mt-3"> The course typically lasts 2 weeks and costs 725 euros. During the course, you will learn advanced diving techniques such as dive planning, equipment configuration, and risk management.
                        </p>
                        <p>You will also have the opportunity to gain experience in leadership and dive supervision, as well as refining your rescue skills. Upon completion of the course, you will be certified as a PADI Divemaster, the first level of professional certification, allowing you to assist PADI Instructors in training and leading certified divers.  </p>
                        <p> Tenerife offers great diving locations, crystal clear waters, and a wide variety of marine life, which makes it an ideal place to take the PADI Master course.</p>
                        <Link className="btn btn-outline-dark btn-lg d-block mb-3" to="/contact">BOOK NOW</Link>
                      </Modal.Body>
                    </Modal>
                    <h4 className="text-center">€725.00</h4>
                    <Link className="btn btn-outline-dark btn-lg mx-auto w-75 d-block mb-3" to="/contact">BOOK&nbsp;NOW</Link>
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