import React  from 'react';
import './App.css';
import {auth} from "../config/Firebase"
import Auth from "./Auth.js"
import {signOut} from "firebase/auth"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignOut =  () =>
{
    const navigate = useNavigate()
    const LogOut = async () =>
    {
        try{
            signOut(auth)
            navigate('/')
        }
        catch(e)
        {
            alert(e.message)
        }
    }   

    return <div class="SignOut"><button onClick={LogOut}>Sign Out</button></div>}

export default SignOut