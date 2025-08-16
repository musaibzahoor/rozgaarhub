import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container-px mx-auto py-8 grid sm:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-2">RozgaarHub</h3>
          <p className="p">Connecting Skills with Opportunities.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/jobs" className="hover:text-primary">Jobs</Link></li>
            <li><Link to="/workers" className="hover:text-primary">Workers</Link></li>
            <li><Link to="/post-job" className="hover:text-primary">Post a Job</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-1">
            <li>Email: musaibdar1365.md@gmail.com</li>
            <li>Phone: +917051663961</li>
            <li className="text-gray-500">© {new Date().getFullYear()} RozgaarHub</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
