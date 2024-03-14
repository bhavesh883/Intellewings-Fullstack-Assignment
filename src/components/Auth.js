import React  from 'react';
import './App.css';
import {auth} from "../config/Firebase"
import Header from './Header';
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth"
const Auth = () =>
{
    const [Email,updateEmail] =useState('')
    const [Password,updatePassword] = useState('')
    const navigate = useNavigate();
    const signIn = async () =>
    {
        try{await createUserWithEmailAndPassword(auth,Email,Password);
            navigate('/')
        }

        catch(e)
        {
            alert(e.message);
        }
       
    }
    return <div class="SignIn link">
         <Header/>
        <h1>Sign UP</h1>
        <input type="Email" placeholder='Email' onChange={(e)=>updateEmail(e.target.value)}></input>
        <br></br>
        <input type="Password" placeholder= 'password' onChange={(e)=>updatePassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={signIn}>Sign Up</button>
    </div>;
}

export default Auth


