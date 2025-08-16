import { useState } from 'react'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import { useData } from '../store/DataContext.jsx'

export default function Login() {
  const { login } = useData()
  const [email, setEmail] = useState('')

  const submit = (e) => { e.preventDefault(); login(email) }

  return (
    <section className="section container-px mx-auto max-w-sm">
      <h1 className="h1 mb-4">Login</h1>
      <form onSubmit={submit}>
        <Input label="Email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} />
        <Button type="submit">Login</Button>
      </form>
    </section>
  )
}
