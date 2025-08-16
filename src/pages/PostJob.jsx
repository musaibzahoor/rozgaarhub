import { useState } from 'react'
import Input from '../components/Input.jsx'
import Select from '../components/Select.jsx'
import Button from '../components/Button.jsx'
import { useData } from '../store/DataContext.jsx'

export default function PostJob() {
  const { addJob } = useData()
  const [form, setForm] = useState({
    title: '', description: '', category: '', location: '',
    date: '', hours: 8, pay: '', transportRequired: 'No', contact: ''
  })

  const submit = (e) => {
    e.preventDefault()
    addJob(form)
    setForm({ title:'', description:'', category:'', location:'', date:'', hours:8, pay:'', transportRequired:'No', contact:'' })
  }

  return (
    <section className="section container-px mx-auto">
      <h1 className="h1 mb-4">Post a Job</h1>
      <form onSubmit={submit} className="grid lg:grid-cols-2 gap-4">
        <Input label="Title" required value={form.title} onChange={e=>setForm(s=>({...s,title:e.target.value}))} />
        <Select label="Category" required value={form.category} onChange={e=>setForm(s=>({...s,category:e.target.value}))}>
          <option value="">Select</option>
          {['Plumber','Electrician','Mason','Driver','Carpenter','Painter','Welder','Gardener','AC Technician','Tile Setter','Loader'].map(c=><option key={c} value={c}>{c}</option>)}
        </Select>
        <Input label="Location (City)" required value={form.location} onChange={e=>setForm(s=>({...s,location:e.target.value}))} />
        <Input label="Date" type="date" value={form.date} onChange={e=>setForm(s=>({...s,date:e.target.value}))} />
        <Input label="Expected Hours" type="number" value={form.hours} onChange={e=>setForm(s=>({...s,hours:e.target.value}))} />
        <Input label="Budget / Pay (₹)" type="number" required value={form.pay} onChange={e=>setForm(s=>({...s,pay:e.target.value}))} />
        <Select label="Transport Required?" value={form.transportRequired} onChange={e=>setForm(s=>({...s,transportRequired:e.target.value}))}>
          <option>No</option><option>Yes</option>
        </Select>
        <Input label="Contact (Phone or Email)" required value={form.contact} onChange={e=>setForm(s=>({...s,contact:e.target.value}))} />
        <label className="lg:col-span-2">
          <span className="block text-sm mb-1">Description</span>
          <textarea className="w-full border rounded-md px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-primary"
            required value={form.description} onChange={e=>setForm(s=>({...s,description:e.target.value}))} />
        </label>
        <div className="lg:col-span-2 flex justify-end">
          <Button type="submit">Post Job</Button>
        </div>
      </form>
    </section>
  )
}
