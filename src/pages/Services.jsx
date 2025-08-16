import Card from '../components/Card.jsx'
const items = [
  { title: 'Worker Hiring', desc: 'Browse, filter, and hire trusted local workers.' },
  { title: 'Job Posting', desc: 'Post jobs with budget and required date.' },
  { title: 'Transport Assistance', desc: 'Add transport as an optional, upfront cost.' }
]
export default function Services() {
  return (
    <section className="section container-px mx-auto">
      <h1 className="h1 mb-6">Our Services</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((s, i) => (
          <Card key={i}>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="p mt-1">{s.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
