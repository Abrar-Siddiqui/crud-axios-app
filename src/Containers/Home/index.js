import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
    const [data,setData] = useState([])
    const getdataByApi = async () =>{
        const {data} = await axios.get('https://63c12eb47165626718749d59.mockapi.io/crud');
        setData(data);
    }
    useEffect(()=>{
        getdataByApi();
    },[])
    const deleteHandler = (id) =>{
        axios.delete(`https://63c12eb47165626718749d59.mockapi.io/crud/${id}`)
        getdataByApi();
    }
    // const setDataStorage = (id,name,email,phone) =>{
    //     localStorage.setItem('id',id);
    //     localStorage.setItem('name',name);
    //     localStorage.setItem('email',email);
    //     localStorage.setItem('Phone',phone)
    // }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 m-auto'>
            <table className="table  border border-1 rounded shadow-lg my-5">
                <thead className='text-center'>
                    <tr>
                    <th scope="col">E-id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col" >Phone</th>
                    <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        data.map((items,i)=>{
                            return(
                                <tr key={i}>
                                <th>{i+1}</th>
                                <td>{items.e_name}</td>
                                <td>{items.e_mail}</td>
                                <td>{items.e_phone}</td>
                                <td>
                                    <div className='d-flex justify-content-around'> 
                                    {/* <Link to={`/views/${items.id}`} className='btn btn-success'>View</Link> */}
                                    <button className='btn btn-danger me-2' onClick={()=>{if(window.confirm("Are You Sure for Delete Data..")){deleteHandler(items.id)}}}>Del</button>
                                    <Link to={`/updates/${items.id}`} className='btn btn-warning' >
                                        Edit
                                    </Link></div>
                                </td>
                                
                            </tr>   
                            )
                        })
                    }                    
                </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Home