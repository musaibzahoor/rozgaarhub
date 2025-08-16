import { Link, NavLink } from 'react-router-dom'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-primary' : 'text-gray-700 hover:text-primary'}`
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="container-px mx-auto flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary"></div>
          <span className="font-bold">RozgaarHub</span>
        </Link>
        <nav className="hidden md:flex gap-1">
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/jobs">Jobs</NavItem>
          <NavItem to="/workers">Workers</NavItem>
          <NavItem to="/post-job">Post a Job</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/faq">FAQ</NavItem>
        </nav>
        <div className="flex gap-2">
          <Link to="/login" className="text-sm px-3 py-2">Login</Link>
          <Link to="/signup" className="text-sm px-3 py-2 bg-primary text-white rounded-md">Sign up</Link>
        </div>
      </div>
    </header>
  )
}
