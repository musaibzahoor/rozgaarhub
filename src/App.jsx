import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import routes from './routes.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          {routes.map(r => (
            <Route key={r.path} path={r.path} element={<r.element />} />
          ))}
        </Routes>
      </main>
      <Footer />
      <Toast />
    </div>
  )
}
