
import React from 'react'
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import './../css/Wrapper.scss'
function About() {
 return (
  <motion.div
   className="wrapper"
   initial={{ width: "0%" }}
   animate={{ width: "100%" }}
   exit={{ transform: "translate(100%, 0)", transition: { duration: 0.5 } }}
  >
   <div>
    <Container>
     <motion.h1
      className="header"
      initial={{ opacity: 0 }}
      animate={{
       y: -20,
       opacity: 1,
       position: "relative",
       transition: { duration: 0.75 }
      }}
     >This is the about page</motion.h1>
     <motion.p
      className="header"
      initial={{ opacity: 0 }}
      animate={{
       y: 20,
       opacity: 1,
       position: "relative",
       transition: { duration: 0.75, delay: 0.75 }
      }}
     >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sem ornare, imperdiet ante a, aliquet risus. Donec velit est, congue vel mauris ut, mattis tristique ipsum. Vestibulum commodo faucibus iaculis. Donec pellentesque, dolor sed pretium hendrerit, tortor odio varius sapien, non lobortis metus metus nec ipsum. Duis tempor ut sem vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur mauris arcu, non hendrerit lorem faucibus eu.

      Suspendisse ac sem aliquam, imperdiet justo non, elementum nibh. Fusce fringilla ipsum eu purus ornare blandit. Cras pharetra purus tortor, sit amet efficitur tellus mattis eu. Maecenas lobortis imperdiet augue. Phasellus sed aliquet augue. Phasellus leo risus, consectetur a facilisis eu, laoreet at orci. Suspendisse facilisis nisi quis porta tempor. Nullam felis diam, lacinia in pretium lobortis, ornare vel felis. Mauris massa est, porttitor eu pulvinar vitae, volutpat eget lectus. Praesent a egestas purus. Donec rhoncus volutpat lacus nec luctus. In hac habitasse platea dictumst. In nulla mauris, sollicitudin sed velit eu, tristique vehicula enim.

      Phasellus dignissim efficitur consequat. Donec porta tortor non rhoncus cursus. Aenean sed lectus malesuada, tristique sapien mollis, lobortis nunc. Integer eget cursus risus. Quisque ac nisl ullamcorper, fringilla sapien ac, elementum quam. Donec pretium libero orci, id luctus dui vulputate id. Nulla eget sapien mattis, egestas felis eu, volutpat ligula. Mauris accumsan ut nisi vitae facilisis. Nulla finibus orci eu neque dictum, non convallis lorem aliquam. Sed at ante orci. Aenean sapien libero, elementum sed scelerisque at, accumsan ut lorem.

      Ut at magna est. Mauris viverra blandit quam eget dapibus. Etiam aliquet enim et risus eleifend, non auctor leo posuere. Phasellus blandit porttitor faucibus. Duis in rutrum lectus. Donec ac odio sed justo lobortis interdum. Phasellus feugiat nulla tortor, eu venenatis turpis suscipit sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tempor, neque nec pretium pulvinar, nulla neque vestibulum dolor, in pulvinar nunc diam et turpis. Nulla dapibus sem et enim eleifend posuere.

     </motion.p>
    </Container>

   </div>
  </motion.div>
 )
}

export default About