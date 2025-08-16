import { useParams, Link } from 'react-router-dom'
import { useData } from '../store/DataContext.jsx'
import Card from '../components/Card.jsx'
import RatingStars from '../components/RatingStars.jsx'
import Badge from '../components/Badge.jsx'

export default function WorkerDetail() {
  const { workerId } = useParams()
  const { workers } = useData()
  const w = workers.find(x => x.id === workerId)

  if (!w) {
    return (
      <section className="section container-px mx-auto">
        <p className="p">Worker not found. <Link to="/workers" className="text-primary">Back to list</Link></p>
      </section>
    )
  }

  return (
    <section className="section container-px mx-auto">
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h1 className="h2">{w.name} — {w.skill}</h1>
            <RatingStars value={w.rating} />
          </div>
          <p className="p mt-2">{w.bio}</p>
          <div className="mt-3 flex gap-2">
            <Badge>{w.location}</Badge>
            <Badge>₹{w.dailyRate}/day</Badge>
            <Badge>{w.yearsExperience} yrs</Badge>
            <Badge>{w.hasTransport ? 'Transport: Yes' : 'No Transport'}</Badge>
          </div>
        </Card>
        <Card>
          <h3 className="font-semibold mb-2">Service Areas</h3>
          <ul className="text-sm list-disc pl-5 space-y-1">
            {w.serviceAreas.map(a => <li key={a}>{a}</li>)}
          </ul>
          <Link to="/post-job" className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded">Hire for a Job</Link>
        </Card>
      </div>
    </section>
  )
}
