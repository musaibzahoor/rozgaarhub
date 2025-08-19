import { useState } from 'react'

export default function Transport() {
  const [requests] = useState([
    { id: 201, jobId: 101, pickup: 'Rajbagh', drop: 'Bemina', driverAssigned: 'Imran (Auto)' },
    { id: 202, jobId: 102, pickup: 'Lal Chowk', drop: 'Nowhatta', driverAssigned: '-' },
  ])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Transport</h2>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3 text-sm text-gray-600">Request ID</th>
              <th className="px-4 py-3 text-sm text-gray-600">Job ID</th>
              <th className="px-4 py-3 text-sm text-gray-600">Pickup</th>
              <th className="px-4 py-3 text-sm text-gray-600">Drop</th>
              <th className="px-4 py-3 text-sm text-gray-600">Driver</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(r => (
              <tr key={r.id} className="border-t">
                <td className="px-4 py-3 text-sm">{r.id}</td>
                <td className="px-4 py-3">{r.jobId}</td>
                <td className="px-4 py-3">{r.pickup}</td>
                <td className="px-4 py-3">{r.drop}</td>
                <td className="px-4 py-3">{r.driverAssigned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
