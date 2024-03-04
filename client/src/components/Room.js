import React, { useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";
// import { UseState } from "react";

const Room = (room) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  useEffect(()=>{
    console.log(room.room.name);
  })


  return (
    <div className="row">
        <div className="col-md-4">
          <img src={room.room.imageurls[0]} className="smallimg" />
        </div>
        <div className="col-md-7 ">
          <h1>{room.room.name}</h1>
          <p>Max Count : {room.room.maxcount}</p>
          <p>Phone Number : {room.room.phonenumber}</p>
          <p>Type : {room.room.type}</p>
          <div style={{float:"right"}}>
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
    </div>   
  );
};
export default Room;
