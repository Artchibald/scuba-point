import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BookingForm from "./BookingForm"
import 'bootstrap/dist/css/bootstrap.min.css';
function BookingsModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" className="btn btn-outline-dark btn-lg" onClick={handleShow}>
                BOOK YOUR TRIP NOW!
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><h2 className='mt-3'>BOOK NOW</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BookingForm />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default BookingsModal