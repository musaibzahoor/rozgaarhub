import { useState } from 'react'

export default function Jobs() {
  const [jobs] = useState([
    { id: 101, employer: 'Hilal Hardware', role: 'Electrician', pay: 800, transportRequired: true },
    { id: 102, employer: 'Shabir Household', role: 'Plumber', pay: 700, transportRequired: false },
  ])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Jobs</h2>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3 text-sm text-gray-600">ID</th>
              <th className="px-4 py-3 text-sm text-gray-600">Employer</th>
              <th className="px-4 py-3 text-sm text-gray-600">Role</th>
              <th className="px-4 py-3 text-sm text-gray-600">Pay (₹)</th>
              <th className="px-4 py-3 text-sm text-gray-600">Transport Required</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(j => (
              <tr key={j.id} className="border-t">
                <td className="px-4 py-3 text-sm">{j.id}</td>
                <td className="px-4 py-3">{j.employer}</td>
                <td className="px-4 py-3">{j.role}</td>
                <td className="px-4 py-3">{j.pay}</td>
                <td className="px-4 py-3 text-sm">{j.transportRequired ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
