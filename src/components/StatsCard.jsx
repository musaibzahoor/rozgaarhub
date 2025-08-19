export default function StatsCard({ title, value, note }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-3xl font-semibold mt-1">{value}</p>
      {note ? <p className="text-xs text-gray-400 mt-2">{note}</p> : null}
    </div>
  )
}
