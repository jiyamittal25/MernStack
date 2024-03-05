import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Bookingscreen=(match)=>{
    const [loading,setloading]=useState();
    const [error,seterror]=useState();
    const [room,setroom]=useState();
    useEffect(async()=>{
        try{
            setloading(true);
            const data=(await axios.post("api/rooms/getroombyid",{roomid: match.params.roomid})).data;
            setroom(data);
            setloading(false);
        }catch(err){
            setloading(false);
            seterror(true);
        }
    },[]);

    return(
        <div>
            {loading ? (<h1>Loading....</h1>) : error ? (<h1>Error....</h1>) : (<div>
                 <div className='row'>
                 <div className='col-md-5'>
                   <h1>{room.name}</h1>
                   <img src={room.imgurls[0]}className='bigimg'/>
                 </div>
                 <div className='col-md-5'>

                 </div>
             </div>)
             }
        </div>
    );
}

export default Bookingscreen;