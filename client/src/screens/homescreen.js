import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room.js";
import Loader from "../components/Loader.js";
import Error from "../components/Error.js";
const Homescreen = () => {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const response = await axios.get("api/rooms/getallrooms");
        const data = response.data;
        // console.log(data);
        // console.log(data.rooms.length);
        setrooms(data.rooms);
        setloading(false);
      } catch (err) {
        seterror(true);
        console.log(err);
        seterror(false);
      }
    };

    fetchData();

    // Since we don't have any dependencies, pass an empty array to ensure this effect runs only once
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : room.length > 1 ? (
          rooms.map((room) => {
            return;
            <div className="col-md-9 mt-3">
              <Room room={room} />
            </div>;
          })
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
};
// {/* {loading ? (<h1>Loading....</h1>) : error ? (<h1>Error</h1>) : (rooms.map(room=>{
//   return <h1>{room.name}</h1>
// }))} */}

// {/* <h1>Home Screen</h1>
// <h1>there are {rooms.rooms.length} rooms</h1> */}

export default Homescreen;
