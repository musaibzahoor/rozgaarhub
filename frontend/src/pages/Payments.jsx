import StatsCard from '../components/StatsCard.jsx'

export default function Payments() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Payments</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Service Fees (Today)" value={"₹ 640"} />
        <StatsCard title="Subscriptions (Mo)" value={"₹ 0"} note="Comes later" />
        <StatsCard title="Pending Escrow" value={"₹ 1,500"} />
      </div>
    </div>
  )
}
