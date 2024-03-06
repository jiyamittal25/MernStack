// import React, {useState,useEffect} from 'react';
// import axios from 'axios';
// import Loader from '../components/Loader';
// import Error from '../components/Error';
// const Bookingscreen=(match)=>{
//     const [loading,setloading]=useState(true);
//     const [error,seterror]=useState();
//     // const [room,setroom]=useState();
//     const [room, setroom] = useState({ name: "", imgurls: [] });

//     // useEffect(() => {
//     //   const fetchData = async () => {
//     //     try { 
//     //       setloading(true);
//     //       const response = await axios.post("api/rooms/getroombyid", {
//     //         roomid: match.params.roomid,
//     //       });
//     //       setRoom(response.data);
//     //     } catch (err) {
//     //       seterror(true);
//     //     } finally {
//     //     setloading(false);
//     //     }
//     //   };

//     //   fetchData();
//     // }, [match.params.roomid]);

//     useEffect(async () => {
//       try {
//         setloading(true);
//         const data = (
//           await axios.post("api/rooms/getroombyid", {
//             roomid: match.params.roomid,
//           })
//         ).data;
//         setroom(data);

//         //  const response = await axios.post("api/rooms/getroombyid", {
//         //    roomid: match.params.roomid
//         //  });
//         //  setroom(response.data);

//         setloading(false);
//       } catch (err) {
//         setloading(false);
//         console.log("hello");
//         seterror(true);
//       }
//     }, [match.params.roomid]);


//     return(
//       <div>
//         <h1>Booking screen</h1>

//         {loading ? (<h1>Loading....</h1>) : error ? (<h1>Error....</h1>) : (<div>
//           <div className='row'> 
//             <div className='col-md-5'>
//               <h1>{room.name}</h1>
//               <img src={room.imgurls[0]} className='bigimg' />
//             </div>
//             <div className='col-md-5'>
              
//             </div>
//           </div>
//         </div>)}

//       </div>
//     );

//     // return(
//     //     <div>
//     //         {loading ? (<Loader/>) : room ?
//     //         (<div>
//     //             <div className='row'>
//     //                 <div className='col-md-5'>
//     //                     <h1>{room.name}</h1>
//     //                     <img src={room.imgurls[0]} className="bigimg" / >
//     //                 </div>
//     //                 <div className='col-md-5'>

//     //                 </div>

//     //             </div>
//     //         </div>
//     //         ) :{<Error/>}
//     //         }
//     //     </div>
//     // );
// }

// export default Bookingscreen;   

import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { useParams } from "react-router-dom";

const Bookingscreen = (match) => {
  const { roomid } = useParams(); // This hook extracts the 'roomid' parameter from the URL
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState({ name: "", imgurls: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post("api/rooms/getroombyid", {
          roomid: roomid,
        });
        const data = response.data;
        setRoom(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
        console.log("Error fetching data:", err); // Log the error message
      }
    };

    fetchData();

    // Include any dependencies used inside the async function in the dependency array of useEffect
  }, [roomid]);

  return (
    <div className="m-5">
      {loading ? (
        <h1>
          (<Loader />)
        </h1>
      ) : error ? (
        <h1>Error....</h1>
      ) : (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-5">
              <h1>{room.name}</h1>
              <img src={room.imgurls[0]} className="bigimg" alt="Room" />
            </div>
            <div className="col-md-6">
              <div style={{ textAlign: "right" }}>
                <h1>Booking Details</h1>
                <hr />
                <b>
                  <p>Name: </p>
                  <p>From Date </p>
                  <p>To Date : </p>
                  <p>Max Count : {room.maxcount}</p>
                </b>
              </div>

              <div style={{ textAlign: "right" }}>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total days : </p>
                  <p>Rent per day : {room.rentperday}</p>
                  <p>Total Amount : </p>
                </b>
              </div>

              <div style={{ float: "right" }}>
                <button className="btn btn-primary">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookingscreen;


// import React from 'react';

// const Bookingscreen=(match)=>{
//   return (
//     <div>
//       <h1>Booking screen</h1>
//       <h1>Room id ={match.params.roomid}</h1>
//     </div>
//   )
// }

// export default Bookingscreen;