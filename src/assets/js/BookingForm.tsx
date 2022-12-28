import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Gallery() {
 return (
  <
   >
   <p className='special_p'>Use the form below to send us an instant message and we will get back to you as soon as possible.</p>
   <form target="_blank" action="https://formsubmit.co/archie@archibaldbutler.com" method="POST">
    <div className="form-group">
     <div className="form-row">

      <div className="col mb-3">
       <input type="text" name="numberOfPeople" className="form-control" placeholder="NUMBER OF PEOPLE" />
      </div>
      <div className="col mb-3">
       <input type="text" name="dateAndTime" className="form-control" placeholder="DATE AND TIME" />
      </div>
      <div className="col mb-3">
       <input type="text" name="Package" className="form-control" placeholder="PACKAGE (IF KNOWN)" />
      </div>
      <div className="col mb-3">
       <input type="text" name="name" className="form-control" placeholder="NAME*" required />
      </div>
      <div className="col mb-3">
       <input type="text" name="telephone" className="form-control" placeholder="TELEPHONE*" required />
      </div>
      <div className="col mb-3">
       <input type="email" name="email" className="form-control" placeholder="EMAIL*" required />
      </div>
     </div>
    </div>
    <div className="form-group">
     <textarea className="form-control mb-3" name="message" placeholder="MESSAGE*" required></textarea>
    </div>
    <button type="submit" className="btn btn-lg btn-dark btn-block w-100">Submit Form</button>
   </form>
  </>
 )
}

export default Gallery