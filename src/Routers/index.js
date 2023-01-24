import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headers from '../Components/Headers'
import Home from '../Containers/Home'
import Register from '../Containers/Register'
import Updates from '../Containers/Update/updates'


const Routers = () => {
  return (
    <div>
        <BrowserRouter>
        <Headers/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/updates/:id' element={<Updates />} />
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routers