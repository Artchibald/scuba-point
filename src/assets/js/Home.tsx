import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import BookingForm from "./BookingForm"
import './../css/Home.scss'
import { motion } from 'framer-motion';

import bg from './../img/bg.jpg';
import lava_cloud from './../img/lava_cloud.png';
import lava from './../img/lava.png';
import sun_fire from './../img/sun_fire.png';
import sun_face from './../img/sun_face.png';
import ferry from './../img/ferry.png';
import boat from './../img/boat.png';
import teacher_arm from './../img/teacher_arm.png';
import gonza_arm from './../img/gonza_arm.png';
import diver_arm from './../img/diver_arm.png';
import dolphin from './../img/dolphin.png';
import whale from './../img/whale.png';
import jellyfish from './../img/jellyfish.png';
import diver from './../img/diver.png';
import cliff_right from './../img/cliff_right.png';
import eel from './../img/eel.png';
import eel_mouth from './../img/eel_mouth.png';
import cliff_left from './../img/cliff_left.png';
import ray from './../img/ray.png';
import turtle from './../img/turtle.png';
import prawn from './../img/prawn.png';
import little_fish from './../img/little_fish.png';
import gold_fish from './../img/gold_fish.png';
import zebra_fish from './../img/zebra_fish.png';
import blue_fish from './../img/blue_fish.png';
import barra1 from './../img/barra1.png';
import barra2 from './../img/barra2.png';
import barra3 from './../img/barra3.png';
import barra4 from './../img/barra4.png';
import barra5 from './../img/barra5.png';
import barra6 from './../img/barra6.png';
import bask from './../img/bask.png';
import monkey_arm_1 from './../img/monkey_arm_1.png';
import monkey_arm_2 from './../img/monkey_arm_2.png';


function Home() {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 const [loading, setLoading] = useState(true);
 useEffect(() => {
  setLoading(false);
  setTimeout(() => {
   setLoading(false);
  }, 3000);
 }, []);

 return (
  <>
   <div>
    {loading ? (
     <h2>Loading...</h2>
    ) : (
     <>
      <motion.div
       className='home'
       initial={{ width: "100%" }}
       animate={{ width: "100%" }}
       exit={{ transform: "translate(100%, 0)", transition: { duration: 0.5 } }}
       style={{ backgroundImage: `url(${bg})` }}

      >
       <div className='lava_cloud' style={{ backgroundImage: `url(${lava_cloud})` }} ></div>
       <div className='lava' style={{ backgroundImage: `url(${lava})` }} ></div>
       <div className='sun_fire' style={{ backgroundImage: `url(${sun_fire})` }} ></div>
       <div className='sun_face' style={{ backgroundImage: `url(${sun_face})` }} ></div>
       <div className='ferry' style={{ backgroundImage: `url(${ferry})` }} ></div>
       <div className='boat' style={{ backgroundImage: `url(${boat})` }} >
        <div className='teacher_arm' style={{ backgroundImage: `url(${teacher_arm})` }} ></div>
        <div className='gonza_arm' style={{ backgroundImage: `url(${gonza_arm})` }} ></div>
       </div>
       <div className='diver_arm' style={{ backgroundImage: `url(${diver_arm})` }} ></div>
       <div className="dolphin_contain">
        <div className="dolphin" style={{ backgroundImage: `url(${dolphin})` }} ></div>
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
       <div className="whale" style={{ backgroundImage: `url(${whale})` }} ></div>
       <div className="jellyfish" style={{ backgroundImage: `url(${jellyfish})` }} ></div>
       <div className="diver" style={{ backgroundImage: `url(${diver})` }} ></div>
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
       <div className="cliff_right" style={{ backgroundImage: `url(${cliff_right})` }} ></div>
       <div className="eel" style={{ backgroundImage: `url(${eel})` }} >
        <div className="eel_mouth" style={{ backgroundImage: `url(${eel_mouth})` }} ></div>
       </div>
       <div className="cliff_left" style={{ backgroundImage: `url(${cliff_left})` }} ></div>
       <div className="ray" style={{ backgroundImage: `url(${ray})` }} ></div>
       <div className="turtle" style={{ backgroundImage: `url(${turtle})` }} ></div>
       <div className="prawn" style={{ backgroundImage: `url(${prawn})` }} ></div>
       <div className="little_fish" style={{ backgroundImage: `url(${little_fish})` }} ></div>
       <div className="gold_fish" style={{ backgroundImage: `url(${gold_fish})` }} ></div>
       <div className="zebra_fish" style={{ backgroundImage: `url(${zebra_fish})` }} ></div>
       <div className="blue_fish" style={{ backgroundImage: `url(${blue_fish})` }} ></div>
       <div className="barra1" style={{ backgroundImage: `url(${barra1})` }} ></div>
       <div className="barra2" style={{ backgroundImage: `url(${barra2})` }} ></div>
       <div className="barra3" style={{ backgroundImage: `url(${barra3})` }} ></div>
       <div className="barra4" style={{ backgroundImage: `url(${barra4})` }} ></div>
       <div className="barra5" style={{ backgroundImage: `url(${barra5})` }} ></div>
       <div className="barra6" style={{ backgroundImage: `url(${barra6})` }} ></div>
       <div className="bask" style={{ backgroundImage: `url(${bask})` }} ></div>
       <div className="monkey_arm_1" style={{ backgroundImage: `url(${monkey_arm_1})` }} ></div>
       <div className="monkey_arm_2" style={{ backgroundImage: `url(${monkey_arm_2})` }} ></div>
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
     </>
    )}
   </div>



  </>
 );
}

export default Home;