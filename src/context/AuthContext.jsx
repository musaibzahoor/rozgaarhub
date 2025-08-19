import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      const u = { username: 'admin', role: 'admin', name: 'Admin User' }
      setUser(u)
      navigate('/admin')
      return { success: true }
    }
    if (username === 'user' && password === 'user123') {
      const u = { username: 'user', role: 'user', name: 'Regular User' }
      setUser(u)
      navigate('/user')
      return { success: true }
    }
    return { success: false, message: 'Invalid credentials' }
  }

  const logout = () => {
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
