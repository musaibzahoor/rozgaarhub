import { useState } from 'react'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import { useData } from '../store/DataContext.jsx'

export default function Contact() {
  const { notify } = useData()
  const [f, setF] = useState({ name:'', email:'', message:'' })
  const submit = (e) => {
    e.preventDefault()
    notify('Message sent! (Dummy)')
    setF({ name:'', email:'', message:'' })
  }

  return (
    <section className="section container-px mx-auto">
      <h1 className="h1 mb-4">Contact Us</h1>
      <form onSubmit={submit} className="max-w-xl">
        <Input label="Name" required value={f.name} onChange={e=>setF(s=>({...s,name:e.target.value}))} />
        <Input label="Email" type="email" required value={f.email} onChange={e=>setF(s=>({...s,email:e.target.value}))} />
        <label className="block mb-3">
          <span className="block text-sm mb-1">Message</span>
          <textarea className="w-full border rounded-md px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-primary"
            required value={f.message} onChange={e=>setF(s=>({...s,message:e.target.value}))} />
        </label>
        <Button type="submit">Send</Button>
      </form>
      <div className="mt-6 text-sm text-gray-600">
        <p>Location: Srinagar, J&K (map placeholder)</p>
        <p>Support hours: 9:00–18:00 IST</p>
      </div>
    </section>
  )
}
