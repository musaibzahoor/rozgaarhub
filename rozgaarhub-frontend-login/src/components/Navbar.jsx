import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <div><Link to="/" className="text-white font-bold">RozgaarHub</Link></div>
      <div>
        {user ? (
          <>
            <span style={{marginRight: '12px'}}>Hello, {user.name}</span>
            <button onClick={logout} style={{background:'#dc2626', color:'#fff', padding:'8px', borderRadius:'6px'}}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="text-white">Login</Link>
        )}
      </div>
    </nav>
  )
}
