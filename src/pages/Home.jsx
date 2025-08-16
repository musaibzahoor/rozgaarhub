import { Link } from 'react-router-dom'
import { useData } from '../store/DataContext.jsx'
import Card from '../components/Card.jsx'

export default function Home() {
  const { jobs } = useData()
  const topJobs = jobs.slice(0, 3)

  return (
    <>
      <section className="section bg-white border-b">
        <div className="container-px mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="h1">Connecting Skills with Opportunities</h1>
            <p className="p mt-3">Hire trusted local workers or find nearby jobs in minutes.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/post-job" className="px-4 py-2 bg-primary text-white rounded-md">Post a Job</Link>
              <Link to="/jobs" className="px-4 py-2 bg-gray-900 text-white rounded-md">Find Jobs</Link>
            </div>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="mt-2 text-sm text-gray-500">Tip: Try “Srinagar Plumber 1200”</div>
          </div>
        </div>
      </section>

      <section className="section container-px mx-auto">
        <h2 className="h2 mb-4">Featured Jobs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topJobs.map(j => (
            <Card key={j.id}>
              <h3 className="font-semibold">{j.title}</h3>
              <p className="text-sm text-gray-600">{j.location} • ₹{j.pay}</p>
              <p className="p mt-2">{j.description}</p>
              <Link to="/jobs" className="inline-block mt-3 text-primary">View & Apply →</Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
