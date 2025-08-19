import { NavLink } from 'react-router-dom'

export default function Sidebar({ routes }) {
  return (
    <aside className="w-64 bg-white shadow-md h-full">
      <div className="p-6 text-2xl font-bold text-blue-600">Admin Panel</div>
      <nav className="mt-2">
        <ul className="space-y-1">
          {routes.map(r => (
            <li key={r.path}>
              <NavLink
                to={r.path}
                end={r.path === '/'}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg mx-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`
                }
              >
                {r.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
