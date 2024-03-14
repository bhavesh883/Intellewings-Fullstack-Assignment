import React  from 'react';
import './App.css';
import {useState} from 'react'
import {auth} from "../config/Firebase"
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
import {signInWithEmailAndPassword} from "firebase/auth"
import {Link,useNavigate} from 'react-router-dom'

const SignIn = () =>
{
    const [Email,setEmail] = useState('')
    const navigate = useNavigate();
    const [Password,setPassword] = useState('')
    const [loader,setLoader] = useState(false)
    const Submit =async () =>
    {
        try{
            setLoader(true)
            await signInWithEmailAndPassword(auth,Email,Password);
            navigate("/home")
        }
        catch(e)
        {
            alert(e.message);
        }
        setLoader(false)
    }
    return<>{loader? <> <FontAwesomeIcon icon={faSpinner} spin /> {/* Spinner icon */}
    <span>Loading...</span></>:<div class="SignIn">
    <Header/>
    <h1>Sign IN</h1>
    <input type="email" placeholder="Email"onChange={(e)=>setEmail(e.target.value)}></input>
    <br></br>
    <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
    <br></br>
    <button onClick={Submit}>LogIn</button>
    <br></br>
    <Link to="/signup" class="link"><button>Sign Up</button></Link>
</div>}</> 
}

export default SignIn