import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Jobs from './pages/Jobs.jsx'
import Workers from './pages/Workers.jsx'
import WorkerDetail from './pages/WorkerDetail.jsx'
import PostJob from './pages/PostJob.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import FAQ from './pages/FAQ.jsx'
import NotFound from './pages/NotFound.jsx'

export default [
  { path: "/", element: Home },
  { path: "/services", element: Services },
  { path: "/jobs", element: Jobs },
  { path: "/workers", element: Workers },
  { path: "/workers/:workerId", element: WorkerDetail },
  { path: "/post-job", element: PostJob },
  { path: "/about", element: About },
  { path: "/contact", element: Contact },
  { path: "/login", element: Login },
  { path: "/signup", element: Signup },
  { path: "/faq", element: FAQ },
  { path: "*", element: NotFound },
]
