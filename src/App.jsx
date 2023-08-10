import { useState } from 'react'
import './App.css'
import Create from './components/Create'
import EditUser from './components/EditUser'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditProfile from './components/EditProfile'
import UserProfile from './components/UserProfile'



function App() {


  return (
    <main className='main'>
      <h2 className="title">CRUD OPERATIONS</h2>

      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/editprofile" element={<EditProfile />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/edituser" element={<EditUser />} />
        <Route exact path='/userprofile' element={<UserProfile />} />

      </Routes>

    </main>
  )
}

export default App
