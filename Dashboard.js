import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
  
const[fname,setFname]=useState('');
const[lname,setLname]=useState('');
const[age,setAge] = useState('');

const navigate=useNavigate();

const Click=()=>{

if(fname && lname && age !== "")
 navigate('/newpage');
  }

  return (
    <div>
        <form>
        <div className='topic'>
      <h1>welcome user</h1>
      <h2>Please fill the below details</h2>
      </div>
      <br/>
      <div>
      <label className='label2'>First name</label>
      <input type='text' value={fname} onChange={event=>{setFname(event.target.value)}}/></div>
      <br/>
      <div>
      <label className='label2'>Last name</label>
      <input type='text' value={lname} onChange={event=>{setLname(event.target.value)}}/>
      </div>
      <br/>
      <div>
      <label className='label2'>Age</label>
      <input type='number'value={age} onChange={event=>{setAge(event.target.value)}}/>
      </div>
      <br/>
     
      
      <button onClick={Click}>Click me</button>
      </form>
    </div>
  )
}

export default Dashboard
