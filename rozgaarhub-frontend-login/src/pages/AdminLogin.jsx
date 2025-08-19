import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function AdminLogin() {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const res = login(username, password)
    if (!res.success) setError(res.message)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        {error && <div style={{color:'red'}}>{error}</div>}
        <input className="input mb-3" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" className="input mb-3" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="w-full p-2 bg-blue-600 text-white rounded">Login</button>
      </form>
    </div>
  )
}
