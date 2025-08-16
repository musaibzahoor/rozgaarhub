import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import jobsSeed from '../data/jobs.json'
import workersSeed from '../data/workers.json'
import testimonials from '../data/testimonials.json'

const DataCtx = createContext()

export function DataProvider({ children }) {
  const [jobs, setJobs] = useState([])
  const [workers, setWorkers] = useState([])
  const [applications, setApplications] = useState([])
  const [user, setUser] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    setJobs(jobsSeed)
    setWorkers(workersSeed)
  }, [])

  const addJob = (job) => {
    const newJob = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...job }
    setJobs(prev => [newJob, ...prev])
    notify('Job posted successfully!')
  }

  const applyToJob = (application) => {
    const newApp = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...application }
    setApplications(prev => [newApp, ...prev])
    notify('Application submitted!')
  }

  const login = (email) => { setUser({ id: 'u1', name: 'Guest', email }); notify('Logged in') }
  const logout = () => { setUser(null); notify('Logged out') }

  const notify = (msg) => {
    setToast({ id: Date.now(), msg })
    setTimeout(() => setToast(null), 2500)
  }

  const value = useMemo(() => ({
    jobs, workers, testimonials, applications, user,
    addJob, applyToJob, login, logout, notify, toast
  }), [jobs, workers, testimonials, applications, user, toast])

  return <DataCtx.Provider value={value}>{children}</DataCtx.Provider>
}

export const useData = () => useContext(DataCtx)
