import StatsCard from '../components/StatsCard.jsx'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Workers" value={120} note="Total registered" />
        <StatsCard title="Employers" value={45} note="Total registered" />
        <StatsCard title="Active Jobs" value={32} note="Live today" />
      </div>
    </div>
  )
}
