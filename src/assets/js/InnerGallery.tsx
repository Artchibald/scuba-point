import React from 'react';
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BookingsModal from "./BookingsModal"
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/Polaroid.scss'
import thumb1 from './../img/gallery/thumb1.jpg';
import thumb2 from './../img/gallery/thumb2.jpg';
import thumb3 from './../img/gallery/thumb3.jpg';
import thumb4 from './../img/gallery/thumb4.jpg';
import thumb5 from './../img/gallery/thumb5.jpg';
import thumb6 from './../img/gallery/thumb6.jpg';
import thumb7 from './../img/gallery/thumb7.jpg';
import thumb8 from './../img/gallery/thumb8.jpg';
import thumb9 from './../img/gallery/thumb9.jpg';
import thumb10 from './../img/gallery/thumb10.jpg';
import thumb11 from './../img/gallery/thumb11.jpg';
import thumb12 from './../img/gallery/thumb12.jpg';
import thumb13 from './../img/gallery/thumb13.jpg';
import thumb14 from './../img/gallery/thumb14.jpg';
import thumb15 from './../img/gallery/thumb15.jpg';
import thumb16 from './../img/gallery/thumb16.jpg';
import thumb18 from './../img/gallery/thumb18.jpg';
import thumb19 from './../img/gallery/thumb19.jpg';
import thumb20 from './../img/gallery/thumb20.jpg';
import thumb21 from './../img/gallery/thumb21.jpg';
import thumb22 from './../img/gallery/thumb22.jpg';
import thumb23 from './../img/gallery/thumb23.jpg';
import thumb24 from './../img/gallery/thumb24.jpg';
import thumb25 from './../img/gallery/thumb25.jpg';
import thumb28 from './../img/gallery/thumb28.jpg';
import thumb29 from './../img/gallery/thumb29.jpg';
import thumb30 from './../img/gallery/thumb30.jpg';
import thumb31 from './../img/gallery/thumb31.jpg';
import thumb32 from './../img/gallery/thumb32.jpg';
import thumb33 from './../img/gallery/thumb33.jpg';
import thumb34 from './../img/gallery/thumb34.jpg';
import thumb35 from './../img/gallery/thumb35.jpg';
import thumb36 from './../img/gallery/thumb36.jpg';
import thumb37 from './../img/gallery/thumb37.jpg';
import thumb38 from './../img/gallery/thumb38.jpg';
import thumb39 from './../img/gallery/thumb39.jpg';

function InnerGallery() {
 // let [show, setShow] = useState(false);

 // let handleClose = () => setShow(false);
 // let handleShow = () => setShow(true);




 return (
  <motion.div
   className='mb-2 col-12'
   initial={{ opacity: 0 }}
   animate={{
    y: 20,
    opacity: 1,
    position: "relative",
    transition: { duration: 1.75, delay: 1.75 }
   }}
  >
   <Container>
    <Row>
     <div className="item col-md-4 mb-4">
      <div className="polaroid">
       <img className="img-fluid" src={thumb1} alt="Scuba Point Gallery" />
      </div>
     </div>
     <div className="item col-md-4 mb-4">
      <div className="polaroid">
       <img className="img-fluid" src={thumb2} alt="Scuba Point Gallery" />
      </div>
     </div>
     <div className="item col-md-4 mb-4">
      <div className="polaroid">
       <img className="img-fluid" src={thumb3} alt="Scuba Point Gallery" />
      </div>
     </div>
     <div className="item col-md-4 mb-4">
      <div className="polaroid">
       <img className="img-fluid" src={thumb4} alt="Scuba Point Gallery" />
      </div>
     </div>
     <div className="item col-md-4 mb-4">
      <div className="polaroid">
       <img className="img-fluid" src={thumb5} alt="Scuba Point Gallery" />
      </div>
     </div>
     <div className="item col-md-4 mb-4">
      <div className="polaroid">
       <img className="img-fluid" src={thumb6} alt="Scuba Point Gallery" />
      </div>
     </div>

     <img className="img-fluid col-md-4 mb-4" src={thumb2} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb3} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb4} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb5} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb6} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb7} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb8} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb9} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb10} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb11} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb12} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb13} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb14} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb15} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb16} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb18} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb19} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb20} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb21} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb22} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb23} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb24} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb25} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb28} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb29} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb30} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb31} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb32} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb33} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb34} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb35} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb36} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb37} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb38} alt="Scuba Point Gallery" />
     <img className="img-fluid col-md-4 mb-4" src={thumb39} alt="Scuba Point Gallery" />
     <motion.div
      className='col-12 col-xl-12'
      initial={{ opacity: 0 }}
      animate={{
       y: -20,
       opacity: 1,
       position: "relative",
       transition: { duration: 2.25, delay: 2.25 }
      }}
     >
      <br />
      <BookingsModal />
     </motion.div>
    </Row>
   </Container>
  </motion.div>
 )
}

export default InnerGallery