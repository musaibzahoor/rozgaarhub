import { useState } from 'react'

export default function Complaints() {
  const [items] = useState([
    { id: 301, by: 'Employer', subject: 'Late arrival', status: 'Open' },
    { id: 302, by: 'Worker', subject: 'Pay dispute', status: 'Investigating' },
  ])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Complaints</h2>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3 text-sm text-gray-600">ID</th>
              <th className="px-4 py-3 text-sm text-gray-600">By</th>
              <th className="px-4 py-3 text-sm text-gray-600">Subject</th>
              <th className="px-4 py-3 text-sm text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map(c => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-3 text-sm">{c.id}</td>
                <td className="px-4 py-3">{c.by}</td>
                <td className="px-4 py-3">{c.subject}</td>
                <td className="px-4 py-3">{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
