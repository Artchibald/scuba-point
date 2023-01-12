import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { motion } from 'framer-motion'
import BookingsModal from "./BookingsModal"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/Wrapper.scss'
import team1 from './../img/team1.png';
import team2 from './../img/team2.png';
import team3 from './../img/team3.png';
import marcos from './../img/marcos.jpg';
import gonza from './../img/gonza.jpg';
import eliana from './../img/eliana.jpg';
function About() {

  const [marcosModal, setMarcosModal] = useState(false);
  const [gonzaModal, setGonzaModal] = useState(false);
  const [elianaModal, setElianaModal] = useState(false);
  const handleMarcosClose = () => setMarcosModal(false);
  const handleMarcosShow = () => setMarcosModal(true);
  const handleGonzaClose = () => setGonzaModal(false);
  const handleGonzaShow = () => setGonzaModal(true);
  const handleElianaClose = () => setElianaModal(false);
  const handleElianaShow = () => setElianaModal(true);

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

            <Container>
              <Row>
                <motion.div
                  className='mb-2 col-12'
                  initial={{ opacity: 0 }}
                  animate={{
                    y: 20,
                    opacity: 1,
                    position: "relative",
                    transition: { duration: 1.5, delay: 0 }
                  }}
                ><span className="h1 mb-5">ABOUT scuba
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        position: "relative",
                        transition: { duration: 2, delay: 1 }
                      }}
                    >&nbsp;point </motion.span>
                    IN&nbsp;TENERIFE</span>
                </motion.div>
                <motion.p
                  className='col-12 col-xl-9 special_p'
                  initial={{ opacity: 0 }}
                  animate={{
                    y: 30,
                    opacity: 1,
                    position: "relative",
                    transition: { duration: 0.6, delay: 0.6 }
                  }}
                >We would love to welcome you to our diving school in Tenerife. We have been organising excursions on the island of Santa Cruz de Tenerife for over 4 years.</motion.p>
                <motion.p
                  className='col-12 col-xl-3 special_p'
                  initial={{ opacity: 0 }}
                  animate={{
                    y: 40,
                    opacity: 1,
                    position: "relative",
                    transition: { duration: 0.7, delay: 0.7 }
                  }}
                >
                </motion.p>
                <motion.p
                  className='col-12 col-xl-6'
                  initial={{ opacity: 0 }}
                  animate={{
                    y: 40,
                    opacity: 1,
                    position: "relative",
                    transition: { duration: 0.8, delay: 0.8 }
                  }}
                >

                  With us, you will have the opportunity to discover the wonderful underwater world of Tenerife. We provide a wide range of diving courses, from beginner to professional. We also have diving excursions for all levels of experience. We would love to introduce you to this fantastic activity in Tenerife.


                </motion.p>
                <motion.p
                  className='col-12 col-xl-6'
                  initial={{ opacity: 0 }}
                  animate={{
                    y: 40,
                    opacity: 1,
                    position: "relative",
                    transition: { duration: 0.9, delay: 0.9 }
                  }}
                >

                  We have diving excursions to caves, sunken ships, places full of wild life such as green turtles, rays, octopus, moray eels and much more. We look forward to diving with you! We also provide equipment, transportation, and briefings for all levels. Bookings through our website also get 10% off!
                </motion.p>

                <motion.div
                  className='col-12 col-xl-6'
                  initial={{ opacity: 0 }}
                  animate={{
                    y: 40,
                    opacity: 1,
                    position: "relative",
                    transition: { duration: 1, delay: 1 }
                  }}
                >
                  <br />
                  <BookingsModal />
                </motion.div>
                <motion.div
                  className='mb-2 col-12'
                  initial={{ opacity: 0 }}
                  animate={{
                    y: 100,
                    opacity: 1,
                    position: "relative",
                    transition: { duration: 1.1, delay: 1.1 }
                  }}
                ><span className="h1 mb-5">MEET THE
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{

                        opacity: 1,
                        position: "relative",
                        transition: { duration: 1.2, delay: 1.1 }
                      }}
                    > TEAM</motion.span>
                  </span>
                </motion.div>
                <motion.div
                  className='col-12 col-md-4 pt-5 px-5'
                  initial={{ opacity: 0 }}
                  animate={{
                    y: 80,
                    opacity: 1,
                    position: "relative",
                    transition: { duration: 1.2, delay: 1.1 }
                  }}
                >
                  <img src={team1} className='w-100 img-fluid' alt="Gonza, instructor" />
                  <h2 className='text-center pt-4'>Marcos</h2>
                  <p className='text-center'>Marcos is a founder and instructor at Scuba Point, he has 17 years of diving experience and loves the underwater world.</p>
                  <span className="btn btn-outline-dark btn-lg mx-auto w-100 d-block mb-3" onClick={handleMarcosShow}>FULL&nbsp;BIO</span>
                  <Modal
                    keyboard={false}
                    show={marcosModal}
                    onHide={handleMarcosClose}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title><h2 className='mt-3'>Marcos bio</h2></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Marcos is a diving instructor with 17 years of experience.
                      <img src={marcos} className="img-fluid mt-3 mb-3" alt="Marcos, a diving instructor in Tenerife" />
                      <p>He is based in Tenerife, and has extensive knowledge of the local diving spots.</p>
                      <p>He is an experienced and skilled instructor who is passionate about diving and dedicated to ensuring his students have a safe and enjoyable experience.</p>

                    </Modal.Body>
                  </Modal>
                </motion.div>
                <motion.div
                  className='col-12 col-md-4 pt-5 px-5'
                  initial={{ opacity: 0 }}
                  animate={{
                    y: 80,
                    opacity: 1,
                    position: "relative",
                    transition: { duration: 1.2, delay: 1.3 }
                  }}
                >
                  <img src={team2} className='w-100 img-fluid' alt="Gonza, instructor" />
                  <h2 className='text-center pt-4'>Gonza</h2>
                  <p className='text-center'>Gonza is an Argentinian legend who is passionate about diving, he is excellent at keeping it fun too.</p>
                  <span className="btn btn-outline-dark btn-lg mx-auto w-100 d-block mb-3" onClick={handleGonzaShow}>FULL&nbsp;BIO</span>
                  <Modal
                    show={gonzaModal}
                    onHide={handleGonzaClose}
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title><h2 className='mt-3'>Gonza bio</h2></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Meet Gonza, an experienced and passionate Argentinian diving instructor based in Tenerife.
                      <img src={gonza} className="img-fluid mt-3 mb-3" alt="Marcos, a diving instructor in Tenerife" />
                      <p> Gonza has dedicated his life to diving and sharing his love for the ocean with others. He has been a diving instructor for many years and has a wealth of knowledge about the local diving spots. </p>
                      <p>When Gonza is not teaching diving, he loves to spend time with his 5-year-old daughter Moana, who is already showing an interest in following in her father's footsteps and exploring the underwater world. Gonza is a dedicated and patient instructor who is committed to ensuring that his students have a safe and enjoyable diving experience. He's a family man and loves to share his passion with his daughter Moana.</p>
                    </Modal.Body>
                  </Modal>
                </motion.div>
                <motion.div
                  className='col-12 col-md-4 pt-5 px-5'
                  initial={{ opacity: 0 }}
                  animate={{
                    y: 80,
                    opacity: 1,
                    position: "relative",
                    transition: { duration: 1.2, delay: 1.5 }
                  }}
                >
                  <img src={team3} className='w-100 img-fluid' alt="Gonza, instructor" />
                  <h2 className='text-center pt-4'>Eliana</h2>
                  <p className='text-center'>Eliana is a new member of the team, she loves Tenerife and swimming with rays across the rocks.</p>
                  <span className="btn btn-outline-dark btn-lg mx-auto w-100 d-block mb-3" onClick={handleElianaShow}>FULL&nbsp;BIO</span>
                  <Modal
                    show={elianaModal}
                    onHide={handleElianaClose}
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title><h2 className='mt-3'>Eliana bio</h2></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Meet Eliana, a valuable member of the Scuba Point diving team based in Tenerife.
                      <img src={eliana} className="img-fluid mt-3 mb-3" alt="Marcos, a diving instructor in Tenerife" />
                      <p>While she is not currently leading diving excursions, she plays an important role in the business by helping with marketing and accounting. She is a highly organized and detail-oriented professional with a deep understanding of the diving industry.</p>
                      <p>Eliana is a dedicated and hardworking team member who is committed to ensuring the success of the diving business. She brings her skills and experience to the team and works closely with the instructors to ensure that the business runs smoothly. Despite not being a diving instructor, Eliana still maintains her diving certifications and stays up-to-date on industry standards, so she can be ready to jump in and assist with diving excursions when needed.</p>

                    </Modal.Body>
                  </Modal>
                </motion.div>
              </Row>
            </Container>
          </div>
        </Row>
      </Container>

    </motion.div >
  )
}

export default About