
import React from 'react'
import { motion } from 'framer-motion'
import BookingsModal from "./BookingsModal"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/Wrapper.scss'
import team1 from './../img/team1.png';
import team2 from './../img/team2.png';
import team3 from './../img/team3.png';
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
        >We would love to welcome you to our diving school in Tenerife. We have been organizing excursions on the island of Santa Cruz de Tenerife for over 10 years.</motion.p>
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

         With us, you will have the opportunity to discover the underwater world of Tenerife. We provide a wide range of diving courses, from beginner to professional. We also have diving excursions for all levels of experience. We are a PADI 5 Star Dive Center and we are proud to be able to offer you these experiences in Tenerife.


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

         We have excursions to caves, sunken ship wrecks, spots exploding with wild life, and much more. We also offer diving excursions to the island of La Gomera, where you can see the famous whale sharks. We look forward to diving with you! We provide all equipment, transport and briefings for all levels too.
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
         <p className='text-center'>Marcos is a founder and instructor at Scuba Point, he has 12 years of diving experience and loves seafood.</p>
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