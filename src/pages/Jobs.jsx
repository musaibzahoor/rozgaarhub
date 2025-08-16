import { useMemo, useState } from 'react'
import { useData } from '../store/DataContext.jsx'
import Card from '../components/Card.jsx'
import Input from '../components/Input.jsx'
import Select from '../components/Select.jsx'
import Button from '../components/Button.jsx'
import Modal from '../components/Modal.jsx'

export default function Jobs() {
  const { jobs, applyToJob } = useData()
  const [q, setQ] = useState('')
  const [city, setCity] = useState('')
  const [cat, setCat] = useState('')
  const [minPay, setMinPay] = useState('')
  const [open, setOpen] = useState(false)
  const [jobId, setJobId] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', note: '' })

  const categories = useMemo(() => Array.from(new Set(jobs.map(j => j.category))), [jobs])
  const cities = useMemo(() => Array.from(new Set(jobs.map(j => j.location))), [jobs])

  const filtered = jobs.filter(j => {
    return (!q || j.title.toLowerCase().includes(q.toLowerCase()))
      && (!city || j.location === city)
      && (!cat || j.category === cat)
      && (!minPay || j.pay >= Number(minPay))
  })

  const openApply = (id) => { setJobId(id); setOpen(true) }
  const submit = (e) => {
    e.preventDefault()
    applyToJob({ jobId, ...form })
    setOpen(false)
    setForm({ name: '', phone: '', note: '' })
  }

  return (
    <section className="section container-px mx-auto">
      <h1 className="h1 mb-4">Find Jobs</h1>

      <div className="grid sm:grid-cols-4 gap-3 mb-5">
        <Input label="Search" value={q} onChange={e=>setQ(e.target.value)} placeholder="e.g., Plumber" />
        <Select label="City" value={city} onChange={e=>setCity(e.target.value)}>
          <option value="">All</option>
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </Select>
        <Select label="Category" value={cat} onChange={e=>setCat(e.target.value)}>
          <option value="">All</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </Select>
        <Input label="Min Pay (₹)" type="number" value={minPay} onChange={e=>setMinPay(e.target.value)} placeholder="1000" />
      </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(j => (
          <Card key={j.id}>
            <h3 className="font-semibold">{j.title}</h3>
            <p className="text-sm text-gray-600">{j.location} • {j.category}</p>
            <p className="p mt-2">{j.description}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm font-medium">₹{j.pay}</span>
              <Button onClick={()=>openApply(j.id)}>Apply</Button>
            </div>
          </Card>
        ))}
      </div>

      <Modal open={open} onClose={()=>setOpen(false)} title="Apply to Job">
        <form className="space-y-3" onSubmit={submit}>
          <Input label="Your Name" required value={form.name} onChange={e=>setForm(s=>({...s,name:e.target.value}))} />
          <Input label="Phone" required value={form.phone} onChange={e=>setForm(s=>({...s,phone:e.target.value}))} />
          <Input label="Note" value={form.note} onChange={e=>setForm(s=>({...s,note:e.target.value}))} />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={()=>setOpen(false)} className="px-4 py-2 rounded border">Cancel</button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Modal>
    </section>
  )
}
