import { useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Workers from './pages/Workers.jsx'
import Employers from './pages/Employers.jsx'
import Jobs from './pages/Jobs.jsx'
import Transport from './pages/Transport.jsx'
import Payments from './pages/Payments.jsx'
import Complaints from './pages/Complaints.jsx'
import { runSanityTests } from './utils/sanity.js'

const ROUTES = [
  { path: '/', label: 'Dashboard', element: <Dashboard /> },
  { path: '/workers', label: 'Workers', element: <Workers /> },
  { path: '/employers', label: 'Employers', element: <Employers /> },
  { path: '/jobs', label: 'Jobs', element: <Jobs /> },
  { path: '/transport', label: 'Transport', element: <Transport /> },
  { path: '/payments', label: 'Payments', element: <Payments /> },
  { path: '/complaints', label: 'Complaints', element: <Complaints /> },
]

if (typeof window !== 'undefined') runSanityTests(ROUTES)

export default function App() {
  const navRoutes = useMemo(() => ROUTES.map(({ path, label }) => ({ path, label })), [])
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar routes={navRoutes} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-y-auto">
          <Routes>
            {ROUTES.map(r => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
