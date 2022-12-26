import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Gallery() {
 return (
  <
   >
   <form target="_blank" action="https://formsubmit.co/archie@archibaldbutler.com" method="POST">
    <div className="form-group">
     <div className="form-row">
      <div className="col mb-3">
       <input type="text" name="name" className="form-control" placeholder="Name" required />
      </div>
      <div className="col mb-3">
       <input type="text" name="numberOfPeople" className="form-control" placeholder="Number of people" required />
      </div>
      <div className="col mb-3">
       <input type="text" name="dateAndTime" className="form-control" placeholder="Date and time you want to go" required />
      </div>
      <div className="col mb-3">
       <input type="text" name="telephone" className="form-control" placeholder="Telephone (inc. country code)" required />
      </div>
      <div className="col mb-3">
       <input type="email" name="email" className="form-control" placeholder="Email" required />
      </div>
     </div>
    </div>
    <div className="form-group">
     <textarea placeholder="Your Message" className="form-control mb-3" name="message" required></textarea>
    </div>
    <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
   </form>
  </>
 )
}

export default Gallery