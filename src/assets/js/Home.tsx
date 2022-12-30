import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import BookingForm from "./BookingForm"
import './../css/Home.scss'
import { motion } from 'framer-motion'
import lava_cloud from './../img/lava_cloud.png';
function Home() {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 return (
  <motion.div
   className='home'
   initial={{ width: "100%" }}
   animate={{ width: "100%" }}
   exit={{ transform: "translate(100%, 0)", transition: { duration: 0.5 } }}

  >
   <div className='lava_cloud' style={{ backgroundImage: `url(${lava_cloud})` }}></div>
   <div className='lava'></div>
   <div className='sun_fire'></div>
   <div className='sun_face'></div>
   <div className='ferry'></div>
   <div className='boat'>
    <div className='teacher_arm'></div>
    <div className='gonza_arm'></div>
   </div>
   <div className='diver_arm'></div>
   <div className="dolphin_contain">
    <div className="dolphin"></div>
   </div>
   <div className="App_city_sparkles">
    <div className="App_sparkle s1"> </div>
    <div className="App_sparkle s2"> </div>
    <div className="App_sparkle s3"> </div>
    <div className="App_sparkle s4"> </div>
    <div className="App_sparkle s5"> </div>
    <div className="App_sparkle s6"> </div>
    <div className="App_sparkle s7"> </div>
    <div className="App_sparkle s8"> </div>
    <div className="App_sparkle s9"> </div>
    <div className="App_sparkle s10"> </div>
   </div>
   <div className="whale"></div>
   <div className="jellyfish"></div>
   <div className="diver"></div>
   <div className="App_bubbles">
    <div className="bubble x1"></div>
    <div className="bubble x2"></div>
    <div className="bubble x3"></div>
    <div className="bubble x4"></div>
    <div className="bubble x5"></div>
    <div className="bubble x6"></div>
    <div className="bubble x7"></div>
    <div className="bubble x8"></div>
    <div className="bubble x9"></div>
    <div className="bubble x10"></div>
    <div className="bubble x11"></div>
    <div className="bubble x12"></div>
    <div className="bubble x13"></div>
    <div className="bubble x14"></div>
    <div className="bubble x15"></div>
    <div className="bubble x16"></div>
    <div className="bubble x17"></div>
    <div className="bubble x18"></div>
    <div className="bubble x19"></div>
    <div className="bubble x20"></div>
    <div className="bubble x21"></div>
    <div className="bubble x22"></div>
    <div className="bubble x23"></div>
    <div className="bubble x24"></div>
    <div className="bubble x25"></div>
    <div className="bubble x26"></div>
    <div className="bubble x27"></div>
    <div className="bubble x28"></div>
    <div className="bubble x29"></div>
    <div className="bubble x30"></div>
    <div className="bubble x31"></div>
    <div className="bubble x32"></div>
    <div className="bubble x33"></div>
    <div className="bubble x34"></div>
    <div className="bubble x35"></div>
    <div className="bubble x36"></div>
    <div className="bubble x37"></div>
    <div className="bubble x38"></div>
    <div className="bubble x39"></div>
    <div className="bubble x40"></div>
   </div>
   <div className="cliff_right"></div>
   <div className="eel">
    <div className="eel_mouth"></div>
   </div>
   <div className="cliff_left"></div>
   <div className="ray"></div>
   <div className="turtle"></div>
   <div className="prawn"></div>
   <div className="little_fish"></div>
   <div className="gold_fish"></div>
   <div className="zebra_fish"></div>
   <div className="blue_fish"></div>
   <div className="barra1"></div>
   <div className="barra2"></div>
   <div className="barra3"></div>
   <div className="barra4"></div>
   <div className="barra5"></div>
   <div className="barra6"></div>
   <div className="bask"></div>
   <div className="monkey_arm_1"></div>
   <div className="monkey_arm_2"></div>
   <span className="blink" onClick={handleShow}></span>
   <Modal
    show={show}
    onHide={handleClose}
    keyboard={false}
   >
    <Modal.Header closeButton>
     <Modal.Title><h2 className='mt-3'>BOOK NOW</h2></Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <BookingForm />
    </Modal.Body>
   </Modal>
  </motion.div>
 );
}

export default Home;