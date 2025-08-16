import { useState } from 'react'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import { useData } from '../store/DataContext.jsx'

export default function Signup() {
  const { notify } = useData()
  const [f, setF] = useState({ name:'', email:'', password:'' })
  const submit = (e) => { e.preventDefault(); notify('Account created (dummy)') }

  return (
    <section className="section container-px mx-auto max-w-sm">
      <h1 className="h1 mb-4">Create Account</h1>
      <form onSubmit={submit}>
        <Input label="Name" required value={f.name} onChange={e=>setF(s=>({...s,name:e.target.value}))} />
        <Input label="Email" type="email" required value={f.email} onChange={e=>setF(s=>({...s,email:e.target.value}))} />
        <Input label="Password" type="password" required value={f.password} onChange={e=>setF(s=>({...s,password:e.target.value}))} />
        <Button type="submit">Sign up</Button>
      </form>
    </section>
  )
}
