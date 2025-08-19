import { useState } from 'react'

function computeNextId(items) {
  return items && items.length ? Number(items[items.length - 1].id) + 1 : 1
}
function isNonEmpty(str) { return typeof str === 'string' && str.trim().length > 0 }

export default function Workers() {
  const [workers, setWorkers] = useState([
    { id: 1, name: 'Aamir Khan', skill: 'Electrician', location: 'Rajbagh', transport: true },
    { id: 2, name: 'Bilal Ahmad', skill: 'Plumber', location: 'Bemina', transport: false },
  ])
  const [form, setForm] = useState({ name: '', skill: '', location: '', transport: false })

  function addWorker(e) {
    e.preventDefault()
    if (!isNonEmpty(form.name) || !isNonEmpty(form.skill) || !isNonEmpty(form.location)) return
    setWorkers(prev => [...prev, { id: computeNextId(prev), ...form }])
    setForm({ name: '', skill: '', location: '', transport: false })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Workers</h2>

      <form onSubmit={addWorker} className="bg-white p-4 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4">
        <input className="border rounded-lg px-3 py-2" placeholder="Name"
          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="border rounded-lg px-3 py-2" placeholder="Skill (e.g., Carpenter)"
          value={form.skill} onChange={e => setForm({ ...form, skill: e.target.value })} />
        <input className="border rounded-lg px-3 py-2" placeholder="Location"
          value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.transport}
            onChange={e => setForm({ ...form, transport: e.target.checked })} />
          Has Transport
        </label>
        <div className="md:col-span-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add Worker
          </button>
        </div>
      </form>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3 text-sm text-gray-600">ID</th>
              <th className="px-4 py-3 text-sm text-gray-600">Name</th>
              <th className="px-4 py-3 text-sm text-gray-600">Skill</th>
              <th className="px-4 py-3 text-sm text-gray-600">Location</th>
              <th className="px-4 py-3 text-sm text-gray-600">Transport</th>
            </tr>
          </thead>
          <tbody>
            {workers.map(w => (
              <tr key={w.id} className="border-t">
                <td className="px-4 py-3 text-sm">{w.id}</td>
                <td className="px-4 py-3">{w.name}</td>
                <td className="px-4 py-3">{w.skill}</td>
                <td className="px-4 py-3">{w.location}</td>
                <td className="px-4 py-3 text-sm">{w.transport ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
