import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Updates = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [ids,setIds] = useState()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    
    const getDataById = (id) =>{
        axios.get(`https://63c12eb47165626718749d59.mockapi.io/crud/${id}`)
        .then((res)=>{
            setIds(res.data.id);
            setName(res.data.e_name);
            setEmail(res.data.e_mail);
            setPhone(res.data.e_phone)
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        const {id} = params
        getDataById(id);
    },[])
    const SubmitHandler= (e) =>{
        e.preventDefault()
        axios.put(`https://63c12eb47165626718749d59.mockapi.io/crud/${ids}`,{
            e_name:name,
            e_mail:email,
            e_phone:phone
        })
        .then(()=>{
            alert('Successfully Store Data ?')
            navigate('/')            
        }).catch((err)=>{
            alert("Failed",err)
        })
        
    }
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 m-auto card my-5 py-4 -x-2'>
          <h1 className='text-center my-3 rounded-pill shadow-lg pb-2'>Register Form</h1>
          <form onSubmit={SubmitHandler}>
            <input type="text" id="name" className='form-control' value={name} required placeholder='Name..' onChange={(e)=>setName(e.target.value)} />
            <br/>
            <input type="email" id="email" className='form-control' value={email} required  placeholder='Email..' onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input type="text" className='form-control' value={phone}   required placeholder='Mobile No..' onChange={(e)=>setPhone(e.target.value)} />
            <br/>
            <input type="submit" className='form-control btn btn-primary'  value="Update Value" />
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Updates