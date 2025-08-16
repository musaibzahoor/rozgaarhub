import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="section container-px mx-auto">
      <h1 className="h1 mb-2">404</h1>
      <p className="p">Page not found. <Link to="/" className="text-primary">Go home</Link></p>
    </section>
  )
}
