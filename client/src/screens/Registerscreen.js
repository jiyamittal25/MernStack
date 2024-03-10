import React,{useState,useEffect} from "react";
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from "../components/Success";
import axios from 'axios';
function Registerscreen()
{
    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const[cpassword,setcpasssword]=useState('');

    const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success,setsuccess]=useState();

    async function register()
    {
        if(password==cpassword)
        {
        const user={
            name,
            email,
            password,
            cpassword
        }
       try {
        setLoading(true);
         const result=await axios.post('/api/users/register',user).data;
         setLoading(false);
         setsuccess(true);
         setname('')
         setemail('')
         setpassword('')
         setcpasssword('')
       } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
       }
       }
       else{
        alert("password don't match")
       }
    }
   return(
    <div >
        {loading && (<Loader/>)}
        {error && (<Error/>)}
        
        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5">
            {success && (<Success message={'Registration success'}/>)}
                <div className="bs">
                    <h2>Register</h2>
                    <input type="text" className="form-control" placeholder="name" value={name} 
                    onChange={(e)=>{setname(e.target.value)}}/>
                    <input type="text" className="form-control" placeholder="email" value={email} 
                    onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type="text" className="form-control" placeholder="password"value={password} 
                    onChange={(e)=>{setpassword(e.target.value)}}/>
                    <input type="text" className="form-control" placeholder="confirm password" value={cpassword} 
                    onChange={(e)=>{setcpasssword(e.target.value)}}/>
                   <button className="btn btn-primary mt-3" onClick={register}>Register </button>
            
                </div>
            </div>

        </div>
    </div>
   )
}
export default Registerscreen;