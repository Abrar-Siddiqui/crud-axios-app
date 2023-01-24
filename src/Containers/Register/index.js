import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const navgate = useNavigate()
  const SubmitHandler = (e) =>{
    e.preventDefault();
    axios.post('https://63c12eb47165626718749d59.mockapi.io/crud',{
      e_name:name,
      e_mail:email,
      e_phone:phone
    }).then(()=>{
      alert("Your Data Successfully Store. ?")
      navgate('/')
    }).catch((err)=>{
      alert("Your Data Failed..",err)
    })
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4 m-auto card my-5 py-4 -x-2'>
        <h1 className='text-center my-3 rounded-pill shadow-lg pb-2'>Register Form</h1>
        <form onSubmit={SubmitHandler}>
          <input type="text" id="name" className='form-control' name="name" required placeholder='Name..' onChange={(e)=>setName(e.target.value)} />
          <br/>
          <input type="email" id="email" className='form-control' name="email" required  placeholder='Email..' onChange={(e)=>setEmail(e.target.value)}/>
          <br/>
          <input type="password" className='form-control' id="password" name="password" required placeholder='Mobile No..' onChange={(e)=>setPhone(e.target.value)} />
          <br/>
          <input type="submit" className='form-control btn btn-primary'  value="Submit" />
        </form>
        </div>
      </div>
    </div>
  )
}

export default Register