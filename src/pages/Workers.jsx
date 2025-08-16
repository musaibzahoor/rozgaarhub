import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { useData } from '../store/DataContext.jsx'
import Card from '../components/Card.jsx'
import Input from '../components/Input.jsx'
import Select from '../components/Select.jsx'
import RatingStars from '../components/RatingStars.jsx'
import Badge from '../components/Badge.jsx'

export default function Workers() {
  const { workers } = useData()
  const [skill, setSkill] = useState('')
  const [city, setCity] = useState('')
  const [q, setQ] = useState('')

  const skills = useMemo(() => Array.from(new Set(workers.map(w => w.skill))), [workers])
  const cities = useMemo(() => Array.from(new Set(workers.map(w => w.location))), [workers])

  const filtered = workers.filter(w => {
    return (!skill || w.skill === skill)
      && (!city || w.location === city)
      && (!q || w.name.toLowerCase().includes(q.toLowerCase()))
  })

  return (
    <section className="section container-px mx-auto">
      <h1 className="h1 mb-4">Find Workers</h1>

      <div className="grid sm:grid-cols-3 gap-3 mb-5">
        <Select label="Skill" value={skill} onChange={e=>setSkill(e.target.value)}>
          <option value="">All</option>
          {skills.map(s => <option key={s} value={s}>{s}</option>)}
        </Select>
        <Select label="City" value={city} onChange={e=>setCity(e.target.value)}>
          <option value="">All</option>
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </Select>
        <Input label="Search by name" value={q} onChange={e=>setQ(e.target.value)} placeholder="e.g., Adil" />
      </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(w => (
          <Card key={w.id}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{w.name}</h3>
              <RatingStars value={w.rating} />
            </div>
            <p className="text-sm text-gray-600">{w.skill} • {w.location}</p>
            <p className="p mt-2">₹{w.dailyRate}/day</p>
            <div className="mt-2 flex items-center gap-2">
              <Badge>{w.yearsExperience} yrs exp</Badge>
              <Badge>{w.hasTransport ? 'Transport: Yes' : 'Transport: No'}</Badge>
            </div>
            <Link to={`/workers/${w.id}`} className="inline-block mt-3 text-primary">View Profile →</Link>
          </Card>
        ))}
      </div>
    </section>
  )
}
