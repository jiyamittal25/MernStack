import React, { useEffect, useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Room = (room) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={room.room.imageurls[0]} className="smallimg" />
      </div>
      <div className="col-md-7 ">
        <h1>{room.room.name}</h1>
        <b>
          {""}
          <p>Max Count : {room.room.maxcount}</p>
          <p>Phone Number : {room.room.phonenumber}</p>
          <p>Type : {room.room.type}</p>
        </b>

        <div style={{ float: "right" }}>
          <Link to={`/book/${room.room._id}`}>
            <button className="btn btn-primary mr-2">Book Now </button>
          </Link>

          <button className="btn btn-primary" onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="mg">
        <Modal.Header>
          <Modal.Title>{room.room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel = '' nextLabel=''>
            {room.room.imageurls.map(url=>{
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100 bigimg"
                      src={url}
                    />
                  </Carousel.Item>
                );
            })}
          </Carousel>
          <p>{room.room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Room;
