import React from 'react'
import Home from '../Component/Home'
import Create from '../Component/Create'
import Show from '../Component/Show'
import Details from '../Component/Details'
import { Routes,Route } from 'react-router-dom'
const RoutesComp = () => {
  return(
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/create" element={<Create/>} />
    <Route path="/show" element={<Show/>} />
    <Route path="/show/:id" element={<Details/>} />
  </Routes>

  )
}

export default RoutesComp