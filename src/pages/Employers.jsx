import { useState } from 'react'

function computeNextId(items) {
  return items && items.length ? Number(items[items.length - 1].id) + 1 : 1
}
function isNonEmpty(str) { return typeof str === 'string' && str.trim().length > 0 }

export default function Employers() {
  const [employers, setEmployers] = useState([
    { id: 1, name: 'Hilal Hardware', type: 'Shop', location: 'Lal Chowk' },
    { id: 2, name: 'Shabir Household', type: 'Household', location: 'Nowhatta' },
  ])
  const [form, setForm] = useState({ name: '', type: 'Shop', location: '' })

  function addEmployer(e) {
    e.preventDefault()
    if (!isNonEmpty(form.name) || !isNonEmpty(form.location)) return
    setEmployers(prev => [...prev, { id: computeNextId(prev), ...form }])
    setForm({ name: '', type: 'Shop', location: '' })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Employers</h2>

      <form onSubmit={addEmployer} className="bg-white p-4 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
        <input className="border rounded-lg px-3 py-2" placeholder="Name"
          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <select className="border rounded-lg px-3 py-2"
          value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
          <option>Shop</option>
          <option>Household</option>
          <option>Business</option>
        </select>
        <input className="border rounded-lg px-3 py-2" placeholder="Location"
          value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
        <div className="md:col-span-3">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add Employer
          </button>
        </div>
      </form>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3 text-sm text-gray-600">ID</th>
              <th className="px-4 py-3 text-sm text-gray-600">Name</th>
              <th className="px-4 py-3 text-sm text-gray-600">Type</th>
              <th className="px-4 py-3 text-sm text-gray-600">Location</th>
            </tr>
          </thead>
          <tbody>
            {employers.map(e => (
              <tr key={e.id} className="border-t">
                <td className="px-4 py-3 text-sm">{e.id}</td>
                <td className="px-4 py-3">{e.name}</td>
                <td className="px-4 py-3">{e.type}</td>
                <td className="px-4 py-3">{e.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
