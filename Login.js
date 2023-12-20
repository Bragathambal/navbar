import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { API_URL } from './URL';
import axios from 'axios';


function Login() {
  const [userName,setUserName]=useState('')
  const [password,setPassword]=useState('')
 
    const navigate=useNavigate();
    
    
    const onSubmit=async()=>{
      await axios.post(API_URL,{
      userName,
      password
      }
      )
      if(userName && password !== "" )
      navigate('/dashboard') 
    }

    
  return (
    <div>
     
        <h1>login page</h1>
        <div><label className='label1' >Username</label>
        <input type='text' value={userName} onChange={event=>{setUserName(event.target.value)}}/></div>
        <br/>
        <div>
        <label className='label1'>Password</label>
        <input type='text' value={password} onChange={event=>{setPassword(event.target.value)}}/>
        </div>
       
      <button onClick={onSubmit}>submit
      
      </button>
     
    </div>
  )
}

export default Login
